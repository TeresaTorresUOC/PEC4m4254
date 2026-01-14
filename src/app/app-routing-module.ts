import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './user/login/login';
import { RegisterComponent } from './user/register/register';
import { ArticleListComponent } from './article-list/article-list';
import { ArticleNewReactiveComponent } from './article-new-reactive/article-new-reactive';
import { ArticleDetailComponent } from './articles/article-detail/article-detail';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },

  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  { path: 'article/list', component: ArticleListComponent },
  {
    path: 'article/create',
    component: ArticleNewReactiveComponent,
    canActivate: [AuthGuard],
  },
  { path: 'article/:id', component: ArticleDetailComponent },

  { path: '**', redirectTo: 'login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
