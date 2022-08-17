import { Injectable } from '@angular/core'
import { HttpClient } from "@angular/common/http"
import { Observable } from 'rxjs'
import { Machine } from '../model/machine'
import {Configs} from "./configs";
@Injectable({
  providedIn: 'root'
})
export class MachineService {

  constructor(private http: HttpClient) { }

  public getMachines(): Observable<Machine[]> {return this.http.get<Machine[]>(Configs.machinesUrl)}
}
