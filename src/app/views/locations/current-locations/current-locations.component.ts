import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CountryCode, Activity, Location, DEFAULT_LOCATION } from 'src/app/types';
import { LocationsService } from '../locations.service';
import { MatDialog } from '@angular/material/dialog';
import { CreateLocationDialogComponent } from 'src/app/dialogs/create-location-dialog/create-location-dialog.component';

@Component({
  selector: 'app-current-locations',
  templateUrl: './current-locations.component.html',
  styleUrls: ['./current-locations.component.scss']
})
export class CurrentLocationsComponent {

  currentCountryCodes: Observable<CountryCode[]> = of([]);
  currentActivities: Observable<Activity[]> = of([]);
  currentLocations: Observable<Location[]> = of([]);


  constructor(private locationsService: LocationsService, public dialog: MatDialog){}

  ngOnInit(): void {

    this.currentCountryCodes = this.locationsService.getCurrentCountryCodes();
    this.currentLocations = this.locationsService.getCurrentLocations();
    this.currentActivities = this.locationsService.getCurrentActivities();
  }

  printCountryCode(countryCodes: CountryCode){
    console.log(countryCodes);
  }

  refreshTable(){
    this.currentLocations = this.locationsService.getCurrentLocations();
  }

  openCreateLocationDialog(){
    const dialogRef = this.dialog.open(CreateLocationDialogComponent, {
      data: DEFAULT_LOCATION
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result === undefined) return;
      if(result === '') return;

    });
  }
  
}
