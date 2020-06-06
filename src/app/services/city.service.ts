import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
//import { City } from '../models/city';
import { HttpClient } from '@angular/common/http';
import { retry } from 'rxjs/operators';
//import { AppConfigService } from './app-config.service';

@Injectable({
  providedIn: 'root'
})
export class CityService {
/*   private BASE_URL = AppConfigService.settings.enviromentURL.apiURL;

  constructor(private http: HttpClient) { }
  getAllCities(): Observable<City> {
    return this.http.get<City>(this.BASE_URL + 'domain/RESTListasDominio/v1/ciudad').pipe(retry(2));
  }
 */
}
