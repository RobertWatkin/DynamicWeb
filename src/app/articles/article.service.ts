import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: Http) { }

  saveArticle(article){
    return this.http.post('http://localhost:8080/api/SaveArticle', article).pipe(
      map((response: Response) => response.json()))
  }

  getArticle(){
    return this.http.get('http://localhost:8080/api/GetArticle').pipe(
      map((response: Response) => response.json()))
  }

  deleteArticle(id){
    return this.http.post('http://localhost:8080/api/DeleteArticle/', {'id': id}).pipe(
      map((response: Response) => response.json()))
  }
}
