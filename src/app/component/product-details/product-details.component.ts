import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Products } from 'src/app/Model/products';
import { StaticProductListService } from 'src/app/Services/static-product-list.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  recievedProdId:number=0;
  product : Products | null =null;
  productListIds : number[]=[];

  constructor(private activatedRoute : ActivatedRoute,
     private prodListService : StaticProductListService ,
     private router : Router,
     private location:Location
   ){

  }

  ngOnInit(): void {
    // this.recievedProdId =Number(this.activatedRoute.snapshot.paramMap.get('pid'));
    // console.log(this.recievedProdId)
    // this.product = this.prodListService.getProductById(this.recievedProdId);
    this.productListIds = this.prodListService.getProductsIds();
     this.activatedRoute.paramMap.subscribe((paramMap)=>{
      this.recievedProdId =Number(paramMap.get('pid'))
      this.product = this.prodListService.getProductById(this.recievedProdId);
     })



  }
  goBack(){
    this.location.back();
  }
  nextProduct(){
    let currentIndex =  this.productListIds.findIndex(index => index==this.recievedProdId)
    let nextIndex;
    if(currentIndex < this.productListIds.length){
      nextIndex = this.productListIds[currentIndex + 1]
      this.router.navigate(['/Products',nextIndex])
    }
  }
  prevProduct(){
    let currentIndex =  this.productListIds.findIndex(index => index==this.recievedProdId)
    let prevIndex;
    if(currentIndex > 0){
      prevIndex = this.productListIds[currentIndex - 1]
      this.router.navigate(['/Products',prevIndex])
    }
  }
}
