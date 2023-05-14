import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Location } from 'src/app/types';
import { LocationsService } from '../locations.service';

@Component({
  selector: 'app-locations-at-given-time',
  templateUrl: './locations-at-given-time.component.html',
  styleUrls: ['./locations-at-given-time.component.scss']
})
export class LocationsAtGivenTimeComponent {

  locations: Observable<Location[]> = of([]);

  date: string | null = null;

  constructor(private locationsService: LocationsService){

  }

  refreshTable(date: string | null){
    if(this.isDateInvalid(date)) return;
    console.log(date);
    this.locations = this.locationsService.getLocationsAtGivenTime(date!);
  }

  handleDateChange(date: string | null){
    this.date = date;
  }


  isDateInvalid(date: string | null){
    if(date === null) return true;
    if(date === "") return true;
    return false;
  }

}
