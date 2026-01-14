import { Routes } from '@angular/router';
import { userCanMatch } from './guards/user-can-match';

export const appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'article/list',
  },
  {
    path: 'article',
    loadChildren: () => import('./article/article.module').then(m => m.ArticleModule),
  },
  {
    path: '',
    canMatch: [userCanMatch],
    loadChildren: () => import('./user/user.module').then(m => m.UserModule),
  },
  {
    path: '**',
    redirectTo: 'article/list',
  },
];