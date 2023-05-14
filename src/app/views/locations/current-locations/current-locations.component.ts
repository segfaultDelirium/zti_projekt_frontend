import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CountryCode, Activity, Location } from 'src/app/types';
import { LocationsService } from '../locations.service';

@Component({
  selector: 'app-current-locations',
  templateUrl: './current-locations.component.html',
  styleUrls: ['./current-locations.component.scss']
})
export class CurrentLocationsComponent {

  currentCountryCodes: Observable<CountryCode[]> = of([]);
  currentActivities: Observable<Activity[]> = of([]);
  currentLocations: Observable<Location[]> = of([]);


  constructor(private locationsService: LocationsService){}

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
  
}
