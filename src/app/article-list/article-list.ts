import { Component } from '@angular/core';
import { NgFor, AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';

import { Article } from '../models/article.model';
import { ArticleItemComponent } from '../article-item/article-item';
import { ArticleService } from '../services/article-service';

@Component({
  selector: 'app-article-list',
  standalone: true,
  imports: [
    ArticleItemComponent,
    NgFor,
    AsyncPipe
  ],
  templateUrl: './article-list.html',
  styleUrls: ['./article-list.css']
})
export class ArticleListComponent {

  articles$: Observable<Article[]>;

  constructor(private articleService: ArticleService) {
    this.articles$ = this.articleService.getArticles();
  }

  onQuantityChanged(change: { id: number; delta: number }): void {
    this.articleService
      .changeQuantity(change.id, change.delta)
      .subscribe();
  }
}
