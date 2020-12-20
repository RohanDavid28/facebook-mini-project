import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-friends-name-button',
  templateUrl: './friends-name-button.component.html',
  styleUrls: ['./friends-name-button.component.css']
})
export class FriendsNameButtonComponent implements OnInit {
  @Input()public chat_name='';
  @Input()public imagepath='';

  constructor() { }

  ngOnInit(): void {
  }

}
