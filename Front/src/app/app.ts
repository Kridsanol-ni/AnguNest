import { Component } from '@angular/core';
import { Product } from './shopping/model/product';
import { HttpClient } from '@angular/common/http';
import { response } from 'express';
import { ApiService } from './api/api-service';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { AllService } from './allService/all-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss'
})
export class App {
  protected title = 'Website';

  isAuthpage: boolean = false;
  products: Product[] = []
  filteredProducts: Product[] = this.products;

  constructor(/*private apiService:ApiService ,private router:Router,*/private allService:AllService){
    // this.apiService.apiProduct().subscribe((response)=>{
    //   this.products = response;
    //   this.filteredProducts = this.products;
    // })



    // this.router.events.pipe(filter(event => event instanceof NavigationEnd))
    // .subscribe((event: NavigationEnd) =>{
    //   const authPaths = ['/login'];
    //   const currentUrl = event.urlAfterRedirects;
    //   this.isAuthpage = authPaths.some(path => currentUrl.startsWith(path));
    // })

    this.allService.isAuthpage$.subscribe(val =>{
      this.isAuthpage = val;
    })
  }


  searchProduct(text:string){
    this.filteredProducts = this.products.filter(product=>{
      const productName = product.name.toLowerCase();
      const searchName = text.toLowerCase();
      return  productName.indexOf(searchName) !== -1
    })
  }
}
