import { Component, OnInit, Input, Inject, EventEmitter, Output } from '@angular/core';

import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent  {
  
  onOk: EventEmitter<any> = new EventEmitter();
  onCancel: EventEmitter<any> = new EventEmitter();
  private backdrop: HTMLElement;
  private modal: HTMLElement;
  title:string;
  message:string;
  next:boolean=false;


  @Output() nextPage= new EventEmitter();
  style: any;

  constructor( @Inject(DOCUMENT) private document: Document) { }

  okClicked() {
    this.onOk.emit();
  }

  cancelClicked() {
    this.nextPage.emit(this.next);
    this.onCancel.emit();
  }

  show(title: string, message: string, reload: boolean) {
    this.next = reload;
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
