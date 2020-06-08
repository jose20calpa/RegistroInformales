import { Injectable } from '@angular/core';
import { ModalComponent } from '../components/commons/modal/modal.component';

@Injectable({
   providedIn: 'root'
})
export class ModalService {

    registeredError: ModalComponent;

    register(registeredError: ModalComponent) {
      this.registeredError = registeredError;
    }
    show(title:string, message:string,reload:boolean) {
      return new Promise((resolve, reject) => {

        this.registeredError.show(title,message,reload);
        this.registeredError.onOk.subscribe(() => {
          this.registeredError.hide();
          resolve();
        });
        this.registeredError.onCancel.subscribe(() => {
          this.registeredError.hide();
          reject();
        });
      });
    }

}
