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


  updateLocation(locationPayload: Location){
    return this.httpService.requestCall(ApiMethod.PUT, ApiEndpoint.LOCATIONS, locationPayload) as Observable<any>;
  }


  returnUpdateLocationPayload(currentlySavedLocation: Location, newLocation: Location): Location{

    return {
      locationId: currentlySavedLocation.locationId,
      isActive: currentlySavedLocation.isActive == newLocation.isActive ? null : newLocation.isActive,
      streetAddress: currentlySavedLocation.streetAddress == newLocation.streetAddress ? null : newLocation.streetAddress,
      city: currentlySavedLocation.city == newLocation.city ? null : newLocation.city,
      zipcode: currentlySavedLocation.zipcode == newLocation.zipcode ? null : newLocation.zipcode,
      state: currentlySavedLocation.state == newLocation.state ? null : newLocation.state,
      countryCode: {
        countryCodeId: currentlySavedLocation.countryCode.countryCodeId == newLocation.countryCode.countryCodeId ? null : newLocation.countryCode.countryCodeId,
        isActive: null,
        countryCode: null
      },
      activity: {
        activityId: currentlySavedLocation.activity.activityId == newLocation.activity.activityId ? null : newLocation.activity.activityId,
        isActive: null,
        activityName: null
      },
      companyName: currentlySavedLocation.companyName == newLocation.companyName ? null : newLocation.companyName,
    };
  }


}
