import { Routes } from '@angular/router';
import { PageNotFound } from './pages/page-not-found/page-not-found';
import { SignUp } from './components/sign-up/sign-up';
import { Login } from './components/login/login';
import { SellerLayout } from './layout/seller-layout/seller-layout';
import { SellerDashboard } from './pages/seller-dashboard/seller-dashboard';
import { UserLayout } from './layout/user-layout/user-layout';
import { UserDashboard } from './pages/user-dashboard/user-dashboard';
import { authGuardGuard } from './guards/auth-guard-guard';

export const routes: Routes = [
 // Default redirect
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  // Auth Routes
  { path: 'signUp', component: SignUp },
  { path: 'login', component: Login },

   // Seller Routes
  {
    path: 'seller',
    component: SellerLayout,
    canActivate: [authGuardGuard],
    children: [
      { path: 'dashboard', component: SellerDashboard }
    ]
  },

  // User Routes
  {
    path: 'user',
    component: UserLayout,
    canActivate: [authGuardGuard],
    children: [
      { path: 'dashboard', component: UserDashboard }
    ]
  },

  // Wildcard (always last)
  { path: '**', component: PageNotFound }
];
