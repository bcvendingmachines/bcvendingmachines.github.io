import { Component, OnInit } from '@angular/core';
import { Machine } from '../model/machine';
import { MachineService } from '../service/machine-service.service';

@Component({
  selector: 'app-machine-button',
  templateUrl: './machine-button.component.html',
  styleUrls: ['./machine-button.component.sass']
})
export class MachineButtonComponent implements OnInit {

  machines!: Machine[];

  constructor(private machineService: MachineService) { }

  ngOnInit(): void {
    this.machineService.getMachines().subscribe(data => {
      this.machines = data;
    });
  }
}
