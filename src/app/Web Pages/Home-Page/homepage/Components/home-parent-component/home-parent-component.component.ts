import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import{Router} from'@angular/router'
import {MatIconModule} from '@angular/material/icon';
import{HomePageService}from 'src/app/Services/HomePage/home-page.service'
@Component({
  selector: 'app-home-parent-component',
  templateUrl: './home-parent-component.component.html',
  styleUrls: ['./home-parent-component.component.css'],
  encapsulation: ViewEncapsulation.None

})
export class HomeParentComponentComponent implements OnInit {

  public buttonName:any;
  public chatName:any;
  constructor(private _Router:Router,public _home_page_service: HomePageService) { }

  ngOnInit() {
    this.buttonName=this._home_page_service.getButtonName();
    this.chatName=this._home_page_service.getChatName();
  }

  homeTrigger(){

    this._Router.navigateByUrl('/homepage');
  }
  marketplaceTrigger()
  {
    this._Router.navigateByUrl('/homepage/marketplace');
  }
  friendsTrigger()
  {
    this._Router.navigateByUrl('/homepage/games');
  }
  logoutTrigger()
  {
    this._Router.navigateByUrl('/login');
  }
}
