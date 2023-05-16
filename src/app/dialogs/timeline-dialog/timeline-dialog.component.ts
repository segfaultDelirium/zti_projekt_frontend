import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable, map, of } from 'rxjs';


import { Location} from 'src/app/types';
import { LocationsService } from 'src/app/views/locations/locations.service';

type DialogData = {
  locationId: number,
  startDate: string,
  endDate: string;
}

@Component({
  selector: 'app-timeline-dialog',
  templateUrl: './timeline-dialog.component.html',
  styleUrls: ['./timeline-dialog.component.scss']
})
export class TimelineDialogComponent implements OnInit{
  
  // startDate: string | null = "2023-05-11 10:50:44.056275";
  // endDate: string | null = "2023-05-17 10:50:44.056275";

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

  printLocations(locations: Location[]){
    console.log(locations)
  }

  getRowClass(timestamp: string): string {
    debugger;
    if(timestamp === "current") return '';
    const date = new Date(timestamp);
    if(this.data.startDate === null && this.data.endDate === null) return '';
    if(this.data.startDate === null){
      const endDate = new Date(this.data.endDate);
      if(date < endDate) return 'row-highlight';
      return '';
    }
    if(this.data.endDate === null){
      const startDate = new Date(this.data.startDate);
      if(date > startDate) return 'row-highlight';
      return '';
    }

    const startDate = new Date(this.data.startDate);
    const endDate = new Date(this.data.endDate);
    if (date >= startDate && date <= endDate) return 'row-highlight';
    return '';
  }
    

}

