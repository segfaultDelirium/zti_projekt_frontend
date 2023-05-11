import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { Activity, CountryCode, Location, LocationActivitiesCountryCodes, LocationToSend, ModificationResult } from 'src/app/types';
import { LocationsService } from 'src/app/views/locations/locations.service';
import { ModificationResultDialogComponent } from '../modification-result-dialog/modification-result-dialog.component';
import { UpdateLocationDialogComponent } from '../update-location-dialog/update-location-dialog.component';

export type EmptyLocationAndActivitiesAndCountryCodes = {
  activities: Activity[],
  countryCodes: CountryCode[]
  newLocation: Location
}

@Component({
  selector: 'app-create-location-dialog',
  templateUrl: './create-location-dialog.component.html',
  styleUrls: ['./create-location-dialog.component.scss']
})
export class CreateLocationDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<CreateLocationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: EmptyLocationAndActivitiesAndCountryCodes,
    private locationsService: LocationsService,
    public modificationResultDialog: MatDialog,
  ) {}


  creationSubscription?: Subscription;

  ngOnInit(){
    console.log(this.data);
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
