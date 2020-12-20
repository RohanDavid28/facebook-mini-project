import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-fb-post',
  templateUrl: './fb-post.component.html',
  styleUrls: ['./fb-post.component.css']
})
export class FbPostComponent implements OnInit {

  @Input() userName='';
  @Input() caption="";
  @Input() imagePath='';
  @Input() logoPath='';
  constructor() { }

  ngOnInit(): void {
  }

}
