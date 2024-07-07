import { Component } from '@angular/core';
import { StoreData } from 'src/app/ViewModel/store-data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  storeInfo : StoreData;
  isImageVisible:boolean=true;
  constructor(){
    this.storeInfo= new StoreData('Shopping Store','https://picsum.photos/400/200',['fayoum','cairo','giza'])
  }

  toggleImage(){
    this.isImageVisible=!this.isImageVisible;
  }
}
