import { Component } from '@angular/core';
import { Category } from 'src/app/Model/category';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent {

  categoryList:Category[];
  SelectedCatId:number=0;
  recievOrderTotalPrice:number=0;
  constructor(){
    this.categoryList=[
      {id:1,name:'Laptops'},
      {id:2,name:'TV'},
      {id:3,name:'Phones'}
    ]
  }

  onClickPuyOrder(totalPrice:number){
    this.recievOrderTotalPrice=totalPrice;
  }

}
