import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { retry  } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class DocumentTypeService {
  private BASE_URL ='http://pruebamock.azurewebsites.net/';

  constructor(private http: HttpClient) { }
  getAllDocuments() {
    return this.http.get<Array<DocumentType>>(this.BASE_URL + '/RESTListasDominio/v1/tiposDocumento').pipe(retry(2));
  }
}
