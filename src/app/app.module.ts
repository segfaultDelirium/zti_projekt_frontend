import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UpdateLocationDialogComponent } from './dialogs/update-location-dialog/update-location-dialog.component';
import { MaterialModule } from './util/material/material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ModificationResultDialogComponent } from './dialogs/modification-result-dialog/modification-result-dialog.component';
import { CreateLocationDialogComponent } from './dialogs/create-location-dialog/create-location-dialog.component';
import { TimelineDialogComponent } from './dialogs/timeline-dialog/timeline-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    UpdateLocationDialogComponent,
    ModificationResultDialogComponent,
    CreateLocationDialogComponent,
    TimelineDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,

    // LayoutModule,
    
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
