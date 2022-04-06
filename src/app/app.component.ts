import { Component } from '@angular/core';
import { SupplyService } from './service/supply-service.service';
import { MachineService } from './service/machine-service.service';
import { Machine } from './model/machine';
import { Supply } from './model/supply';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  machine1: Machine = {id:1, name: "Woods-Penniman"};
  machine2: Machine = {id:2, name: "Draper Floor 2"};
  machine3: Machine = {id:3, name: "Draper Floor 3"};
  machine4: Machine = {id:4, name: "Alumni"};
  machine5: Machine = {id:5, name: "Hutchins"};
  machine6: Machine = {id:6, name: "Seabury"};

  supply1: Supply = {id:1, machine: this.machine1, time_checked: new Date(), coffee: true, short_supply: false, checked_by: "supply1"};
  supply2: Supply = {id:2, machine: this.machine2, time_checked: new Date(), coffee: true, short_supply: false, checked_by: "supply2"};
  supply3: Supply = {id:3, machine: this.machine3, time_checked: new Date(), coffee: true, short_supply: false, checked_by: "supply3"};
  supply4: Supply = {id:4, machine: this.machine4, time_checked: new Date(), coffee: true, short_supply: false, checked_by: "supply4"};
  supply5: Supply = {id:5, machine: this.machine5, time_checked: new Date(), coffee: true, short_supply: false, checked_by: "supply5"};
  supply6: Supply = {id:6, machine: this.machine6, time_checked: new Date(), coffee: true, short_supply: false, checked_by: "supply6"};

  constructor(private machineService: MachineService, private supplyService: SupplyService){
  };

  insertMachines():void {
    this.machineService.saveMachines(this.machine1).subscribe(x=>console.log(x));
    this.machineService.saveMachines(this.machine2).subscribe(x=>console.log(x));
    this.machineService.saveMachines(this.machine3).subscribe(x=>console.log(x));
    this.machineService.saveMachines(this.machine4).subscribe(x=>console.log(x));
    this.machineService.saveMachines(this.machine5).subscribe(x=>console.log(x));
    this.machineService.saveMachines(this.machine6).subscribe(x=>console.log(x));
  };

  insertTestData():void {
    this.supplyService.save(this.supply1).subscribe(x=>console.log(x));
    this.supplyService.save(this.supply2).subscribe(x=>console.log(x));
    this.supplyService.save(this.supply3).subscribe(x=>console.log(x));
    this.supplyService.save(this.supply4).subscribe(x=>console.log(x));
    this.supplyService.save(this.supply5).subscribe(x=>console.log(x));
    this.supplyService.save(this.supply6).subscribe(x=>console.log(x));
  }
}
