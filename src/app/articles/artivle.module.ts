import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { authGuard } from '../guards/auth-guard';
import { ArticleCreatePageComponent } from './pages/article-create-page';
import { ArticleDetailComponent } from './pages/article-detail';
import { ArticleListPageComponent } from './pages/article-list-page';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'list', component: ArticleListPageComponent },
      { path: 'create', component: ArticleCreatePageComponent, canActivate: [authGuard] },
      { path: ':id', component: ArticleDetailComponent },
      { path: '', pathMatch: 'full', redirectTo: 'list' },
    ]),
  ],
})
export class ArticleModule {}