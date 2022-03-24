import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Machine } from '../model/machine';
@Injectable({
  providedIn: 'root'
})
export class MachineService {
  private machinesUrl: string;

  constructor(private http: HttpClient) {
    this.machinesUrl = 'http://localhost:8080/machines';
  }

  public getMachines(): Observable<Machine[]> {
    let response = this.http.get<Machine[]>(this.machinesUrl);
    console.log(response);
    return response;
  }
}
