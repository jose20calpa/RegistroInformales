import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotfoundComponent } from './components/commons/notfound/notfound.component';
import { InformalRegisterFormComponent } from './components/Informal_Register/Informal_Register_Form/informal_register_form.component';
import { FormSearchRIComponent } from './components/form-search-ri/form-search-ri.component';


const routes: Routes = [
{ path: '',component:FormSearchRIComponent},
{ path: 'FormRi',component:InformalRegisterFormComponent},

{ path: 'notfound',component:FormSearchRIComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
