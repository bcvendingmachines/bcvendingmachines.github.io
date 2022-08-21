import {Component, OnInit} from '@angular/core';
import { Machine } from '../../../model/machine';
import { MachineService } from '../../../service/machine-service.service';
import {lastValueFrom, Observable, of} from "rxjs";
@Component({
  selector: 'app-machine-button',
  templateUrl: './machine-button.component.html',
  styleUrls: ['./machine-button.component.sass']
})
export class MachineButtonComponent implements OnInit{
  machines$: Observable<Machine[]> | undefined
  loaded = false
  loadingText = "Loading..."

  constructor(private machineService: MachineService) { }

  ngOnInit(): void {
    this.getMachines().then((machines) => {
      if (machines){
        this.loaded = true
        this.machines$ = of(machines)
      }
    })
    setTimeout(()=>{
      if (!this.loaded) {
        this.loadingText = "Taking longer than expected... Consider reloading?"
      }
    }, 5000)
  }

  async getMachines(): Promise<Machine[]> {
    return await lastValueFrom(this.machineService.getMachines())
  }

}
