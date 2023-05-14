import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocationsRoutingModule } from './locations-routing.module';
import { LocationsComponent } from './locations.component';
import { TableComponent } from './table/table.component';
import { MaterialModule } from 'src/app/util/material/material.module';
import { CreateButtonComponent } from './create-button/create-button.component';
import { DatepickerComponent } from './datepicker/datepicker/datepicker.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CurrentLocationsComponent } from './current-locations/current-locations.component';
import { LocationsAtGivenTimeComponent } from './locations-at-given-time/locations-at-given-time.component';


@NgModule({
  declarations: [
    LocationsComponent,
    TableComponent,
    CreateButtonComponent,
    DatepickerComponent,
    CurrentLocationsComponent,
    LocationsAtGivenTimeComponent
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
