import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GamesPageService {

  constructor() { }

  geetGameList()
  {
    return [
      {gameCategory:"Popular Games to Watch" ,games:[{name:"PUBG",imagePath:"popular-games-img1.jpg"},{name:"FortNite",imagePath:"popular-games-img2.jpg"},{name:"GTA V",imagePath:"popular-games-img3.jpg"},{name:"COD Mobile",imagePath:"popular-games-img4.jpg"}]},
      {gameCategory:"New and Rising Games  " ,games:[{name:"Cyberpunk 20177",imagePath:"new-games-img1.jpg"    },{name:"COD Cold War",imagePath:"new-games-img2.jpg"    },{name:"AC Valhalla",imagePath:"new-games-img3.jpg"    },{name:"FIFA 20",imagePath:"new-games-img4.jpg"    }]},
      {gameCategory:"Top Rated Games       " ,games:[{name:"Witcher 3 Wild Hunt",imagePath:"top-games-img1.jpg"    },{name:"AC Black Flag",imagePath:"top-games-img2.jpg"    },{name:"Tom Clancy's Wildland",imagePath:"top-games-img3.jpg"    },{name:"COD WWII",imagePath:"top-games-img4.jpg"    }]},
      {gameCategory:"Suggested Games       " ,games:[{name:"Battlefield V",imagePath:"suggested-games-img1.jpg"},{name:"Watch Dogs 2",imagePath:"suggested-games-img2.jpg"},{name:"FAR CRY 5",imagePath:"suggested-games-img3.jpg"},{name:"Max Payne 3",imagePath:"suggested-games-img4.jpg"}]},
      ];    
  }
}
