import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocationsRoutingModule } from './locations-routing.module';
import { LocationsComponent } from './locations.component';
import { TableComponent } from './table/table.component';
import { MaterialModule } from 'src/app/util/material/material.module';
import { CreateButtonComponent } from './create-button/create-button.component';


@NgModule({
  declarations: [
    LocationsComponent,
    TableComponent,
    CreateButtonComponent
  ],
  imports: [
    CommonModule,
    LocationsRoutingModule,
    MaterialModule
  ]
})
export class LocationsModule { }
