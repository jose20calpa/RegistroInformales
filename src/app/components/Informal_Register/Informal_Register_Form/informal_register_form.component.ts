import { Component, OnInit, ViewChild } from '@angular/core';
import { FormIRServiceService } from 'src/app/services/form-irservice.service';
import { FormRI } from 'src/app/models/form-ri';
import { Department } from 'src/app/models/Department';
import { Municipality } from 'src/app/models/Municipality';
import { DepartmentService } from 'src/app/services/department.service';
import { MunicipalityService } from 'src/app/services/municipality.service';
import { CommonService } from '../../../services/common.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ModalComponent } from '../../commons/modal/modal.component';
import { ModalService } from 'src/app/services/modal.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment-interface',
  templateUrl: './informal_register_form.component.html',
  styleUrls: ['./informal_register_form.component.scss']
})
export class InformalRegisterFormComponent implements OnInit {

  formRI: FormRI;
  departments: Department[];
  municipalities: Municipality[];  
  cityList: Array<any>;

  @ViewChild('appModal', null) modalComponent: ModalComponent;

  constructor(private formIRService: FormIRServiceService,
    private deparmentService: DepartmentService,
    private municipalityService: MunicipalityService,
    private CommonService: CommonService,
    private spinner: NgxSpinnerService,
    private modalService: ModalService,
    private router: Router,) {

  }


  ngOnInit(): void {
    this.getDepartments();
    this.getMunicipalities();
    this.getFormRIs();  
  }


  private getDepartments() {
    this.deparmentService.getAllDepartments().subscribe(
      (res: any) => {
        this.departments = res;
        console.log(this.departments);
      },
      err => {
        console.log("Ha ocurrido un error intente mas tarde");
      }
    )
  }

  getFormRIs() {    
    this.formRI =  this.CommonService.formRi;
  }

  private getMunicipalities() {

    this.municipalityService.getAllMunicipalities().subscribe(
      (res: any) => {
        this.municipalities = res;        
      },
      err => {
        console.log("Ha ocurrido un error intente mas tarde");
      }
    )

  }

  public saveAnswers() {
    this.modalService.register(this.modalComponent);
    var formRIClone = Object.assign({}, this.formRI);
    formRIClone = this.removeValuesFromObject(formRIClone);
    this.spinner.show();
    this.formIRService.saveAnswers(formRIClone).subscribe(
      res => {
        this.spinner.hide();
        this.showDialog('Alerta', 'Se ha completado la solicitud', true);
      },
      (err: Response) => {
        this.spinner.hide();
        this.showDialog('Error', 'No fue posible realizar la solicitud', false);
      }

    )
  }

  private removeValuesFromObject(obj): FormRI {
    Object.keys(obj).forEach(key => {
      if (obj[key] && typeof obj[key] === 'object') {
        if (obj[key].length === undefined || obj[key].length > 0) {
          this.removeValuesFromObject(obj[key]);
          if (key.localeCompare("options") === 0) {
            delete obj[key];
          }
        } else if (obj[key].length === 0) {
          delete obj[key];
        }
      } else if (["title", "required", "statement", "componentType", "dataType", "val"].indexOf(key) >= 0 || obj[key] === undefined || obj[key] === null) {
        delete obj[key];
      }
    });
    return obj;
  }

  showDialog(title: string, message: string, reload: boolean) {
    this.modalService.show(title, message, reload)
      .then((res) => {
      })
      .catch((err) => {
      });
  }

  nextPage(event) {
    if (event) {      
      this.router.navigate(['', ]);             
    }
  }


}
