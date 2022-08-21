import { Injectable } from '@angular/core'
import { HttpClient } from "@angular/common/http"
import {Observable, tap} from 'rxjs'
import {Configs} from "./configs";
import {User} from "../model/user";
import {UserRepository} from "../state/user.repository";
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private repo: UserRepository) { }

  public logIn(username: string, password: string) : Observable<any> {
    const user: User ={
      id: Math.random(),
      username: username,
      password: password
    }
    return this.http.post<User>(Configs.loginUrl, user).pipe(tap((user)=> {
      this.repo.addUser(user)
    }))
  }

  public createAccount(username: string, password: string): Observable<User> {
    const user: User = {
      id: Math.random(),
      username: username,
      password: password
    }
    return this.http.post<User>(Configs.createAccountUrl, user).pipe(tap((user)=>{
      this.repo.addUser(user)
    }))
  }
}
