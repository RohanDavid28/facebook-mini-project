import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FriendsRoutingModule } from './friends-routing.module';
import { FriendsbaseComponent } from './Components/friendsbase/friendsbase.component';

import{SharedModule1Module} from'src/app/SharedModules/shared-module1/shared-module1.module'
@NgModule({
  declarations: [FriendsbaseComponent],
  imports: [
    CommonModule,
    FriendsRoutingModule,
    SharedModule1Module
  ]
})
export class FriendsModule { }
