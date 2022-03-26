import { Component, OnInit, Input } from '@angular/core';
import { Supply } from '../model/supply';
import { SupplyService } from '../service/supply-service.service';
import { MatAccordion } from '@angular/material/expansion';
import { ViewChild } from '@angular/core';
@Component({
  selector: 'app-supply-display',
  templateUrl: './supply-display.component.html',
  styleUrls: ['./supply-display.component.sass']
})

export class SupplyDisplayComponent implements OnInit {

  supply!: Supply;
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
      }
    });
  };

  submitChanges(): void {
    // if ( === "coffee")){}
    // this.supply.has_coffee =
    alert("Saving...");
    // this.supplyService.save(this.supply);
  }
}
