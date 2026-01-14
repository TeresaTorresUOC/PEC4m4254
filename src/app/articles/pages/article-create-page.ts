import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ArticleNewReactive } from '../../article-new-reactive/article-new-reactive';

@Component({
  selector: 'app-article-create-page',
  standalone: true,
  imports: [CommonModule, RouterLink, ArticleNewReactive],
  templateUrl: './article-create-page.html',
  styleUrls: ['./article-create-page.css'],
})
export class ArticleCreatePageComponent {}