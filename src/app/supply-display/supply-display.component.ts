import { Component, OnInit, Input } from '@angular/core';
import { Supply } from '../model/supply';
import { SupplyService } from '../service/supply-service.service';
import { Machine } from '../model/machine';

interface SupplyI {
  id: Number;
  machine: Machine;
  time_checked: Date;
  has_coffee: boolean;
  has_short_supply: boolean;
  user: string;
}

@Component({
  selector: 'app-supply-display',
  templateUrl: './supply-display.component.html',
  styleUrls: ['./supply-display.component.sass']
})

export class SupplyDisplayComponent implements OnInit {

  supply!: Supply;
  @Input() machineName!:string;
  @Input() machineId!: Number;

  constructor(private supplyService: SupplyService) { }

  ngOnInit(): void {
    this.supplyService.getSupply(+this.machineId).subscribe(data => {
      this.supply = data;
    });
  };
}
