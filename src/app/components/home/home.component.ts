import { Component, OnInit } from '@angular/core';
import { __values } from 'tslib';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { 
    
  }
  margin : number = 0
  isActive: boolean = false

  ngOnInit(): void {
  }

  
  clickRadio($event: any){
    document.getElementById("radio-1")!.style.backgroundColor = "inherit"
    document.getElementById("radio-2")!.style.backgroundColor = "inherit"
    document.getElementById("radio-3")!.style.backgroundColor = "inherit"
    document.getElementById("radio-4")!.style.backgroundColor = "inherit"
    document.getElementById($event.target.id)!.style.backgroundColor = "rgb(67, 180, 255)"
    this.margin = $event.target.value
    document.getElementById("first")!.style.marginLeft = this.margin + "%"
    document.getElementById("first")!.style.transition = "margin-left 0.8s ease-out"
    if (this.margin == 0){
      document.getElementById("text2")!.style.transform = "translateY(50px)"
      document.getElementById("text2")!.style.color = "rgba(255, 255, 255, 0)"

      document.getElementById("text3")!.style.transform = "translateY(50px)"
      document.getElementById("text3")!.style.color = "rgba(255, 255, 255, 0)"

      document.getElementById("text4")!.style.transform = "translateY(50px)"
      document.getElementById("text4")!.style.color = "rgba(255, 255, 255, 0)"

      document.getElementById("text1")!.style.transform = "translateY(-50px)"
      document.getElementById("text1")!.style.color = "white"

      document.getElementById("text1")!.style.transition = "all 1.5s ease-out"
    } if (this.margin == -20){
      document.getElementById("text1")!.style.transform = "translateY(50px)"
      document.getElementById("text1")!.style.color = "rgba(255, 255, 255, 0)"

      document.getElementById("text3")!.style.transform = "translateY(50px)"
      document.getElementById("text3")!.style.color = "rgba(255, 255, 255, 0)"

      document.getElementById("text4")!.style.transform = "translateY(50px)"
      document.getElementById("text4")!.style.color = "rgba(255, 255, 255, 0)"

      document.getElementById("text2")!.style.transform = "translateY(-50px)"
      document.getElementById("text2")!.style.color = "white"

      document.getElementById("text2")!.style.transition = "all 1.5s ease-out"
    } if (this.margin == -40){
      document.getElementById("text1")!.style.transform = "translateY(50px)"
      document.getElementById("text1")!.style.color = "rgba(255, 255, 255, 0)"

      document.getElementById("text2")!.style.transform = "translateY(50px)"
      document.getElementById("text2")!.style.color = "rgba(255, 255, 255, 0)"

      document.getElementById("text4")!.style.transform = "translateY(50px)"
      document.getElementById("text4")!.style.color = "rgba(255, 255, 255, 0)"

      document.getElementById("text3")!.style.transform = "translateY(-50px)"
      document.getElementById("text3")!.style.color = "white"

      document.getElementById("text3")!.style.transition = "all 1.5s ease-out"
    } if (this.margin == -60){
      document.getElementById("text1")!.style.transform = "translateY(50px)"
      document.getElementById("text1")!.style.color = "rgba(255, 255, 255, 0)"

      document.getElementById("text2")!.style.transform = "translateY(50px)"
      document.getElementById("text2")!.style.color = "rgba(255, 255, 255, 0)"

      document.getElementById("text3")!.style.transform = "translateY(50px)"
      document.getElementById("text3")!.style.color = "rgba(255, 255, 255, 0)"

      document.getElementById("text4")!.style.transform = "translateY(-50px)"
      document.getElementById("text4")!.style.color = "white"

      document.getElementById("text4")!.style.transition = "all 1.5s ease-out"
    } 
  }
  
}
