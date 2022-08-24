import { Injectable } from '@angular/core'
import { HttpClient } from "@angular/common/http"
import {Observable} from 'rxjs'
import { Supply } from '../model/supply'
import {Configs} from "./configs";
import {User} from "../model/user";

@Injectable({
  providedIn: 'root'
})
export class SupplyService {

  constructor(private http: HttpClient) { }

  public getSupply(id:number) : Observable<Supply> { return this.http.get<Supply>(Configs.supplyUrl + id) }

  public save(supplyData: Supply, token: string): Observable<Supply> {
    const supply = {
      ...supplyData,
      token: token
    }
    return this.http.post<Supply>(Configs.saveUrl, supply) }

  public populateSupply(){
    this.http.post<Supply>(Configs.saveUrl, {
      checked_by: "Zach",
      time_checked: Date.now(),
      short_supply: true,
      coffee: true,
      user_id: new User().id = 1
    })
    this.http.post<Supply>(Configs.saveUrl, {
      machine: 1,
      checked_by: "Zach",
      time_checked: Date.now(),
      short_supply: true,
      coffee: true,
      user_id: 1
    })
    this.http.post<Supply>(Configs.saveUrl, {
      machine: 2,
      checked_by: "Zach",
      time_checked: Date.now(),
      short_supply: true,
      coffee: true,
      user_id: 1
    })
    this.http.post<Supply>(Configs.saveUrl, {
      machine: 3,
      checked_by: "Zach",
      time_checked: Date.now(),
      short_supply: true,
      coffee: true,
      user_id: 1
    })
    this.http.post<Supply>(Configs.saveUrl, {
      machine: 4,
      checked_by: "Zach",
      time_checked: Date.now(),
      short_supply: true,
      coffee: true,
      user_id: 1
    })
    this.http.post<Supply>(Configs.saveUrl, {
      machine: 5,
      checked_by: "Zach",
      time_checked: Date.now(),
      short_supply: true,
      coffee: true,
      user_id: 1
    })
  }
}
