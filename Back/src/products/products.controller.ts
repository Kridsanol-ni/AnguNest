import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductDTO } from './dto/product.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  getProductAll(@Query('name') productName ?: string): ProductDTO[]{
    if(productName){
      return this.productsService.findByCondition((product) => product.name.includes(productName));
    }
    return this.productsService.findAll();
  }

  @Get(':id')
  getProductById(@Param('id') id:string){
    return this.productsService.findById(Number(id));
  }


}
