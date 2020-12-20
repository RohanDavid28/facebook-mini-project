import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-right-component',
  templateUrl: './right-component.component.html',
  styleUrls: ['./right-component.component.css']
})
export class RightComponentComponent implements OnInit {

  constructor() { }
  public message="Username or password is wrong";
  ngOnInit(): void {
  }

}
