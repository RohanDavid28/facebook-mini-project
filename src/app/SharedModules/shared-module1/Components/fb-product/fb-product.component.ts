import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-fb-product',
  templateUrl: './fb-product.component.html',
  styleUrls: ['./fb-product.component.css']
})
export class FbProductComponent implements OnInit {
  @Input() price='';
  @Input() description='';
  @Input() imagePath='';
  
  constructor() { }

  ngOnInit(): void {
  }

}
