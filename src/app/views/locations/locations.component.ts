import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CountryCode, Location } from 'src/app/types';
import { LocationsService } from './locations.service';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent implements OnInit{

  currentCountryCodes: Observable<CountryCode[]> = of([]);
  currentLocations: Observable<Location[]> = of([]);


  constructor(private locationsService: LocationsService){}

  ngOnInit(): void {
    console.log('hello from ngOnInit()')

    this.currentCountryCodes = this.locationsService.getCurrentCountryCodes();
    this.currentLocations = this.locationsService.getCurrentLocations();
  }

  printCountryCode(countryCodes: CountryCode){
    console.log(countryCodes);
  }
  
}
