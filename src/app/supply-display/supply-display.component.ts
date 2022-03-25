import { Component, OnInit, Input } from '@angular/core';
import { Supply } from '../model/supply';
import { SupplyService } from '../service/supply-service.service';

@Component({
  selector: 'app-supply-display',
  templateUrl: './supply-display.component.html',
  styleUrls: ['./supply-display.component.sass']
})

export class SupplyDisplayComponent implements OnInit {

  supply!: Supply;
  @Input() machineName!:string;
  @Input() machineId!: Number;
  @Input() coffeeChecked!: boolean;
  @Input() shortSupplyChecked!: boolean;
  constructor(private supplyService: SupplyService) { }

  ngOnInit(): void {
    this.supplyService.getSupply(+this.machineId).subscribe(data => {
      this.supply = data;
      this.supply.has_coffee ? this.coffeeChecked = true : this.coffeeChecked = false;
      this.supply.has_short_supply ? this.shortSupplyChecked = true : this.shortSupplyChecked = false;
    });
  };
}
