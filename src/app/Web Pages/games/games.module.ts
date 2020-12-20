import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GamesRoutingModule } from './games-routing.module';
import { GamesBaseComponent } from './Components/games-base/games-base.component';
import{SharedModule1Module} from'src/app/SharedModules/shared-module1/shared-module1.module'


@NgModule({
  declarations: [GamesBaseComponent],
  imports: [
    CommonModule,
    GamesRoutingModule,
    SharedModule1Module
  ]
})
export class GamesModule { }
