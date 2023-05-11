import { Component, Input, OnDestroy, Output } from '@angular/core';
import { Activity, CountryCode, Location, LocationToSend } from 'src/app/types';
import { LocationsService } from '../locations.service';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { UpdateLocationDialogComponent } from 'src/app/dialogs/update-location-dialog/update-location-dialog.component';
import { ModificationResultDialogComponent } from 'src/app/dialogs/modification-result-dialog/modification-result-dialog.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnDestroy{

  @Input() locations: Location[] = [];
  @Input() activities: Activity[] = [];
  @Input() countryCodes: CountryCode[] = [];

  displayedColumns: string[] = [
    "locationId", "isActive", "streetAddress", "city", 
  "zipcode", "state", "countryCode", "activityName", "companyName",
  "actions"
]
 
  updateSubscriptions: Subscription[] = [];
  deactivateSubscriptions: Subscription[] = [];
  reactivateSubscriptions: Subscription[] = [];

  constructor(public dialog: MatDialog, private locationsService: LocationsService){}

  ngOnDestroy(): void {
    this.updateSubscriptions.forEach(subscription => subscription.unsubscribe());
    this.deactivateSubscriptions.forEach(subscription => subscription.unsubscribe());
    this.reactivateSubscriptions.forEach(subscription => subscription.unsubscribe());
  }

  printLocations(){
    console.log(this.locations);
  }

  deactivate(location: Location){
    const subscription = this.locationsService.deactivateLocation(location.locationId).subscribe(result => {
      this.dialog.open(ModificationResultDialogComponent, {
        data: result
      });
    })
    this.deactivateSubscriptions.push(subscription);

  }

  reactivate(location: Location){
    const subscription = this.locationsService.reactivateLocation(location.locationId).subscribe(result => {
      this.dialog.open(ModificationResultDialogComponent, {
        data: result
      });
    })
    this.reactivateSubscriptions.push(subscription);
  }

  openEditDialog(location: Location){
    const currentlySavedLocation: Readonly<Location> = JSON.parse(JSON.stringify(location));
    const dialogRef = this.dialog.open(UpdateLocationDialogComponent, {
      data: {
        activities: this.activities,
        location: JSON.parse(JSON.stringify(location)),
        currentlySavedLocation: currentlySavedLocation,
        countryCodes: this.countryCodes
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result === undefined) return;
      if(result === '') return;

    });
  }

}
