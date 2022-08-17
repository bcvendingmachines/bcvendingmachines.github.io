import { Component } from '@angular/core';
import { Machine } from '../model/machine';
import { MachineService } from '../service/machine-service.service';
import {Observable, of} from "rxjs";

@Component({
  selector: 'app-machine-button',
  templateUrl: './machine-button.component.html',
  styleUrls: ['./machine-button.component.sass']
})
export class MachineButtonComponent {
  machines$: Observable<Machine[]> | undefined
  loaded = false
  constructor(private machineService: MachineService) {
    this.machineService.getMachines().subscribe((machines)=>{
      if (machines){
        this.loaded = true
        this.machines$ = of(machines)
      }
    })
  }
}
