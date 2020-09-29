import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import 'rxjs/add/operator/map';
 
// export class User {
//   userName: string;
//   password: string;
 
//   constructor(userName: string, password: string) {
//     this.userName = userName;
//     this.password = password;
//   }
// }
 
@Injectable()
export class AuthService {
  // currentUser: User;

  authState = new BehaviorSubject(false);
 
  public login(credentials) {
    if (credentials.email === null || credentials.password === null) {
      return Observable.throw("Please insert credentials");
    } else {
      return Observable.create(observer => {
        let access = (credentials.password === "arun@123" && credentials.userName === "arun@123");;
        // this.currentUser = new User('arun@123', 'arun@123');
        this.authState.next(access);
        // localStorage.setItem('authState', JSON.stringify(this.authState.value));
      });
    }
  }

  isAuthenticated() {
    return this.authState.value;
  }
 
  public getUserInfo() : User {
    return this.currentUser;
  }
 
  public logout() {
    return this.authState.next(false);
  }
} 