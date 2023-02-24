import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orl',
  templateUrl: './orl.component.html',
  styleUrls: ['./orl.component.css']
})
export class ORLComponent implements OnInit {

  constructor() { }

  windowScrolled = false;
  ngOnInit(): void {
    window.addEventListener('scroll', () => {
      if(window.pageYOffset > 1000){
        document.getElementById('btt')!.style.opacity = '1'
      } else {
        document.getElementById('btt')!.style.opacity = '0'
        document.getElementById('btt')!.style.transition = 'all 0.5s'
      }
    })
  }
  

 
  setShowButton:any = false
  

  scrollText($event: any){
    document.getElementById($event.target.value)?.scrollIntoView()
  }



  scrollToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'})
  }
}