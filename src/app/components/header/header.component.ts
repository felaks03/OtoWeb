import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  currentRoute: string
  home: boolean = false
  otorrino: boolean = false
  sobremi: boolean = false
  contacto: boolean = false

  constructor
  (
    private router: Router
  ) 
  {
    this.currentRoute = ""
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd){
        this.currentRoute = event.url;
        if(this.currentRoute == '/home'){
          this.home = true
          this.otorrino = false
          this.sobremi = false
          this.contacto = false
        } else if(this.currentRoute == '/otorrino'){
          this.otorrino = true
          this.home = false
          this.sobremi = false
          this.contacto = false
        } else if(this.currentRoute == '/sobre-mi'){
          this.sobremi = true
          this.otorrino = false
          this.home = false
          this.contacto = false
        } else if(this.currentRoute == '/contacto'){
          this.contacto = true
          this.otorrino = false
          this.sobremi = false
          this.home = false
        } 
      }
    })
  }

  
  ngOnInit(): void {
    
  }

}
