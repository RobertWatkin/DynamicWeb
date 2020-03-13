import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({
    email:new FormControl(null, [Validators.email,Validators.required]),
    password:new FormControl(null, Validators.required)
  })
  constructor( private _account:AccountService) { }

  ngOnInit() {
  }

  login(){
    if(!this.loginForm.valid){
      console.log('Invalid Form'); return;
    }

    console.log(JSON.stringify(this.loginForm.value));

    this._account.login(JSON.stringify(this.loginForm.value));
  }
}
