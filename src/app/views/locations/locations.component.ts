import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Activity, CountryCode, Location } from 'src/app/types';
import { LocationsService } from './locations.service';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent {

 

  refreshTable(){

  }
}
