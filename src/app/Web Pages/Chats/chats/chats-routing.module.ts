import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatBaseComponent } from './chat-base/chat-base.component';

const routes: Routes = [
{
  path:'',
  component:ChatBaseComponent,
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChatsRoutingModule { }
