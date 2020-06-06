import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TituloComponent } from './Components/titulo/titulo.component';
//externos
import { ArchwizardModule } from 'angular-archwizard';


@NgModule({
  declarations: [
    AppComponent,
    TituloComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ArchwizardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
