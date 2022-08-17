import { Injectable } from '@angular/core'
import { HttpClient } from "@angular/common/http"
import { Observable } from 'rxjs'
import { Supply } from '../model/supply'
import {Configs} from "./configs";
@Injectable({
  providedIn: 'root'
})
export class SupplyService {

  constructor(private http: HttpClient) { }

  public getSupply(id:number) : Observable<Supply> { return this.http.get<Supply>(Configs.supplyUrl + id) }

  public save(supply: Supply): Observable<Supply> { return this.http.post<Supply>(Configs.saveUrl, supply) }
}
