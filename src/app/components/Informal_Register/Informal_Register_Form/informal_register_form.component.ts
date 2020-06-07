import { Component, OnInit } from '@angular/core';
import { CityService } from '../../../services/city.service';



@Component({
  selector: 'app-payment-interface',
  templateUrl: './informal_register_form.component.html',
  styleUrls: ['./informal_register_form.component.scss']
})
export class InformalRegisterFormComponent implements OnInit {
  paso = 0;
  _opened = false;
  cityList: Array<any>;

  constructor(private cityService: CityService  ){

  }
  ngOnInit(): void {
  }

  getCities() {
    this.cityService.getAllCities().subscribe(
      (res: any) => {
        this.cityList = res;
      },
      err => {
        console.log('Error to load resource');
      }
    );
  }

  _toggleSidebar() {
    this._opened = !this._opened;
  }


}
