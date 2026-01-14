import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { ArticleService } from '../../services/article-service';
import { Article } from '../../models/article.model';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.html',
})
export class ArticleDetailComponent {
  article$: Observable<Article | undefined> = this.route.paramMap.pipe(
    map(params => Number(params.get('id'))),
    switchMap(id =>
      this.articleService.getArticles().pipe(
        map(list => list.find(a => a.id === id))
      )
    )
  );

  constructor(
    private readonly route: ActivatedRoute,
    private readonly articleService: ArticleService
  ) {}
}
