import { Component, Input, OnDestroy } from '@angular/core';
import { Activity, CountryCode, Location, LocationToSend } from 'src/app/types';
import { LocationsService } from '../locations.service';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { UpdateLocationDialogComponent } from 'src/app/dialogs/update-location-dialog/update-location-dialog.component';

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
 
  updateSubscriptions: Subscription[] = []
  deactivateSubscriptions: Subscription[] = []

  constructor(public dialog: MatDialog, private locationsService: LocationsService){}

  ngOnDestroy(): void {
    this.deactivateSubscriptions.forEach(subscription => subscription.unsubscribe());
  }

  printLocations(){
    console.log(this.locations);
  }

  deactivate(location: Location){
    const subscription = this.locationsService.deactivateLocation(location.locationId).subscribe(result => {
      console.log(result);
    })
    this.deactivateSubscriptions.push(subscription);

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
