import { Injectable } from '@angular/core'
import { HttpClient } from "@angular/common/http"
import { Observable } from 'rxjs'
import {Configs} from "./configs";
import {User} from "../model/user";
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  public logIn(username: string, password: string) : Observable<any> {
    const user: string = JSON.stringify({
      id: undefined,
      username: username,
      password: password
    })
    return this.http.get<User>(Configs.loginUrl+user)
  }

  public createAccount(username: string, password: string): Observable<User> {
    const user: User = {
      username: username,
      password: password
    }
    return this.http.post<User>(Configs.createAccountUrl, user) }
}
