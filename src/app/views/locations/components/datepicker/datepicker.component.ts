import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { MatDatepicker, MatDatepickerInputEvent } from '@angular/material/datepicker';


// import * as Util from 'app/core/services/util/util.service';
// Depending on whether rollup is used, moment needs to be imported differently.
// Since Moment.js doesn't have a default export, we normally need to import using the `* as`
// syntax. However, rollup creates a synthetic default module and we thus need to import it using
// the `default as` syntax.

import * as _moment from 'moment';

// tslint:disable-next-line:no-duplicate-imports
import {default as _rollupMoment} from 'moment';
import { FormControl } from '@angular/forms';
import { MatDatetimePickerInputEvent, NGX_MAT_DATE_FORMATS } from '@angular-material-components/datetime-picker';
import { NGX_MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular-material-components/moment-adapter';
import { MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import { CUSTOM_MOMENT_FORMATS } from 'src/app/util/material/material.module';

const moment = _rollupMoment || _moment;




@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss'],
  providers: [
    // values
    {provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: {useUtc: true}},
    {provide: NGX_MAT_DATE_FORMATS, useValue: CUSTOM_MOMENT_FORMATS},
    {provide: NGX_MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: {useUtc: true}},
    ],
})
export class DatepickerComponent {

  @Input() title: string = '';
  @Input() initialDate: string = new Date().toISOString();
  // @Input() maxDate: Date = new Date();

  @Output() dateChange = new EventEmitter<string | null>();
  date = new FormControl(moment());



  ngOnInit(){
    this.setDate(this.initialDate);
    this.dateChange.emit(this.date.value!.toISOString());
  }

  // ngOnChanges(changes: SimpleChanges): void {
    
  //   let initialDateChanges = changes['initialDate'];
  //   if (!initialDateChanges) return;
  //   if(initialDateChanges.currentValue === '') return;
  //   // console.log(`setting date to ${initialDateChanges.currentValue}`)
  //   // debugger;
  //   this.setDate(initialDateChanges.currentValue);
  //   this.dateChange.emit(this.date.value!.toISOString());
  // }
  
  setDate(isoDate: string){
    this.date.setValue(moment(isoDate));
  }

  handleDateChange(event: MatDatetimePickerInputEvent<any>){
    if(event.value === null) {
      this.dateChange.emit(null);
      return;
    }
    this.dateChange.emit(event.value.toISOString());
  }

}



export function convertISODateTimeWithTimezoneToISODate(datetime: Date){
  return datetime.toLocaleString('sv').split(' ')[0];
}
