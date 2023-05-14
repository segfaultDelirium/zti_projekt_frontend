import { Component } from '@angular/core';

@Component({
  selector: 'app-changes-between-dates',
  templateUrl: './changes-between-dates.component.html',
  styleUrls: ['./changes-between-dates.component.scss']
})
export class ChangesBetweenDatesComponent {
  startDate: string | null = null;
  endDate: string | null = null;

  yesterdayDate = getYesterdatDate();

  refreshTable(startDate: string | null, endDate: string | null){
    // if(this.isDateInvalid(date)) return;
    // console.log(date);
    // this.locations = this.locationsService.getLocationsAtGivenTime(date!);
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
    return false;
  }

 

}

function getYesterdatDate(){
  let yesterdayDate: Date = new Date();
  yesterdayDate.setDate( (new Date()) .getDate() - 1);
  return yesterdayDate.toISOString();
}