import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocationsRoutingModule } from './locations-routing.module';
import { LocationsComponent } from './locations.component';
import { TableComponent } from './components/table/table.component';
import { MaterialModule } from 'src/app/util/material/material.module';
import { DatepickerComponent } from './components/datepicker/datepicker.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CurrentLocationsComponent } from './current-locations/current-locations.component';
import { LocationsAtGivenTimeComponent } from './locations-at-given-time/locations-at-given-time.component';
import { ChangesBetweenDatesComponent } from './changes-between-dates/changes-between-dates.component';


@NgModule({
  declarations: [
    LocationsComponent,
    TableComponent,
    DatepickerComponent,
    CurrentLocationsComponent,
    LocationsAtGivenTimeComponent,
    ChangesBetweenDatesComponent
  ],
  imports: [
    CommonModule,
    LocationsRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class LocationsModule { }
