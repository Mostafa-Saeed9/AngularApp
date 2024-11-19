import { Component, OnInit } from '@angular/core';
import { UserAuthService } from 'src/app/Services/user-auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isUSerLogged:boolean = false;
  constructor(private authService:UserAuthService){

  }
  ngOnInit(): void {
    this.isUSerLogged = this.authService.isUserLogged;
    this.authService.getLoggedStatus().subscribe(s =>{
      this.isUSerLogged =s;
      console.log('status',this.isUSerLogged)
    })
  }


}
