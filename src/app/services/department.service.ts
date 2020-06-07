import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Department } from '../models/Department';
import { retry } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  private BASE_URL = '';

  constructor(private http: HttpClient) { }

  getAllDepartments(): Observable<Department> {
    return this.http.get<Department>('assets/department.json').pipe(retry(2));
  }
}
