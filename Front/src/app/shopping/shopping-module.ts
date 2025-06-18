import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingCart } from './shopping-cart/shopping-cart';
import { ShoppingSearch } from './shopping-search/shopping-search';
import { InputTextModule } from 'primeng/inputtext';
import { Shop } from './shop/shop';

@NgModule({
  declarations: [
    ShoppingCart,
    ShoppingSearch,
    Shop
  ],
  imports: [
    CommonModule,
    InputTextModule
  ],
  exports: [
    ShoppingCart,
    ShoppingSearch,
    Shop
  ]
})
export class ShoppingModule { }
