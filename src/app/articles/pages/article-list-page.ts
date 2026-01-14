import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ArticleListComponent } from '../../article-list/article-list';

@Component({
  selector: 'app-article-list-page',
  standalone: true,
  imports: [CommonModule, RouterLink, ArticleListComponent],
  templateUrl: './article-list-page.html',
  styleUrls: ['./article-list-page.css'],
})
export class ArticleListPageComponent {}