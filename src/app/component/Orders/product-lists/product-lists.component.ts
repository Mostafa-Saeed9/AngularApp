import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Category } from 'src/app/Model/category';
import { Products } from 'src/app/Model/products';
import { StaticProductListService } from 'src/app/Services/static-product-list.service';

@Component({
  selector: 'app-product-lists',
  templateUrl: './product-lists.component.html',
  styleUrls: ['./product-lists.component.scss']
})
export class ProductListsComponent implements OnChanges {

  totalPrice:number=0;
  // productList:Products[];
  productCatList:Products[]=[];
  @Output() totalPriceCalc:EventEmitter<number>;
  SelectedCatId:number=0
  @Input() recivedCatID:number=0;
  constructor(private staticProdService : StaticProductListService){

    this.totalPriceCalc= new EventEmitter<number>();

  }
  ngOnChanges(): void {
     this.productCatList = this.staticProdService.getProductByCategoryID(this.recivedCatID);
  }

  buyProduct(prices:number,count:string){
         this.totalPrice=+count * prices
        //  execute event
        this.totalPriceCalc.emit(this.totalPrice);
  }

  private filterProductByCatId(){

  }
}
