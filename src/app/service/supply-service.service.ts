import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { map, Observable } from 'rxjs';
import { Supply } from '../model/supply';

@Injectable({
  providedIn: 'root'
})
export class SupplyService {
  private supplyUrl: string;

  constructor(private http: HttpClient) {
    this.supplyUrl = 'http://localhost:8080/supply/';
  }

  // public getSupply(id:number): Observable<Supply[]> {
  //   let supply = this.http.get<String>(this.supplyUrl+id);
  //   // let supplyObject = JSON.parse(supply);
  //   console.log(supply);
  //   return supply;
  // }
  public getSupply(id:number) : Observable<Supply[]> {
    let response = this.http.get<Supply[]>(this.supplyUrl+id);
    console.log("response: "+response);
    return response;
}

  public save(supply: Supply) {
    return this.http.post<Supply>(this.supplyUrl, supply);
  }
}
