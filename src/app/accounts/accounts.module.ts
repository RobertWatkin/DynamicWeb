import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HttpClientModule } from '@angular/common/http';


const accountRoutes: Routes = [
  {path: 'sign_up', component: SignUpComponent},
  {path: 'login', component: LoginComponent}
];


@NgModule({
  declarations: [
    LoginComponent, 
    SignUpComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(accountRoutes)
  ]
})
export class AccountsModule { }
