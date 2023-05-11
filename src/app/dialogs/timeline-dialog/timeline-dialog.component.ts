import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable, map, of } from 'rxjs';


import { Location} from 'src/app/types';
import { LocationsService } from 'src/app/views/locations/locations.service';

type DialogData = {
  location: Location
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
    // debugger;
    this.timeline = this.locationService.getLocationTimelineGroupedByTimestamp(this.data.location.locationId).pipe(
      map(locations => {
        return [ addCurrentTimestampToLocation(this.data.location), ...locations]
      })
    )
  }

  printTimelineRow(location: Location){
    console.log(location)
  }
    
}

function addCurrentTimestampToLocation(location: Location){
  return {
    ...location,
    timestamp: "Current"
  };
}
