import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-fb-status',
  templateUrl: './fb-status.component.html',
  styleUrls: ['./fb-status.component.css']
})
export class FbStatusComponent implements OnInit {

  @Input() userName='';
  @Input() status_path='';
  constructor() { }

  ngOnInit(): void {
  }

}
