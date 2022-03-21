import { Component, OnInit } from '@angular/core';
import { Machine } from '../model/machine';
import { MachineService } from '../service/machine-service.service';

@Component({
  selector: 'app-main-button',
  templateUrl: './main-button.component.html',
  styleUrls: ['./main-button.component.sass']
})
export class MainButtonComponent implements OnInit {

  machines!: Machine[];

  constructor(private machineService: MachineService) { }

  ngOnInit(): void {
    this.machineService.getMachines().subscribe(data => {
      this.machines = data;
    });
  }
}
