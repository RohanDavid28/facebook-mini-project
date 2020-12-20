import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ChatsRoutingModule } from './chats-routing.module';
import { ChatBaseComponent } from './chat-base/chat-base.component';
import{SharedModule1Module} from'src/app/SharedModules/shared-module1/shared-module1.module'


@NgModule({
  declarations: [ChatBaseComponent],
  imports: [
    CommonModule,
    ChatsRoutingModule,
    SharedModule1Module
  ]
})
export class ChatsModule { }
