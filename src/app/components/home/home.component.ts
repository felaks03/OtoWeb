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

  margin : number = 0
  clickRadio($event: any){
    document.getElementById("radio-1")!.style.backgroundColor = "inherit"
    document.getElementById("radio-2")!.style.backgroundColor = "inherit"
    document.getElementById("radio-3")!.style.backgroundColor = "inherit"
    document.getElementById("radio-4")!.style.backgroundColor = "inherit"
    document.getElementById($event.target.id)!.style.backgroundColor = "rgb(67, 180, 255)"
    this.margin = $event.target.value
    console.log(this.margin)
    document.getElementById("first")!.style.marginLeft = this.margin + "%"
    
  }
}
