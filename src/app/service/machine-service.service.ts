import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Machine } from '../model/machine';
@Injectable({
  providedIn: 'root'
})
export class MachineService {
  private machinesUrl: string;
  private saveUrl: string;

  constructor(private http: HttpClient) {
    this.machinesUrl = 'https://bcvm.herokuapp.com/machines';
    this.saveUrl = 'https://bcvm.herokuapp.com/saveMachines';
    // this.machinesUrl = 'http://localhost:8080/machines';
    // this.saveUrl = "http://localhost:8080/saveMachines"
  }

  public getMachines(): Observable<Machine[]> {return this.http.get<Machine[]>(this.machinesUrl)};

  public saveMachines(machine: Machine) {
    console.log(machine);
    return this.http.post(this.saveUrl, machine)};
}
