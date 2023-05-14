import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateLocationDialogComponent } from 'src/app/dialogs/create-location-dialog/create-location-dialog.component';
import { Activity, CountryCode, DEFAULT_LOCATION } from 'src/app/types';

@Component({
  selector: 'app-create-button',
  templateUrl: './create-button.component.html',
  styleUrls: ['./create-button.component.scss']
})
export class CreateButtonComponent {

  @Input() activities: Activity[] = [];
  @Input() countryCodes: CountryCode[] = [];

  constructor(public dialog: MatDialog){}

  openCreateLocationDialog(){
    const dialogRef = this.dialog.open(CreateLocationDialogComponent, {
      data: {
        activities: this.activities,
        countryCodes: this.countryCodes,
        newLocation: DEFAULT_LOCATION
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result === undefined) return;
      if(result === '') return;

    });
  }



}
