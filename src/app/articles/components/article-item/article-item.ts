import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { CurrencyPipe, NgClass, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Article } from '../../../shared/models/article.model';
import { DefaultImagePipe } from '../../../pipes/default-image-pipe';



@Component({
  selector: 'app-article-item',
  standalone: true,
  imports: [NgClass, NgIf, DefaultImagePipe, CurrencyPipe, RouterLink],
  templateUrl: './article-item.html',
  styleUrls: ['./article-item.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticleItemComponent {

  @Input() article!: Article;
  @Output() quantityChange = new EventEmitter<{ id: number; delta: number }>();

  increase() {
    this.quantityChange.emit({
      id: this.article.id,
      delta: 1,
    });
  }

  decrease() {
    if (this.article.quantityInCart === 0) {
      return;
    }
    this.quantityChange.emit({
      id: this.article.id,
      delta: -1,
    });
  }
}
