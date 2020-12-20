import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { BasecomponentComponent } from './Components/basecomponent/basecomponent.component';

import { LeftComponentComponent } from './Components/left-component/left-component.component';
import { RightComponentComponent } from './Components/right-component/right-component.component';
import { FacebookLogoComponentComponent } from './Components/facebook-logo-component/facebook-logo-component.component';
import { FacebooDescriptionComponentComponent } from './Components/faceboo-description-component/faceboo-description-component.component';
import { LoginComponentComponent } from './Components/login-component/login-component.component';
import { FormsModule } from '@angular/forms'; 

@NgModule({
  declarations: [BasecomponentComponent,
     LeftComponentComponent,
      RightComponentComponent,
      FacebookLogoComponentComponent,
      FacebooDescriptionComponentComponent,
      LoginComponentComponent
   
  ],
  imports: [
    
    CommonModule,
    LoginRoutingModule,
    FormsModule
  
  ]
})
export class LoginModule { }
