import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PromotionAdsServicService } from 'src/app/Services/promotion-ads-servic.service';
import { StoreData } from 'src/app/ViewModel/store-data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit ,OnDestroy {

  private subscriptions : Subscription[]=[];
  storeInfo : StoreData;
  isImageVisible:boolean=true;
  constructor(private promoAds : PromotionAdsServicService){
    this.storeInfo= new StoreData('Shopping Store','https://picsum.photos/400/200',['fayoum','cairo','giza'])
  }
  ngOnDestroy(): void {
   for(let sub of this.subscriptions){
    sub.unsubscribe();
    console.log("unSubscribe")
   }

  }

  ngOnInit(): void {
    let observer = {
      next:(data:string)=>{
        console.log(data)
      },
      error:(error:string)=>{
        console.log(error)
      },
      complete:()=>{
        console.log("ads completed ...")
      }

    };


    let addSubscription:Subscription= this.promoAds.getScheduleAds(3).subscribe({
      next:(data:string)=>{
      console.log(data)
    },
    error:(error:string)=>{
      console.log(error)
    },
    complete:()=>{
      console.log("ads completed ...")
    }

  });
  this.subscriptions.push(addSubscription)


}

  toggleImage(){
    this.isImageVisible=!this.isImageVisible;
  }
}
