import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from '../shared/guards/auth.guard';
import { ArticleCreatePageComponent } from './pages/article-create-page';
import { ArticleDetailComponent } from './pages/article-detail';
import { ArticleListPageComponent } from './pages/article-list-page';

const routes: Routes = [
  { path: 'list', component: ArticleListPageComponent },
  { path: 'create', component: ArticleCreatePageComponent, canActivate: [authGuard] },
  { path: ':id', component: ArticleDetailComponent },
  { path: '', pathMatch: 'full', redirectTo: 'list' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArticleRoutingModule {}