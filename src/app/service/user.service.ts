import { Injectable } from '@angular/core'
import { HttpClient } from "@angular/common/http"
import {Observable, of, tap} from 'rxjs'
import {Configs} from "./configs";
import {User} from "../model/user";
import {UserRepository} from "../state/user.repository";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: User = new User()
  constructor(private http: HttpClient, private repo: UserRepository) { }

  public getUser(username: string | null): Observable<User> {
    this.http.get<User>(Configs.userUrl+username).subscribe((user)=>{
      this.repo.setUser([user])
      return of(user)
    })
    return of(this.user)
  }

  public logIn(username: string, password: string, token: string) : Observable<any> {
    const user: User ={
      id: Math.random(),
      username: username,
      password: password,
      token: token,
      display_name: username,
      contributions: 0
    }
    return this.http.post<User>(Configs.loginUrl, user).pipe(tap((user)=> {
      this.repo.addUser(user)
    }))
  }

  public createAccount(username: string, password: string, token: string): Observable<User> {
    const user: User = {
      id: Math.random(),
      username: username,
      password: password,
      token: token,
      display_name: username,
      contributions: 0
    }
    return this.http.post<User>(Configs.createAccountUrl, user).pipe(tap((user)=>{
      if (user.id){
        this.repo.addUser(user)
      }
    }))
  }

  updateUser(user: User) {
    return this.http.post<User>(Configs.updateUserUrl, user).pipe(tap((user)=> {
      this.repo.updateUser(user.id, user)
    }))
  }
}
