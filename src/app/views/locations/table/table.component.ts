import { Component, Input, OnDestroy } from '@angular/core';
import { Location } from 'src/app/types';
import { LocationsService } from '../locations.service';
import { Subscription } from 'rxjs';
import { UpdateLocationDialogComponent } from 'src/app/dialogs/update/update-location-dialog/update-location-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnDestroy{

  @Input() locations: Location[] = [];

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
    const currentlySavedLocation = JSON.parse(JSON.stringify(location));
    const dialogRef = this.dialog.open(UpdateLocationDialogComponent, {
      data: JSON.parse(JSON.stringify(location)),
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result === undefined) return;
      if(result === '') return;
      debugger;
      
      const updateLocationPayload: Location = this.locationsService.returnUpdateLocationPayload(currentlySavedLocation, result);
      const subscription = this.locationsService.updateLocation(updateLocationPayload).subscribe(updateResult => {
        console.log(updateResult);
      })

      this.updateSubscriptions.push(subscription);

    });
  }

}
