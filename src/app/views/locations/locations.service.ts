import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CountryCode, Location } from 'src/app/types';
import { ApiEndpoint, ApiMethod, HttpService } from 'src/app/util/http/http.service';

@Injectable({
  providedIn: 'root'
})
export class LocationsService {

  constructor(private httpService: HttpService) { }

  public getCurrentCountryCodes(){
    return this.httpService.requestCall(ApiMethod.GET, ApiEndpoint.COUNTRY_CODES) as Observable<CountryCode[]>;
  }

  public getCurrentLocations(){
    return this.httpService.requestCall(ApiMethod.GET, ApiEndpoint.LOCATIONS) as Observable<Location[]>;
  }


  deactivateLocation(id: number){
    return this.httpService.requestCall(ApiMethod.DELETE, `${ApiEndpoint.LOCATIONS}/${id}`) as Observable<any>;
  }

}
