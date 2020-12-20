import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FriendsbaseComponent } from './Components/friendsbase/friendsbase.component';

const routes: Routes = [
  {
    path:'',
    component:FriendsbaseComponent,
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FriendsRoutingModule { }
