import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ModificationResult } from 'src/app/types';

@Component({
  selector: 'app-modification-result-dialog',
  templateUrl: './modification-result-dialog.component.html',
  styleUrls: ['./modification-result-dialog.component.scss']
})
export class ModificationResultDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<ModificationResultDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ModificationResult){

    }
}
