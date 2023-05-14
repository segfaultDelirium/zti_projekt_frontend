import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { Activity, CountryCode, Location, LocationToSend, ModificationResult } from 'src/app/types';
import { LocationsService } from 'src/app/views/locations/locations.service';
import { ModificationResultDialogComponent } from '../modification-result-dialog/modification-result-dialog.component';
import { UpdateLocationDialogComponent } from '../update-location-dialog/update-location-dialog.component';


@Component({
  selector: 'app-create-location-dialog',
  templateUrl: './create-location-dialog.component.html',
  styleUrls: ['./create-location-dialog.component.scss']
})
export class CreateLocationDialogComponent {
  activities: Activity[] = [];
  countryCodes: CountryCode[] = [];

  activitiesSubscription?: Subscription;
  countryCodesSubscription?: Subscription;
  creationSubscription?: Subscription;

  constructor(
    public dialogRef: MatDialogRef<CreateLocationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Location,
    private locationsService: LocationsService,
    public modificationResultDialog: MatDialog,
  ) {}

  

  

  ngOnInit(){
    console.log(this.data);

    this.activitiesSubscription = this.locationsService.getCurrentActivities().subscribe(activities => {
      debugger;
      this.activities = activities;

      this.data.activity = this.activities
        .filter(activity => activity.activityId === this.data.activity.activityId)[0]

    })

    this.countryCodesSubscription = this.locationsService.getCurrentCountryCodes().subscribe(countryCodes => {
      debugger;
      this.countryCodes = countryCodes;
      
      this.data.countryCode = this.countryCodes
        .filter(countryCode => countryCode.countryCodeId === this.data.countryCode.countryCodeId)[0];
    })

  }


  ngOnDestroy(){
    this.activitiesSubscription?.unsubscribe();
    this.countryCodesSubscription?.unsubscribe();
  }


  save(locationToSave: Location){
    this.creationSubscription = this.locationsService.createLocation(locationToSave).subscribe(result => {
      this.openModificationResultDialog(result);
    })

  }

  openModificationResultDialog(modificationResult: ModificationResult){
    const dialogRef = this.modificationResultDialog.open(ModificationResultDialogComponent, {
      data: modificationResult
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result === undefined) return;
      if(result === '') return;
    });
  }
}
