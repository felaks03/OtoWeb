import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { 
    this.marginTimer
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
  marginTimer = setInterval(this.setMargin, 6000);

  clickRad($event: any){
    this.margin = $event.target.value
    document.getElementById("first")!.style.marginLeft = this.margin + "%"
  }
}
