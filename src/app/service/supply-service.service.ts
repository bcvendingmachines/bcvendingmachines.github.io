import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Supply } from '../model/supply';
@Injectable({
  providedIn: 'root'
})
export class SupplyService {
  private supplyUrl: string;
  private saveUrl: string;
  constructor(private http: HttpClient) {
    this.supplyUrl = 'http://localhost:8080/supply/';
    this.saveUrl = 'http://localhost:8080/save';
  }

  public getSupply(id:number) : Observable<Supply> {return this.http.get<Supply>(this.supplyUrl+id)};

  public save(supply: Supply) {return this.http.post(this.saveUrl, supply)};
}
