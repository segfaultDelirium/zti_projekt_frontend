import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Location } from 'src/app/types';
import { HttpService } from 'src/app/util/http/http.service';

@Component({
  selector: 'app-update-location-dialog',
  templateUrl: './update-location-dialog.component.html',
  styleUrls: ['./update-location-dialog.component.scss']
})
export class UpdateLocationDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<UpdateLocationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public location: Location,
  ) {}

  ngOnInit(){
  }

}
