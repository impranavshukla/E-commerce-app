import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuardGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  const user = localStorage.getItem('userData');

   if (!user) {
    router.navigate(['/login']);
    return false;
  }

  const data = JSON.parse(user);

  // Check route path
  if (state.url.startsWith('/seller') && data.role !== 'seller') {
    router.navigate(['/user/dashboard']);
    return false;
  }

   if (state.url.startsWith('/user') && data.role !== 'user') {
    router.navigate(['/seller/dashboard']);
    return false;
  }

  return true;
};
