import { Component, OnInit } from '@angular/core';
import{ HomePageService} from'src/app/Services/HomePage/home-page.service'
@Component({
  selector: 'app-friendsbase',
  templateUrl: './friendsbase.component.html',
  styleUrls: ['./friendsbase.component.css']
})
export class FriendsbaseComponent implements OnInit {
  public postData:any;
  public status:any;
  constructor(private _HomePageService:HomePageService) { }

 
  ngOnInit(): void {
    this.postData=this._HomePageService.getPostData();
    this.status=this._HomePageService.getStatus();
  }

}
