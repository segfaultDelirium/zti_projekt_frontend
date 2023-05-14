import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { MatDatepicker, MatDatepickerInputEvent } from '@angular/material/datepicker';
import {MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';

import {
  NgxMatDateFormats,
  NgxMatDatetimePickerModule,
  NgxMatNativeDateModule,
  NgxMatTimepickerModule,
  NGX_MAT_DATE_FORMATS
} from '@angular-material-components/datetime-picker';

// import * as Util from 'app/core/services/util/util.service';
// Depending on whether rollup is used, moment needs to be imported differently.
// Since Moment.js doesn't have a default export, we normally need to import using the `* as`
// syntax. However, rollup creates a synthetic default module and we thus need to import it using
// the `default as` syntax.

import * as _moment from 'moment';

// tslint:disable-next-line:no-duplicate-imports
import {default as _rollupMoment} from 'moment';
import { FormControl } from '@angular/forms';
import { NgxMatMomentModule } from '@angular-material-components/moment-adapter';

// const moment = _moment;
const moment = _rollupMoment || _moment;

const dateFormat = 'YYYY-MM-DD'
const monthYearDateFormat = 'YYYY-MM'

// See the Moment.js docs for the meaning of these formats:
// https://momentjs.com/docs/#/displaying/format/
export const MY_FORMATS = {
  parse: {
    dateInput: dateFormat,
  },
  display: {
    dateInput: dateFormat,
    monthYearLabel: monthYearDateFormat,
    dateA11yLabel: dateFormat,
    monthYearA11yLabel: monthYearDateFormat,
  },
};

const CUSTOM_DATE_FORMATS: NgxMatDateFormats = {
  parse: {
    dateInput: "l, LTS"
  },
  display: {
    dateInput: "l, LTS",
    monthYearLabel: "MMM YYYY",
    dateA11yLabel: "LL",
    monthYearA11yLabel: "MMMM YYYY"
  }
};



@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss'],
  // providers: [
  //   // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
  //   // application's root module. We provide it at the component level here, due to limitations of
  //   // our example generation script.
  //   {
  //     provide: NgxMatMomentModule,
  //     useClass: MomentDateAdapter,
  //     deps: [MAT_DATE_LOCALE, NGX_MAT_MOMEMT_DATE_ADAPTER_OPTIONS],
  //   },

  //   {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  //   // { provide: NGX_MAT_DATE_FORMATS, useValue: CUSTOM_DATE_FORMATS }
  // ],
})
export class DatepickerComponent {


  readonly dateFormat = dateFormat;

  @Input() title: string = '';
  @Input() initialDate: string = '';
  @Input() maxDate: Date = new Date();

  @Output() dateChange = new EventEmitter<string>();
  date = new FormControl(moment());



  ngOnInit(){
    this.setDate(this.initialDate);
  }

  ngOnChanges(changes: SimpleChanges): void {
    
    let initialDateChanges = changes['initialDate'];
    if (!initialDateChanges) return;
    if(initialDateChanges.currentValue === '') return;
    // console.log(`setting date to ${initialDateChanges.currentValue}`)
    // debugger;
    this.setDate(initialDateChanges.currentValue);
  }
  
  setDate(isoDate: string){
    this.date.setValue(moment(isoDate));
  }

  handleDateChange(event: MatDatepickerInputEvent<any, any>){
    
    const dateToEmit = convertISODateTimeWithTimezoneToISODate(event.value._d);
    this.dateChange.emit(dateToEmit);
  }

  handleDateChange2(event: any){
    console.log(event);
    console.log(this.date.value)
  }

  handleDateChange3(event: any){
    debugger;
    console.log("hello from date change 3");
    console.log(event)
    console.log(this.date.value)
  }

}



export function convertISODateTimeWithTimezoneToISODate(datetime: Date){
  return datetime.toLocaleString('sv').split(' ')[0];
}
