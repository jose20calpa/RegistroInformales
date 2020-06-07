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
import { FormSearchRIComponent } from './components/form-search-ri/form-search-ri.component';
import { BotDetectCaptchaModule } from 'angular-captcha';
import { RecaptchaModule, RecaptchaFormsModule } from 'ng-recaptcha';

/*funtions */
import {  loadToken } from './functions/app-initializer';
import { TokenInterceptor } from './functions/TokenInterceptor';
import { AppConfigService } from './services/app-config.service';

registerLocaleData(locales);



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,

    NotfoundComponent,
    InformalRegisterFormComponent,
    ErrorComponent,
    FormSearchRIComponent,

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
    NgbModule,
    RecaptchaModule,  //this is the recaptcha main module
    RecaptchaFormsModule, //this is the module for form incase form validation
  ],
  entryComponents: [
    
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    { provide: APP_INITIALIZER, useFactory: loadToken, deps: [AppConfigService], multi: true },
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
