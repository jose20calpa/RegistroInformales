import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  private BASE_URL = '';

  constructor(private http: HttpClient) { }
  getAllCities(): Observable<any> {
    return this.http.get<any>(this.BASE_URL + 'domain/RESTListasDominio/v1/ciudad').pipe(retry(2));
  }
 
}
