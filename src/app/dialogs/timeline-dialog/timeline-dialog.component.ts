import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable, map, of } from 'rxjs';


import { Location} from 'src/app/types';
import { LocationsService } from 'src/app/views/locations/locations.service';

type DialogData = {
  locationId: number
}

@Component({
  selector: 'app-timeline-dialog',
  templateUrl: './timeline-dialog.component.html',
  styleUrls: ['./timeline-dialog.component.scss']
})
export class TimelineDialogComponent implements OnInit{
  
  timeline: Observable<Location[]> = of([]);
  displayedColumns: string[] = [
    "timestamp", "isActive", "streetAddress", "city", 
    "zipcode", "state", "countryCode", "activityName", "companyName"
  ]

  constructor(
    public dialogRef: MatDialogRef<TimelineDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, 
    private locationService: LocationsService){
      
    }



  ngOnInit(): void {
    this.timeline = this.locationService.getLocationTimelineGroupedByTimestamp(this.data.locationId).pipe(
      map(locations => {
        locations[0].timestamp = "current" // locations[0] is the current state of the location.
        return locations;
      })
    )
  }
    
}

function addCurrentTimestampToLocation(location: Location){
  return {
    ...location,
    timestamp: "Current"
  };
}
