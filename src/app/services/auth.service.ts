import { Injectable } from '@angular/core';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuth = false

  login(){
    this.isAuth = true
  }

  logout(){
    this.isAuth = false
  }

  isLoggedIn(){
    return new Promise<boolean>(resolve => {
      setTimeout(() => resolve(this.isAuth), 500)
    })
  }
}
