import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeParentComponentComponent } from './Components/home-parent-component/home-parent-component.component';

const routes: Routes = [
  {
    path:'',
    component:HomeParentComponentComponent,
    children:[
      {
        path:'',
        loadChildren:()=>import('src/app/Web Pages/Friends/friends/friends.module').then((m)=>m.FriendsModule),
      }
      ,
      
      {
        path:'marketplace',
        loadChildren:()=>import('src/app/Web Pages/Chats/chats/chats.module').then((m)=>m.ChatsModule)
      },
      {
        path:'games',
        loadChildren:()=>import('src/app/Web Pages/games/games.module').then((m)=>m.GamesModule)
      }
    ]
  } ,

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomepageRoutingModule { }
