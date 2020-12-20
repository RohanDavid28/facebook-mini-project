import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomePageService {

  constructor() { }
  public buttonName=[
    {name:"Rohan David"                ,imagepath:"img1.JPG"},
    {name:"COVID-19 Information Center",imagepath:"fb-side-button-logo1.png"},
    {name:"Friends"                    ,imagepath:"fb-side-button-logo2.jpg"},
    {name:"Groups"                     ,imagepath:"fb-side-button-logo3.jpg"},
    {name:"Market Place"               ,imagepath:"fb-side-button-logo4.jpg"},
    {name:"Video"                      ,imagepath:"fb-side-button-logo5.jpg"},
    {name:"Events"                     ,imagepath:"fb-side-button-logo6.png"},
    {name:"Memories"                   ,imagepath:"fb-side-button-logo7.png"},
    {name:"Saved"                      ,imagepath:"fb-side-button-logo8.jpg"},
    {name:"See More"                   ,imagepath:"fb-side-button-logo9.jpg"},
  ];
  getButtonName()
  {
   
    return this.buttonName;
  }

  getChatName()
  {
    return [
      {name:"Merlin David",imagepath:"fb-friend-img1.jpeg"},
      {name:"Kishan",imagepath:"fb-friend-img2.jpeg"},
      {name:"Muniprasannakumar",imagepath:"fb-friend-img3.jpeg"},
      {name:"Aakaash",imagepath:"fb-friend-img4.jpeg"},
      {name:"Govindha Krishnan",imagepath:"fb-friend-img5.jpeg"},
      {name:"Victorious Vicky",imagepath:"fb-friend-img6.jpeg"},
      {name:"Mc Varun Bazz",imagepath:"fb-friend-img7.jpeg"},
      {name:"Vishal Kumar",imagepath:"fb-friend-img8.jpeg"},
      {name:"Shamala David",imagepath:"fb-friend-img9.jpeg"},
      {name:"Benitta Edwin",imagepath:"fb-friend-img10.jpeg"},
    ];
  }
  getPostData()
  {
    return [
      {userName:"Sarcasm"          ,  caption:"Medicine for your stupidity..",                                            image_path:'fb-post-img1.jpeg',logo_path:'fb-post-logo4.jpeg'},
      {userName:"Sarcasm",            caption:"Size doesn't matters"                                                     ,image_path:'fb-post-img2.jpeg',logo_path:'fb-post-logo4.jpeg'},
      {userName:"knowledge factory",  caption:"We are all living in cages with the door wide open. ..."                  ,image_path:'fb-post-img3.jpeg',logo_path:'fb-post-logo2.jpeg'},
      {userName:"knowledge factory",  caption:"When you do things from your soul, you feel a river moving in you, a joy.",image_path:'fb-post-img4.jpeg',logo_path:'fb-post-logo2.jpeg'},
      {userName:"knowledge factory",  caption:"But first, let's climb to the top of the Eiffel Tower."                   ,image_path:'fb-post-img5.jpeg',logo_path:'fb-post-logo2.jpeg'},
      {userName:"Fearless motivation",caption:""                                                                         ,image_path:'fb-post-img6.jpeg',logo_path:'fb-post-logo7.jpeg'},
      {userName:"No one cares",       caption:"CR7...."                                                                  ,image_path:'fb-post-img7.jpeg',logo_path:'fb-post-logo3.jpeg'},
      {userName:"Quotes",             caption:"peace of mind"                                                            ,image_path:'fb-post-img8.jpeg',logo_path:'fb-post-logo5.jpeg'},
      
    ];
  }
    getStatus()
    {
      return [
        {userName:"Merlin ",status_path:"fb-status-img1.jpg"},
        {userName:"Kevin Raj",status_path:"fb-status-img2.jpg"},
        {userName:"Sunil Joel",status_path:"fb-status-img3.jpg"},
        {userName:"Vishal Kumar",status_path:"fb-status-img4.jpg"},
        {userName:"Benitta",status_path:"fb-status-img5.jpg"}
      ];
    }
  
  
}
