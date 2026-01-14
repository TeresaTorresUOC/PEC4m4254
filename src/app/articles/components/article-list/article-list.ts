import { Component } from '@angular/core';
import { NgFor, AsyncPipe } from '@angular/common';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, startWith, switchMap } from 'rxjs/operators';

import { Article } from '../../../shared/models/article.model';
import { ArticleItemComponent } from '../article-item/article-item';
import { ArticleService } from '../../services/article-service';

@Component({
  selector: 'app-article-list',
  standalone: true,
  imports: [
    ArticleItemComponent,
    NgFor,
    AsyncPipe,
    ReactiveFormsModule
  ],
  templateUrl: './article-list.html',
  styleUrls: ['./article-list.css']
})
export class ArticleListComponent {

  readonly searchControl = new FormControl<string>('', { nonNullable: true });

  readonly articles$: Observable<Article[]> = this.searchControl.valueChanges.pipe(
    startWith(this.searchControl.value),
    debounceTime(300),
    distinctUntilChanged(),
    switchMap(q => this.articleService.getArticles(q))
  );

  constructor(private readonly articleService: ArticleService) {}

  onQuantityChanged(change: { id: number; delta: number }): void {
    this.articleService.changeQuantity(change.id, change.delta).subscribe(() => {
      // recargar lista con el término actual
      this.searchControl.setValue(this.searchControl.value);
    });
  }
}
