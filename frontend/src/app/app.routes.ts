import { Routes } from '@angular/router';
import { PageNotFound } from './pages/page-not-found/page-not-found';
import { SignUp } from './components/sign-up/sign-up';
import { Login } from './components/login/login';
import { SellerLayout } from './layout/seller-layout/seller-layout';
import { SellerDashboard } from './pages/seller-dashboard/seller-dashboard';
import { UserLayout } from './layout/user-layout/user-layout';
import { UserDashboard } from './pages/user-dashboard/user-dashboard';
import { authGuardGuard } from './guards/auth-guard-guard';
import { ManageUserProfile } from './pages/manage-user-profile/manage-user-profile';
import { Shop } from './pages/shop/shop';
import { Wishlist } from './pages/wishlist/wishlist';
import { Cart } from './pages/cart/cart';
import { Contact } from './pages/contact/contact';
import { SellerProduct } from './pages/seller-product/seller-product';
import { SellerOrder } from './pages/seller-order/seller-order';
import { SellerProfile } from './pages/seller-profile/seller-profile';
import { AddProduct } from './pages/add-product/add-product';

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
      { path: 'dashboard', component: SellerDashboard },
      { path: 'product', component: SellerProduct},
      { path: 'order', component: SellerOrder},
      { path: 'product/addProduct', component: AddProduct},
      { path: 'profile', component: SellerProfile},
    ]
  },

  // User Routes
  {
    path: 'user',
    component: UserLayout,
    canActivate: [authGuardGuard],
    children: [
      { path: 'dashboard', component: UserDashboard },
      { path: 'shop', component: Shop },
      { path: 'cart', component: Cart },
      { path: 'contact', component: Contact },
      { path: 'wishlist', component: Wishlist },
      { path: 'manageUserProfile', component: ManageUserProfile },
    ]
  },

  // Wildcard (always last)
  { path: '**', component: PageNotFound }
];
