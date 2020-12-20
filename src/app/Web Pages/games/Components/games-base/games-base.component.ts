import { Component, OnInit } from '@angular/core';
import{GamesPageService} from 'src/app/Services/GamesPage/games-page.service'
@Component({
  selector: 'app-games-base',
  templateUrl: './games-base.component.html',
  styleUrls: ['./games-base.component.css']
})
export class GamesBaseComponent implements OnInit {

  public gameList:any;
  constructor(private _GamesPageService:GamesPageService) { }

  ngOnInit(): void {
    this.gameList=this._GamesPageService.geetGameList();
  }

}
