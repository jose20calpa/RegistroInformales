import { Component, OnInit, Input, Inject, EventEmitter, Output } from '@angular/core';

import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent  {
  
  onOk: EventEmitter<any> = new EventEmitter();
  onCancel: EventEmitter<any> = new EventEmitter();
  private backdrop: HTMLElement;
  private modal: HTMLElement;
  title:string;
   message:string;
   reload:boolean=false;


  @Output() reloadPage= new EventEmitter();
  style: any;

  constructor( @Inject(DOCUMENT) private document: Document) { }

  okClicked() {
    this.onOk.emit();
  }

  cancelClicked() {
    this.reloadPage.emit(this.reload);
    this.onCancel.emit();
  }

  show(title: string, message: string, reload: boolean) {
    this.reload = reload;
    this.title = title;
    this.message = message;
    this.document.body.classList.add('modal-open');
    this.style = {'display': 'block' };
  }

  hide() {

    this.document.body.classList.remove('modal-open');
    this.style = { 'display': 'none' };
  }

}
