import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PromotionAdsServicService {
adsList : string[];
  constructor() {
    this.adsList =["white friday offers"
                   ,"black friday offers"
                  //  ,""
                   ,"special offers up to 40%"
    ];
  }

  getScheduleAds(interval : number): Observable<string>{
    return new Observable((observ)=>{
      let counter =0;
      let adsTimer =setInterval(()=>{
        console.log("welcom mostafa")
        if(counter ==this.adsList.length){
          observ.complete()
        }
        if(this.adsList[counter]==""){
          observ.error("empty advertsment")
        }
        observ.next(this.adsList[counter])
        counter++
      },interval * 1000)

      return {
        unsubscribe() {
          clearInterval(adsTimer);
        },
      }
    })
  }
}
