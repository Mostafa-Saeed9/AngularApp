import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  private isLoggedSubj:BehaviorSubject<boolean>;

  constructor() {
    this.isLoggedSubj = new BehaviorSubject<boolean> (this.isUserLogged)
   }

  login(userName: string,passord :string){
    let token = '1234567'
    localStorage.setItem("token",token)
    this.isLoggedSubj.next(true)
  }

  logout(){
    localStorage.removeItem("token")
    this.isLoggedSubj.next(false)
  }

  get isUserLogged():boolean{

    return localStorage.getItem("token") ?true :false
  }

  getLoggedStatus(){
    return this.isLoggedSubj.asObservable();
  }
}
