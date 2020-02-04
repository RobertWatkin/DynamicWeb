

import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  constructor(private articleService: ArticleService) { }
    Repdata;

  ngOnInit() {
    this.articleService.getArticle().subscribe(data => this.Repdata = data)
  }

}
