import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GamesBaseComponent } from './Components/games-base/games-base.component';

const routes: Routes = [
  {
    path:'',
    component:GamesBaseComponent,
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GamesRoutingModule { }
