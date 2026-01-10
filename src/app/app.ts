import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar';
import { ArticleListComponent } from './article-list/article-list';
import { ArticleNewTemplate } from './article-new-template/article-new-template';
import { ArticleNewReactive } from './article-new-reactive/article-new-reactive';


type View = 'home' | 'articles' | 'new-template' | 'new-reactive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    ArticleListComponent,
    ArticleNewTemplate,
    ArticleNewReactive
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {

  currentView: View = 'home';   // per defecte article-list

  onSectionChange(view: View) {
    this.currentView = view;
  }

}
