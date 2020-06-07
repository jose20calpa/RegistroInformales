import { Component, OnInit } from '@angular/core';
import { FormIRServiceService } from 'src/app/services/form-irservice.service';
import { FormRI } from 'src/app/models/form-ri';
import { Department } from 'src/app/models/Department';
import { Municipality } from 'src/app/models/Municipality';
import { DepartmentService } from 'src/app/services/department.service';
import { MunicipalityService } from 'src/app/services/municipality.service';


@Component({
  selector: 'app-payment-interface',
  templateUrl: './informal_register_form.component.html',
  styleUrls: ['./informal_register_form.component.scss']
})
export class InformalRegisterFormComponent implements OnInit {

  formRI: FormRI;
  departments: Department[];
  municipalities: Municipality[];
  constructor(private formIRService: FormIRServiceService,
    private deparmentService: DepartmentService,
    private municipalityService: MunicipalityService) {

  }

  ngOnInit(): void {
    this.getDepartments();
    this.getMunicipalities();
    this.getForm();   
  }

  public getForm() {
    this.formIRService.getFormIR().subscribe(
      (res: FormRI) => {
        this.formRI = res;
      },
      err => {
        console.log("Ha ocurrido un error intente mas tarde");
        //this.showDialog('Error', 'Ha ocurrido un error intentelo mas tarde', false);
      }
    );;
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

  private getMunicipalities() {

    this.municipalityService.getAllMunicipalities().subscribe(
      (res: any) => {
        this.municipalities = res;
        console.log(this.municipalities);
      },
      err => {
        console.log("Ha ocurrido un error intente mas tarde");
      }
    )

  }

  public guardarRespuestas() {

    var formRIClone = Object.assign({}, this.formRI);
    formRIClone = this.removeValuesFromObject(formRIClone);
    console.log("formRIClone: ");
    console.log(formRIClone)
    console.log("formRI: ");
    console.log(this.formRI)
    this.formIRService.guardarRespuestas(formRIClone).subscribe(
      res => {
        console.log("Sucessfull")
      },
      (err: Response) => {
        console.log("Error : " + err);
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

}
