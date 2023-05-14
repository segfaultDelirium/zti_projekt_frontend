import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocationsRoutingModule } from './locations-routing.module';
import { LocationsComponent } from './locations.component';
import { TableComponent } from './table/table.component';
import { MaterialModule } from 'src/app/util/material/material.module';
import { CreateButtonComponent } from './create-button/create-button.component';
import { DatepickerComponent } from './datepicker/datepicker/datepicker.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LocationsComponent,
    TableComponent,
    CreateButtonComponent,
    DatepickerComponent
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
