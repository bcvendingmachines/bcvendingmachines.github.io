import { Component, OnInit, Input } from '@angular/core';
import { Supply } from '../model/supply';
import { SupplyService } from '../service/supply-service.service';
import { MatAccordion } from '@angular/material/expansion';
import { ViewChild } from '@angular/core';
import { Machine } from '../model/machine';
@Component({
  selector: 'app-supply-display',
  templateUrl: './supply-display.component.html',
  styleUrls: ['./supply-display.component.sass']
})

export class SupplyDisplayComponent implements OnInit {

  supply!: Supply;
  testSupply!: Supply;
  loaded: boolean;
  @Input() machineName!:string;
  @Input() machineId!: Number;
  @Input() coffeeChecked!: boolean;
  @Input() shortSupplyChecked!: boolean;
  @ViewChild(MatAccordion) accordion!: MatAccordion;

  constructor(private supplyService: SupplyService) {
    this.loaded = false;
  }

  ngOnInit(): void {
    this.supplyService.getSupply(+this.machineId).subscribe(data => {
      this.supply = data;
      this.supply.has_coffee ? this.coffeeChecked = true : this.coffeeChecked = false;
      this.supply.has_short_supply ? this.shortSupplyChecked = true : this.shortSupplyChecked = false;
      if (data){
        this.loaded = true;
      };
    });
  };

  submitChanges(): void {

    this.testSupply = new Supply();
    this.testSupply.has_coffee = false;
    this.testSupply.has_short_supply = false;
    this.testSupply.machine = this.supply.machine;
    this.testSupply.user = "Jim";
    const date = new Date();
    this.testSupply.time_checked = date;

    this.supplyService.save(this.testSupply);
  }
}
