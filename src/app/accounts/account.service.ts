import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { Account } from './account/Account';

// ========= DID NOT WORK
// Tying axios as the built in HTTP requests are sending through undefined JSON files
//import axios from "axios";

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }
 
  register(account: Account) {

  }

  //
  //  Previous code from failed Node.js attempts
  //
  /*
  register(account): boolean {
    console.log(account);

    // NEW AXIOS CODE

    axios.post('http://127.0.0.1:8080/api/register', JSON.parse(account))
      .then(function (res) {
        console.log(res.data);
        return true;
      })
      .catch(function (err) {
        console.log(err.message);
        return false;
    });
    

    return false;

    // *************

    // return this.http.post('http://127.0.0.1:8080/api/register', account, {
    //    observe: 'body',
    //    headers:new HttpHeaders().append('Content-Type','application/json')
    //  });

     // ------ ALSO DIDN'T WORK ----
    // let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    // let options = new RequestOptions({ headers: headers }); // Create a request option

    // this.http.post("http://localhost:3000/api/register", account, options) // ...using post request
    //                      .map(res => res.json()) // ...and calling .json() on the response to return data
    //                      .catch((error:any) => Observable.throw(error.json().error || 'Server error')) //...errors if
    //                      .subscribe();


  }

  login(body:any){

    console.log(body);

    axios.post('http://127.0.0.1:8080/api/login', body,{
      withCredentials: true
    })
      .then(function (res) {
        console.log(res.data);
        return true;
      })
      .catch(function (err) {
        console.log(err.message);
        return false;
    });
  }

  // private handleErrorObservable (error: Response | any) {
  //   console.error(error.message || error);
  //   return Observable.throw(error.message || error);
  // }
  */
}
