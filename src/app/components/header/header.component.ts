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
        } else if(this.currentRoute == '/otorrino'){
          this.otorrino = true
        } else if(this.currentRoute == '/sobre-mi'){
          this.sobremi = true
        } else if(this.currentRoute == '/contacto'){
          this.contacto = true
        } 
      }
    })
  }

  
  ngOnInit(): void {
    
  }

}
