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

  ngOnInit(): void {
  }

  margin: number = -20
  setMargin(): any{
    if(this.margin > -60){
      if(this.margin == 0){
        document.getElementById("radio-2")!.style.backgroundColor = "rgb(67, 180, 255)"
        document.getElementById("radio-1")!.style.backgroundColor = "inherit"
        this.margin += -20
        document.getElementById("first")!.style.marginLeft = this.margin + "%"
      } else if(this.margin == -20){
        document.getElementById("radio-3")!.style.backgroundColor = "rgb(67, 180, 255)"
        document.getElementById("radio-2")!.style.backgroundColor = "inherit"
        this.margin += -20
        document.getElementById("first")!.style.marginLeft = this.margin + "%"
      } else if(this.margin == -40){
        document.getElementById("radio-4")!.style.backgroundColor = "rgb(67, 180, 255)"
        document.getElementById("radio-3")!.style.backgroundColor = "inherit"
        this.margin += -20
        document.getElementById("first")!.style.marginLeft = this.margin + "%"
      }
    } else {
      document.getElementById("radio-1")!.style.backgroundColor = "rgb(67, 180, 255)"
      document.getElementById("radio-4")!.style.backgroundColor = "inherit"
      this.margin = 0
      document.getElementById("first")!.style.marginLeft = this.margin + "%"
    }
  }
  marginTimer = setInterval(this.setMargin, 7500);

  clickRad($event: any){
    this.margin = $event.target.value
    document.getElementById("first")!.style.marginLeft = this.margin + "%"
  }

  clickRadio($event: any){
    document.getElementById("0")!.style.backgroundColor = "inherit"
    document.getElementById("-20")!.style.backgroundColor = "inherit"
    document.getElementById("-40")!.style.backgroundColor = "inherit"
    document.getElementById("-60")!.style.backgroundColor = "inherit"
    document.getElementById($event.target.id)!.style.backgroundColor = "rgb(67, 180, 255)"
    this.margin = $event.target.id
    console.log(this.margin)
    document.getElementById("first")!.style.marginLeft = this.margin + "%"
    
  }
}
