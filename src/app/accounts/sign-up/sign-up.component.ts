import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AccountService } from '../account.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  signUpForm:FormGroup = new FormGroup({
    email:new FormControl(null, [Validators.email, Validators.required]),
    username:new FormControl(null, Validators.required),
    password:new FormControl(null, Validators.required),
    cpass:new FormControl(null, Validators.required)
  })
  constructor(private _router:Router, private _accountService:AccountService) { }

  ngOnInit() {
  }

  register(){
    if(!this.signUpForm.valid || (this.signUpForm.controls.password.value != this.signUpForm.controls.cpass.value)){
      console.log('Invalid Form'); return;
    }

    let success = this._accountService.register(JSON.stringify(this.signUpForm.value));

    //if (success)
      this._router.navigate(['/login']);

  }
}
