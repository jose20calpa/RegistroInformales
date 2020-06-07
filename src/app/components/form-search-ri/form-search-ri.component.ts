import { Component, OnInit, ViewChild } from '@angular/core';
import { DocumentTypeService } from 'src/app/services/document-type.service';
import { InformalPerson } from 'src/app/models/informal-person';
import {NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { InformalRegistrationService } from 'src/app/services/informal-registration.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';
import { FormRI } from 'src/app/models/form-ri';

@Component({
  selector: 'app-form-search-ri',
  templateUrl: './form-search-ri.component.html',
  styleUrls: ['./form-search-ri.component.scss']
})
export class FormSearchRIComponent implements OnInit {
  documentsTypeList: Array<any>;
  @ViewChild('formRI', null)
  formRI: NgForm;
  captcha:boolean;
  formObj:FormRI;
  

  InformalPerson: InformalPerson = {documentNumber: '',
  expedition: '',
  documentType: 0};

  constructor( private documentTypeService: DocumentTypeService,private calendar: NgbCalendar,
    private informalRegistartion:InformalRegistrationService,
    private spinner: NgxSpinnerService,
    private router: Router) { }

  ngOnInit() {
    this.getAllDocuments();
  }

  getAllDocuments() {
    this.documentTypeService.getAllDocuments().subscribe(
      (res: any) => {

        this.documentsTypeList = res;
      },
      err => {
        console.log('el servicio no pudo ser cargado');
      }
    );
  }
  submit(form){
    if (this.formRI.valid && this.captcha) {
      let ngbDate = this.formRI.controls['expedition'].value;
      let expeditionDate = new Date(ngbDate.year, ngbDate.month-1, ngbDate.day).toLocaleDateString();
      this.InformalPerson.expedition = expeditionDate;
      this.spinner.show();

      this.informalRegistartion.searchInformationIPGet(this.InformalPerson).subscribe(
        res => {
          this.formObj = res;
          console.log(this.formObj);
          this.spinner.hide();
          this.router.navigate(['/FormRi/']);
          console.log('ok');
        },
        (err: Response) => {
          this.spinner.hide();
          this.router.navigate(['/FormRi/']);

          console.log('fallo');
        }
      );
    } else{
      console.log('bad reauest');

    }
  }
  resolved(captchaResponse: string, res) {
    this.captcha = true;
    console.log(`Resolved response token: ${captchaResponse}`);
   
  }

}
