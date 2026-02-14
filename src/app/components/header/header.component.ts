import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  currentRoute: string;
  home: boolean = false;
  otorrino: boolean = false;
  sobremi: boolean = false;
  contacto: boolean = false;

  constructor(private router: Router) {
    this.currentRoute = '';
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;
        if (this.currentRoute == '/home') {
          this.home = true;
          this.otorrino = false;
          this.sobremi = false;
          this.contacto = false;
        } else if (this.currentRoute == '/otorrino') {
          this.otorrino = true;
          this.home = false;
          this.sobremi = false;
          this.contacto = false;
        } else if (this.currentRoute == '/sobre-mi') {
          this.sobremi = true;
          this.otorrino = false;
          this.home = false;
          this.contacto = false;
        } else if (this.currentRoute == '/contacto') {
          this.contacto = true;
          this.otorrino = false;
          this.sobremi = false;
          this.home = false;
        }
      }
    });
  }
  togg: any;
  right: any;
  backguroundColor($event: any) {
    this.togg = document.getElementById('navbar-togg');
    this.right = document.getElementById('rightnav');
    if (this.togg.getAttribute('aria-expanded') == 'true') {
      this.right.style.backgroundColor = 'white';
    } else {
      this.right.style.backgroundColor = '#FFFFFF';
    }
    console.log(this.togg.getAttribute('aria-expanded'));
  }

  closeToggler() {
    document
      .getElementById('navbarTogglerDemo01')!
      .setAttribute('class', 'navbar-collapsing collapsing');
    window.location.reload();
  }

  ngOnInit(): void {}
}
