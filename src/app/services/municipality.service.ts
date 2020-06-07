import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Municipality } from '../models/Municipality';

@Injectable({
  providedIn: 'root'
})
export class MunicipalityService {
  
  private BASE_URL = environment.apiUrl;

  constructor(private http: HttpClient) { }
  getAllMunicipalities(): Observable<Municipality> {
    return this.http.get<Municipality>('assets/municipality.json').pipe(retry(2));
  }

}
