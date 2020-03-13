import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms'; 
import { RouterModule, Routes } from '@angular/router';

import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleService } from './article.service';
import { ArticleCreateComponent } from './article-create/article-create.component';


 const articleRoutes: Routes = [
     { path: 'article_list', component: ArticleListComponent},
     { path: 'article_create', component: ArticleCreateComponent}
 ];

@NgModule({
  declarations: [
    ArticleListComponent,
    ArticleCreateComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    HttpModule,
    RouterModule.forChild(articleRoutes)
  ],
  providers: [ArticleService]
})
export class ArticleModule { }
