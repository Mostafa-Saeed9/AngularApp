import { Injectable } from '@angular/core';
import { Products } from '../Model/products';

@Injectable({
  providedIn: 'root'      // make this service as singleton design pattern that make one object to all project
})
export class StaticProductListService {

  private productList : Products[];
  constructor() {
    this.productList=[
      {id:1,name:"hp ProBook",price:600,imageUrl:'https://fakeimg.pl/250x150',quantity:2,categoryId:1},
      {id:2,name:"Dell",price:500 ,imageUrl:'https://fakeimg.pl/250x150',quantity:1,categoryId:1},
      {id:3,name:"Apple Laptop",price:400 ,imageUrl:'https://fakeimg.pl/250x150',quantity:1,categoryId:1},
      {id:4,name:"Lenovo Thinkpad",price:800 ,imageUrl:'https://fakeimg.pl/250x150',quantity:4,categoryId:1},
      {id:4,name:"Redmi note 11",price:5500 ,imageUrl:'https://fakeimg.pl/250x150',quantity:1,categoryId:2}
    ]
  }


  getAllProducts() : Products[]{
    return this.productList;

  }
  getProductByCategoryID(catId :number) : Products[]{
    if(catId==0){
      return this.productList
    }
    else{
      return this.productList.filter(prod=>prod.categoryId==catId)
    }
  }
  getProductById(pId : number) :Products | null {
    let foundedProduct = this.productList.find(prod=>prod.id==pId)
    return foundedProduct? foundedProduct : null

  }
  getProductsIds(): number [] {
    let prodIDs :number [] = this.productList.map(prod => prod.id);
    return prodIDs;
}
}
