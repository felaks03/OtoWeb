import { Component, OnInit } from '@angular/core';
import { Imagesbg } from 'src/app/interfaces/imagesbg.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  numImg: number = 1

  numImgUp(){
    if(this.numImg < this.imgsdb.length){
      this.numImg++
    } else {
      this.numImg = 1
    }
    document.getElementById("all")!.style.backgroundImage = this.imgsdb[this.numImg - 1].url  
  }
  numImgDown(){
    if(this.numImg > 1){
      this.numImg--
    } else {
      this.numImg = this.imgsdb.length
    }
    document.getElementById("all")!.style.backgroundImage = this.imgsdb[this.numImg - 1].url
  }

  imgsdb: Imagesbg[] = [
    {
      id: 1,
      title: "Orl",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, perspiciatis? Aut, veniam laboriosam. Est quia atque tenetur, placeat voluptatibus maiores.",
      url: "url('../../../assets/operacion2.jpg')"
    },
    {
      id: 2,
      title: "Odsadrl",
      text: "Loredsadsadsam ipsum dolor sit amet consectetur adipisicing elit. Sunt, perspiciatis? Aut, veniam laboriosam. Est quia atque tenetur, placeat voluptatibus maiores.",
      url: "url('../../../assets/operacion1.jpg')"
    },
    {
      id: 3,
      title: "t",
      text: "t",
      url: "r"
    },
    {
      id: 4,
      title: "t",
      text: "t",
      url: "r"
    },
    {
      id: 5,
      title: "t",
      text: "t",
      url: "r"
    },
    {
      id: 6,
      title: "t",
      text: "t",
      url: "r"
    },
    {
      id: 7,
      title: "t",
      text: "t",
      url: "r"
    },
  ]
}
