import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-payment-interface',
  templateUrl: './informal_register_form.component.html',
  styleUrls: ['./informal_register_form.component.scss']
})
export class InformalRegisterFormComponent implements OnInit {  
  paso = 0;
  _opened = false;
  constructor(){
    
  }
 
  ngOnInit(): void {
  }
 
 
  

  _toggleSidebar() {
    this._opened = !this._opened;
  }


}
