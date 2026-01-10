import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { NgClass, NgIf } from '@angular/common';
import { Article } from '../models/article.model';

@Component({
  selector: 'app-article-item',
  standalone: true,
  imports: [NgClass, NgIf],
  templateUrl: './article-item.html',
  styleUrls: ['./article-item.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticleItemComponent {

  @Input() article!: Article;
  @Output() quantityChange = new EventEmitter<{id: number, quantity: number}>();

  increase() {
    this.quantityChange.emit({
      id: this.article.id,
      quantity: this.article.quantityInCart + 1
    });
  }

  decrease() {
    this.quantityChange.emit({
      id: this.article.id,
      quantity: Math.max(this.article.quantityInCart - 1, 0)
    });
  }
}
