import { Component, OnInit } from '@angular/core';
import { FormIRServiceService } from 'src/app/services/form-irservice.service';
import { FormRI } from 'src/app/models/form-ri';


@Component({
  selector: 'app-payment-interface',
  templateUrl: './informal_register_form.component.html',
  styleUrls: ['./informal_register_form.component.scss']
})
export class InformalRegisterFormComponent implements OnInit {  

  formRI:FormRI;
  loaded = false;

  constructor(private formIRService:FormIRServiceService){
    
  }
 
  ngOnInit(): void {
    this.getForm();
  }
 
  public getForm(){
    this.formIRService.getFormIR().subscribe(
      (res: FormRI) => {
        this.formRI = res;
        this.loaded = true;
      },
      err => {
        console.log("Ha ocurrido un error intente mas tarde");
        //this.showDialog('Error', 'Ha ocurrido un error intentelo mas tarde', false);
      }
    );;
  }


}
