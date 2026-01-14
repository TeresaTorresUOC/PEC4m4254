import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserStoreService } from '../services/user-store.service';

export const authGuard: CanActivateFn = () => {
  const userStore = inject(UserStoreService);
  const router = inject(Router);

  if (userStore.token) {
    return true;
  }

  return router.createUrlTree(['/login']);
  
};