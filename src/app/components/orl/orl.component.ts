import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orl',
  templateUrl: './orl.component.html',
  styleUrls: ['./orl.component.css']
})
export class ORLComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  scrollText($event: any){
    document.getElementById($event.target.value)?.scrollIntoView()
  }

  titles = ["Faringitis nasal", "Roncopatía", "Otitis externa", "Disfonía", "Adenoamigdalectomía", "Faringítis crónica"]
}