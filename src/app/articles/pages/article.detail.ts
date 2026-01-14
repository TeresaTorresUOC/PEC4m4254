import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Article } from '../../models/article.model';
import { ArticleService } from '../../services/article-service';
import { DefaultImagePipe } from '../../pipes/default-image-pipe';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-article-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, DefaultImagePipe, CurrencyPipe],
  templateUrl: './article-detail.html',
  styleUrls: ['./article-detail.css'],
})
export class ArticleDetailComponent {
  readonly article$: Observable<Article> = this.route.paramMap.pipe(
    switchMap(params => this.articleService.getArticle(Number(params.get('id')))),
  );

  constructor(
    private readonly route: ActivatedRoute,
    private readonly articleService: ArticleService,
  ) {}
}