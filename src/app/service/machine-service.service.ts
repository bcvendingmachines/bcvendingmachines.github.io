import { Injectable } from '@angular/core'
import { HttpClient } from "@angular/common/http"
import { Observable } from 'rxjs'
import { Machine } from '../model/machine'
@Injectable({
  providedIn: 'root'
})
export class MachineService {
  private readonly machinesUrl: string
  private readonly saveUrl: string

  constructor(private http: HttpClient) {
    //PRODUCTION URLs
    this.machinesUrl = 'https://bcvm.herokuapp.com/machines'
    this.saveUrl = 'https://bcvm.herokuapp.com/saveMachines'
    //DEVELOPMENT URLs
    // this.machinesUrl = 'http://localhost:8080/machines'
    // this.saveUrl = "http://localhost:8080/saveMachines"
  }

  public getMachines(): Observable<Machine[]> {return this.http.get<Machine[]>(this.machinesUrl)}

  public saveMachines(machine: Machine) {
    return this.http.post(this.saveUrl, machine)}
}
