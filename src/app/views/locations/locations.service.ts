import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Activity, CountryCode, CreationResult, Location, LocationToSend, ModificationResult } from 'src/app/types';
import { ApiEndpoint, ApiMethod, HttpService } from 'src/app/util/http/http.service';

@Injectable({
  providedIn: 'root'
})
export class LocationsService {

  constructor(private httpService: HttpService) { }

  public getCurrentActivities(){
    return this.httpService.requestCall(ApiMethod.GET, ApiEndpoint.ACTIVITIES) as Observable<Activity[]>;
  }

  public getCurrentCountryCodes(){
    return this.httpService.requestCall(ApiMethod.GET, ApiEndpoint.COUNTRY_CODES) as Observable<CountryCode[]>;
  }

  public getCurrentLocations(){
    return this.httpService.requestCall(ApiMethod.GET, ApiEndpoint.LOCATIONS) as Observable<Location[]>;
  }

  createLocation(location: Location){
    return this.httpService.requestCall(ApiMethod.POST, ApiEndpoint.LOCATIONS, location) as Observable<CreationResult>;
  }

  deactivateLocation(id: number){
    return this.httpService.requestCall(ApiMethod.DELETE, `${ApiEndpoint.LOCATIONS}/${id}`) as Observable<ModificationResult>;
  }

  reactivateLocation(id: number){
    return this.httpService.requestCall(ApiMethod.PUT, `${ApiEndpoint.LOCATIONS}/${id}`) as Observable<ModificationResult>;
  }

  updateLocation(locationPayload: LocationToSend){
    return this.httpService.requestCall(ApiMethod.PUT, ApiEndpoint.LOCATIONS, locationPayload) as Observable<ModificationResult>;
  }

  getLocationTimelineGroupedByTimestamp(id: number){
    return this.httpService.requestCall(ApiMethod.GET, `${ApiEndpoint.LOCATIONS}/${id}`) as Observable<Location[]>; 
  }


  getLocationsAtGivenTime(date: string){
    return this.httpService.requestCall(ApiMethod.GET, `${ApiEndpoint.LOCATIONS_AT_GIVEN_TIME}/${date}`) as Observable<Location[]>; 
  }

  returnUpdateLocationPayload(currentlySavedLocation: Location, newLocation: Location): LocationToSend{

    return {
      locationId: currentlySavedLocation.locationId,
      isActive: currentlySavedLocation.isActive == newLocation.isActive ? null : newLocation.isActive,
      streetAddress: currentlySavedLocation.streetAddress == newLocation.streetAddress ? null : newLocation.streetAddress,
      city: currentlySavedLocation.city == newLocation.city ? null : newLocation.city,
      zipcode: currentlySavedLocation.zipcode == newLocation.zipcode ? null : newLocation.zipcode,
      state: currentlySavedLocation.state == newLocation.state ? null : newLocation.state,

      countryCode: currentlySavedLocation.countryCode.countryCodeId === newLocation.countryCode.countryCodeId ? null : {
        countryCodeId: newLocation.countryCode.countryCodeId,
        isActive: null,
        countryCode: null
      },

      activity: currentlySavedLocation.activity.activityId === newLocation.activity.activityId ? null : {
        activityId: newLocation.activity.activityId,
        isActive: null,
        activityName: null
      },

      companyName: currentlySavedLocation.companyName == newLocation.companyName ? null : newLocation.companyName,
    };
  }

  


}
