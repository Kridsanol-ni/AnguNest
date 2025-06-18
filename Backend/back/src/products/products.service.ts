import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductDTO } from './dto/product.dto';

@Injectable()
export class ProductsService {
  private products: ProductDTO[] = [
      {name: 'Mango' , id: 1, price: 250},
      {name: 'Apple' , id: 2, price: 150},
      {name: 'PineApple' , id: 3, price: 50},
    ]

    findAll(): ProductDTO[]{
      return this.products;
    }

    findById(id:number){
      return this.products.find((p) => p.id === id);
    }

    findByCondition(predicate: (product:ProductDTO)=> boolean){
      return this.products.filter(p=> predicate(p));
    }
}
