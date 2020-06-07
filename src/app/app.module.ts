import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER, LOCALE_ID } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ArchwizardModule } from 'angular-archwizard';
import { NgxSpinnerModule } from "ngx-spinner";
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { HeaderComponent } from './components/commons/header/header.component';
import { FooterComponent } from './components/commons/footer/footer.component'
import { SidebarModule } from 'ng-sidebar';


import { NotfoundComponent } from './components/commons/notfound/notfound.component';
import { InformalRegisterFormComponent } from './components/Informal_Register/Informal_Register_Form/informal_register_form.component';
import { ErrorComponent } from './components/commons/error/error.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { registerLocaleData } from '@angular/common';
import locales from '@angular/common/locales/es';
import { SectionComponent } from './components/Informal_Register/section/section.component';
registerLocaleData(locales);



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,

    NotfoundComponent,
    InformalRegisterFormComponent,
    ErrorComponent,
    SectionComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ArchwizardModule,
    SidebarModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    NgbModule
  ],
  entryComponents: [
    
  ],
  providers: [    
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
