import { Component, OnInit } from '@angular/core';
import { PromotionAdsServicService } from 'src/app/Services/promotion-ads-servic.service';
import { StoreData } from 'src/app/ViewModel/store-data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  storeInfo : StoreData;
  isImageVisible:boolean=true;
  constructor(private promoAds : PromotionAdsServicService){
    this.storeInfo= new StoreData('Shopping Store','https://picsum.photos/400/200',['fayoum','cairo','giza'])
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


    this.promoAds.getScheduleAds(3).subscribe({
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


}

  toggleImage(){
    this.isImageVisible=!this.isImageVisible;
  }
}
