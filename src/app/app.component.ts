import { Component, HostListener, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {

  paso = 0;
  title = 'InterfazPagos';

  private _opened = false;
  constructor() {
  }
  ngOnInit(): void {
  }

}
