import { NgModule } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet, Routes } from '@angular/router';
import { Account } from './account/account';
import { Shop } from './shopping/shop/shop';
import { Library } from './library/library';
import { Community } from './community/community';
import { Login } from './login/login';

const routes: Routes = [
  {
    path:'store',
    component: Shop
  },
  {
    path: 'account',
    component: Account
  },
  {
    path: 'library',
    component: Library
  },
  {
    path: 'community',
    component: Community
  },
  {
    path: 'login',
    component: Login
  },
  {
    path: '**',
    redirectTo: 'store'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),RouterOutlet,RouterLink],
  exports: [RouterModule]
})
export class AppRoutingModule { }
