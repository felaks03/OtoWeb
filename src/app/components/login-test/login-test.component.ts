import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-test',
  templateUrl: './login-test.component.html',
  styleUrls: ['./login-test.component.css']
})
export class LoginTestComponent implements OnInit {

  formModel
  constructor
  (
    private router: Router
  ) {
    this.formModel = new FormGroup({
      password: new FormControl("", [
        Validators.required,
      ])
    }, [])
   }

  ngOnInit(): void {
  }

  correct: boolean = true
  getData(){
    if (this.formModel.get('password')?.value == "1237"){
      this.correct = true
      this.router.navigate(['/home']) 
    } else{
      this.correct = false      
    }
  }

}
