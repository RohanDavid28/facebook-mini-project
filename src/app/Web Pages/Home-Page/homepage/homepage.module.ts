import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageRoutingModule } from './homepage-routing.module';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';

import { HomeParentComponentComponent } from './Components/home-parent-component/home-parent-component.component';
import { SideNavButtonComponent } from './Components/side-nav-button/side-nav-button.component';
import { FriendsNameButtonComponent } from './Components/friends-name-button/friends-name-button.component';

@NgModule({
  declarations: [
  HomeParentComponentComponent,
  SideNavButtonComponent,
  FriendsNameButtonComponent
],
  imports: [
    CommonModule,
    HomepageRoutingModule,
    MatTabsModule,
    MatSidenavModule,
    MatIconModule,
    
  ],
  exports:[
  ]
  ,
  providers:[
    
  ]
})
export class HomepageModule { }
