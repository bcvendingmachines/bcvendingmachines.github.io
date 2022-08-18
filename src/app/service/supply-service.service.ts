import { Injectable } from '@angular/core'
import { HttpClient } from "@angular/common/http"
import { Observable } from 'rxjs'
import { Supply } from '../model/supply'
import {Configs} from "./configs";
import {SupplyToken} from "../model/supplyToken";
@Injectable({
  providedIn: 'root'
})
export class SupplyService {

  constructor(private http: HttpClient) { }

  public getSupply(id:number) : Observable<Supply> { return this.http.get<Supply>(Configs.supplyUrl + id) }

  public save(supply: Supply, token: string): Observable<Supply> {
    let supplyToken: SupplyToken = {
      token: token,
      supply: supply
    }
    return this.http.post<Supply>(Configs.saveUrl, supplyToken) }
}
