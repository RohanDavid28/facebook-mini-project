import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-games-container',
  templateUrl: './games-container.component.html',
  styleUrls: ['./games-container.component.css']
})
export class GamesContainerComponent implements OnInit {

  constructor() { }
  @Input()gameName='';
  @Input()imagePath='';

  ngOnInit(): void {
  }

}
