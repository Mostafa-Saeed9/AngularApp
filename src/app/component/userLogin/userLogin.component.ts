
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserAuthService } from 'src/app/Services/user-auth.service';

@Component({
  selector: 'app-userLogin',
  templateUrl: './userLogin.component.html',
  styleUrls: ['./userLogin.component.css']
})
export class UserLoginComponent implements OnInit {

  isUserLogged:boolean =false;

  constructor(private authServ :UserAuthService) { }

  ngOnInit() {
    this.isUserLogged= this.authServ.isUserLogged;
  }

  login(){
    this.authServ.login('userName','Password');
    this.isUserLogged= this.authServ.isUserLogged;

  }

  logout(){
    this.authServ.logout();
    this.isUserLogged= this.authServ.isUserLogged;
  }

}
