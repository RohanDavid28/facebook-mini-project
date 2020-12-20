import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav-button',
  templateUrl: './side-nav-button.component.html',
  styleUrls: ['./side-nav-button.component.css']
})
export class SideNavButtonComponent implements OnInit {

  @Input()public button_name='';
  @Input() public imagepath='';
  constructor() { }

  ngOnInit(): void {
  }

}
