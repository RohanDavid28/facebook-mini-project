import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasecomponentComponent } from './Components/basecomponent/basecomponent.component';


const routes: Routes = [
  {
    path:'',
    component:BasecomponentComponent,
  }
  
];

@NgModule({
  
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
