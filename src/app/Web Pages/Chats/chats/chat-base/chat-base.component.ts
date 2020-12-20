import { Component, OnInit } from '@angular/core';
import{MarketPlaceService}from 'src/app/Services/MarketPlacePage/market-place.service'
@Component({
  selector: 'app-chat-base',
  templateUrl: './chat-base.component.html',
  styleUrls: ['./chat-base.component.css']
})
export class ChatBaseComponent implements OnInit {

  public productData:any;
  constructor(private _MarketPlaceService:MarketPlaceService) { }

  ngOnInit(): void {
    this.productData=this._MarketPlaceService.getProductData();
  }

}
