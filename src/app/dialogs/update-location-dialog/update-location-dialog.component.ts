import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { Activity, CountryCode, Location, LocationActivitiesCountryCodes, LocationToSend, ModificationResult } from 'src/app/types';
import { HttpService } from 'src/app/util/http/http.service';
import { LocationsService } from 'src/app/views/locations/locations.service';
import { ModificationResultDialogComponent } from '../modification-result-dialog/modification-result-dialog.component';



@Component({
  selector: 'app-update-location-dialog',
  templateUrl: './update-location-dialog.component.html',
  styleUrls: ['./update-location-dialog.component.scss']
})
export class UpdateLocationDialogComponent {
  activities: Activity[] = [];
  countryCodes: CountryCode[] = [];

  activitiesSubscription?: Subscription;
  countryCodesSubscription?: Subscription;

  constructor(
    public dialogRef: MatDialogRef<UpdateLocationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: LocationActivitiesCountryCodes,
    private locationsService: LocationsService,
    public modificationResultDialog: MatDialog,
  ) {}


  updateSubscription?: Subscription;

  ngOnInit(){

    this.activitiesSubscription = this.locationsService.getCurrentActivities().subscribe(activities => {
      this.activities = activities;

      this.data.location.activity = this.data.activities
        .filter(activity => activity.activityId === this.data.location.activity.activityId)[0]

    })

    this.countryCodesSubscription = this.locationsService.getCurrentCountryCodes().subscribe(countryCodes => {
      this.countryCodes = countryCodes;
      
      this.data.location.countryCode = this.data.countryCodes
        .filter(countryCode => countryCode.countryCodeId === this.data.location.countryCode.countryCodeId)[0];
    })

  }

  ngOnDestroy(){
    this.activitiesSubscription?.unsubscribe();
    this.countryCodesSubscription?.unsubscribe();
  }

  printLocation(){
    console.log(this.data.location)
  }

  save(locationToSave: Location){
    const updateLocationPayload: LocationToSend = this.locationsService.returnUpdateLocationPayload(this.data.currentlySavedLocation, locationToSave);
      this.updateSubscription = this.locationsService.updateLocation(updateLocationPayload).subscribe(updateResult => {
        this.openModificationResultDialog(updateResult);
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
