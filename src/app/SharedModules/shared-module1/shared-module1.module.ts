import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule1RoutingModule } from './shared-module1-routing.module';
import { FbPostComponent } from './Components/fb-post/fb-post.component';
import {MatDividerModule} from '@angular/material/divider';
import { CommentBoxComponent } from './Components/comment-box/comment-box.component';

import {MatIconModule} from '@angular/material/icon';
import { ProfilePictureComponent } from './Components/profile-picture/profile-picture.component';
import { FbStatusComponent } from './Components/fb-status/fb-status.component';
import { FbPostUploadComponent } from './Components/fb-post-upload/fb-post-upload.component';
import { FbProductComponent } from './Components/fb-product/fb-product.component';
import { GamesContainerComponent } from './Components/games-container/games-container.component';

@NgModule({
  declarations: [FbPostComponent, CommentBoxComponent, ProfilePictureComponent, FbStatusComponent, FbPostUploadComponent, FbProductComponent, GamesContainerComponent],
  imports: [
    CommonModule,
    SharedModule1RoutingModule,
    MatDividerModule,
    MatIconModule

  ],
  exports :[FbPostComponent,
    MatDividerModule,
    FbStatusComponent,
    FbPostUploadComponent,
    FbProductComponent,
    GamesContainerComponent
  ]
})
export class SharedModule1Module { }
