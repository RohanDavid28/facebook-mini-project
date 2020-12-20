import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MarketPlaceService {

  constructor() { }

  getProductData()
  {
    return [
      {price:'FREE',description:'Top and skirt set 7227824',imagePath:"fb-product-img1.jpeg"},
      {price:'₹1',description:'Set',imagePath:"fb-product-img2.jpeg"},
      {price:'FREE',description:'Top and skirt set 7227824',imagePath:"fb-product-img3.jpeg"},
      {price:'FREE',description:'Top and skirt set 7227824',imagePath:"fb-product-img4.jpeg"},
      {price:'FREE',description:'Top and skirt set 7227824',imagePath:"fb-product-img5.jpeg"},
      {price:'FREE',description:'Top and skirt set 7227824',imagePath:"fb-product-img6.jpeg"},
      {price:'FREE',description:'Top and skirt set 7227824',imagePath:"fb-product-img7.jpeg"},
      {price:'FREE',description:'Top and skirt set 7227824',imagePath:"fb-product-img8.jpeg"},
      {price:'FREE',description:'Top and skirt set 7227824',imagePath:"fb-product-img9.jpeg"},
      {price:'FREE',description:'Top and skirt set 7227824',imagePath:"fb-product-img10.jpeg"},
      {price:'FREE',description:'Top and skirt set 7227824',imagePath:"fb-product-img11.jpeg"},
      {price:'FREE',description:'Top and skirt set 7227824',imagePath:"fb-product-img12.jpeg"},
      {price:'FREE',description:'Top and skirt set 7227824',imagePath:"fb-product-img13.jpeg"},
      {price:'FREE',description:'Top and skirt set 7227824',imagePath:"fb-product-img14.jpeg"},
      {price:'FREE',description:'Top and skirt set 7227824',imagePath:"fb-product-img15.jpeg"},
      {price:'FREE',description:'Top and skirt set 7227824',imagePath:"fb-product-img16.jpeg"},
      {price:'FREE',description:'Top and skirt set 7227824',imagePath:"fb-product-img17.jpeg"},
      {price:'FREE',description:'Top and skirt set 7227824',imagePath:"fb-product-img18.jpeg"},
      {price:'FREE',description:'Top and skirt set 7227824',imagePath:"fb-product-img19.jpeg"},
      {price:'FREE',description:'Top and skirt set 7227824',imagePath:"fb-product-img20.jpeg"},
  
    ];
  }
}
