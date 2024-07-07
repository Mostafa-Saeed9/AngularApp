import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(private staticProdService : StaticProductListService , private router:Router){

    this.totalPriceCalc= new EventEmitter<number>();

  }
  ngOnInit():void{
    this.productCatList = this.staticProdService.getAllProducts();
  }
  ngOnChanges(): void {
     this.productCatList = this.staticProdService.getProductByCategoryID(this.recivedCatID);
  }

  buyProduct(prices:number,count:string){
         this.totalPrice=+count * prices
        //  execute event
        this.totalPriceCalc.emit(this.totalPrice);
  }

  openProdDetils(prodId:number){
    // this.router.navigateByUrl('/Products/'+prodId);
    this.router.navigate(['/Products',prodId]);
  }
}
