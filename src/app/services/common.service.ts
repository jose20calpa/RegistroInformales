import { Injectable } from '@angular/core';
import { InformalPerson } from '../models/informal-person';
import { Subject } from 'rxjs';
import { FormRI } from '../models/form-ri';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  formRi: FormRI;
  private formRiS = new Subject<FormRI>();

  observableformRiS = this.formRiS.asObservable();
  

  constructor() { }
  sendFormRI(formRi: FormRI){
    console.log('aqui send');
    console.log(formRi);

    this.formRi = formRi;
    this.formRiS.next(formRi);
  }
}
