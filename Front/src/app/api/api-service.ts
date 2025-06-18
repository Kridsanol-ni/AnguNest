import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../shopping/model/product';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }



  apiProduct(){
        return this.http.get<Product[]>('http://localhost:3000/api/products')
    }


}
