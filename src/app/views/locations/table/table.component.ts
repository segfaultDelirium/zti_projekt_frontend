import { Component, Input, OnDestroy } from '@angular/core';
import { Location } from 'src/app/types';
import { LocationsService } from '../locations.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnDestroy{

  @Input() locations: Location[] = [];

  displayedColumns: string[] = [
    "locationId", "isActive", "streetAddress", "city", 
  // "zipcode", "state", "countryCode", "activityName", "companyName"
  "deactivate"
]
 
  deactivateSubscriptions: Subscription[] = []

  constructor(private locationsService: LocationsService){}

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

}
