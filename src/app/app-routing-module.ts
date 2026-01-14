import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path: '',
  pathMatch: 'full',
  redirectTo: 'article/list',
  },
  {
    path: 'article',
    loadChildren: () =>
      import('./articles/article.module').then((m) => m.ArticleModule),
  },
  {
    path: '',
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
  },
  { path: '**', redirectTo: 'article/list' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
