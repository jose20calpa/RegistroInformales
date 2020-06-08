import { Component, OnInit, ViewChild, HostListener, Input, ElementRef } from '@angular/core';
import { DocumentTypeService } from 'src/app/services/document-type.service';
import { InformalPerson } from 'src/app/models/informal-person';
import {NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { InformalRegistrationService } from 'src/app/services/informal-registration.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';
import { FormRI } from 'src/app/models/form-ri';
import { CommonService } from 'src/app/services/common.service';
import { AuthorizationService } from '../../services/authorization.service';

@Component({
  selector: 'app-form-search-ri',
  templateUrl: './form-search-ri.component.html',
  styleUrls: ['./form-search-ri.component.scss']
})
export class FormSearchRIComponent implements OnInit {
  documentsTypeList: Array<any>;
  @ViewChild('formRI', null)
  public formRI: NgForm;
  public captcha:boolean;
  public formObj:FormRI;


  public InformalPerson: InformalPerson = {documentNumber: '',
  expedition: new Date(),
  documentType: ''};


  constructor( private documentTypeService: DocumentTypeService,
    private calendar: NgbCalendar,
    private informalRegistartion:InformalRegistrationService,
    private spinner: NgxSpinnerService,
    private router: Router,
    private commonService: CommonService,
    private authorizationService:AuthorizationService 
    ) { 
      this.calendar.getToday();
    }

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
      let expeditionDate = new Date(ngbDate.year, ngbDate.month-1, ngbDate.day);
      this.InformalPerson.expedition = expeditionDate;
      this.spinner.show();

      this.informalRegistartion.searchInformationIP(this.InformalPerson).subscribe(
        res => {
          this.formObj = res;
          this.commonService.sendFormRI(this.formObj);

          this.spinner.hide();
          this.authorizationService.seeResources();
          this.router.navigate(['/FormRi/']);
        },
        (err: Response) => {
          this.spinner.hide();
          alert('Un error ha ocurrido, verifique su información');
        }
      );
    } else{
      console.log('bad reauest');

    }
  }
  resolved(captchaResponse: string, res) {
    this.captcha = true;   
  }

}
