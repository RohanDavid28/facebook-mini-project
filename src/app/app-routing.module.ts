import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
{
path:'',
redirectTo:'login',
 pathMatch: 'full'
},
{
  path:'login',
  loadChildren:()=>import('src/app/Web Pages/Login-page/login/login.module').then((m)=>m.LoginModule),  
  }
  ,
  {
    path:'homepage',
    loadChildren:()=>import('src/app/Web Pages/Home-Page/homepage/homepage.module').then((m)=>m.HomepageModule),  

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
