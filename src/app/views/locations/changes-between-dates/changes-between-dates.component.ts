import { Component } from '@angular/core';
import { Observable, map, of } from 'rxjs';
import { LocationsService } from '../locations.service';
import { Location } from 'src/app/types';

@Component({
  selector: 'app-changes-between-dates',
  templateUrl: './changes-between-dates.component.html',
  styleUrls: ['./changes-between-dates.component.scss']
})
export class ChangesBetweenDatesComponent {
  startDate: string | null = null;
  endDate: string | null = null;

  locations: Observable<Location[]> = of([]);

  yesterdayDate = getYesterdatDate();

  constructor(private locationsService: LocationsService){}

  refreshTable(startDate: string | null, endDate: string | null){

    this.locations = this.locationsService.getLocationsWhichChangedBetweenTimestamps(startDate!, endDate!).pipe(
      map(locations => {

        return locations;
      })
    )
  }

  handleStartDateChange(date: string | null){
    this.startDate = date;
  }

  handleEndDateChange(date: string | null){
    this.endDate = date;
  }

  areDatesInvalid(startDate: string | null, endDate: string | null){
    if(startDate === null || endDate === null) return true;
    if(startDate === "" || endDate === "" ) return true;
    if(startDate === endDate) return true;
    if(new Date(startDate) >= new Date(endDate)) return true;
    return false;
  }

  getRefreshButtonTooltip(startDate: string | null, endDate: string | null){
    let tooltips: string[] = [];
    if(startDate === null || endDate === null || startDate === "" || endDate === "" ) tooltips.push('Invalid date');
    else if(startDate === endDate) tooltips.push('Dates cannot be equal.');
    else if(new Date(startDate) >= new Date(endDate)) tooltips.push('Start date cannot be later than end date.')
  }

 

}

function getYesterdatDate(){
  let yesterdayDate: Date = new Date();
  yesterdayDate.setDate( (new Date()) .getDate() - 1);
  return yesterdayDate.toISOString();
}