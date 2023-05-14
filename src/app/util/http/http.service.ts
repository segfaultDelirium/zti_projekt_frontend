import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, share } from 'rxjs';

const apiBaseUrl = 'http://localhost:8080/';

export enum ApiEndpoint{
  ACTIVITIES = 'activities',
  COUNTRY_CODES = 'country_codes',
  LOCATIONS = 'locations',
  LOCATIONS_AT_GIVEN_TIME = 'locations/at-given-time', // example /locations-at-given-time/2023-04-13 23:45:16
  
  
}

export enum ApiMethod {
  'GET',
  'POST',
  'PUT',
  'DELETE'
}


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  requestCall(apiMethod: ApiMethod, apiEndpoint: ApiEndpoint | string, data?: any){
    const url = `${apiBaseUrl}${apiEndpoint}`;
    let response;
      switch(apiMethod){
        case ApiMethod.GET:
          response = this.http.get(url);
          break;
        case ApiMethod.POST:
          response = this.http.post(url, data);
          break;
        case ApiMethod.PUT:
          response = this.http.put(url, data);
          break;
        case ApiMethod.DELETE:
          response = this.http.delete(url);
          break;
      }
      return response?.pipe(share())
      .pipe(catchError( async err => this.handleError(err)));
  }
 
  private handleError(error: HttpErrorResponse){
    console.error(JSON.stringify(error));
    // if(error instanceof HttpErrorResponse){
    //   this._error.whichError(error.status, error.message);
    //   throw error;
    // }
    // console.error('An unknown error occured:', error);

  }
}
