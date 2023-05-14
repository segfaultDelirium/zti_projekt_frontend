import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';


import {
  // modules
  NgxMatDatetimePickerModule,
  NgxMatDateFormats,
  NGX_MAT_DATE_FORMATS,
} from '@angular-material-components/datetime-picker';
import { NgxMatMomentModule, NGX_MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular-material-components/moment-adapter';
import { MatMomentDateModule } from '@angular/material-moment-adapter';

export const MOMENT_DATETIME_WITH_SECONDS_FORMAT = 'YYYY-MM-DD HH:mm:ss';

// If using Moment
export const CUSTOM_MOMENT_FORMATS: NgxMatDateFormats = {
  parse: {
    dateInput: MOMENT_DATETIME_WITH_SECONDS_FORMAT,
  },
  display: {
    dateInput: MOMENT_DATETIME_WITH_SECONDS_FORMAT,
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};


const materialModules = [
  MatIconModule,
  MatSliderModule,
  MatButtonModule,
  MatSlideToggleModule,
  MatSidenavModule,
  MatDividerModule,
  MatListModule,
  MatGridListModule,
  MatCardModule,
  MatExpansionModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatInputModule,
  MatSnackBarModule,
  MatProgressBarModule,
  MatPaginatorModule,
  MatTooltipModule,
  MatSelectModule,
  MatTabsModule,
  MatButtonToggleModule,
  MatDialogModule,
  MatToolbarModule,
  MatTableModule,
  MatDatepickerModule,
  NgxMatDatetimePickerModule,
  MatDatepickerModule,
  MatMomentDateModule,
  NgxMatMomentModule,
  NgxMatDatetimePickerModule,
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...materialModules
  ],
  exports: [
    ...materialModules
  ]
})
export class MaterialModule { }
