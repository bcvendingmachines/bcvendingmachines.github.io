import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Supply } from '../model/supply';
@Injectable({
  providedIn: 'root'
})
export class SupplyService {
  private supplyUrl: string;

  constructor(private http: HttpClient) {
    this.supplyUrl = 'http://localhost:8080/supply';
  }

  public getSupply(id:Number): Observable<Supply[]> {
    let params = new HttpParams().set("id", id.toString());
    return this.http.get<Supply[]>(this.supplyUrl, {params: params});
  }

  public save(supply: Supply) {
    return this.http.post<Supply>(this.supplyUrl, supply);
  }
}
