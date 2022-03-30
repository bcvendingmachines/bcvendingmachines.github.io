import { Component, OnInit, Input } from '@angular/core';
import { Supply } from '../model/supply';
import { SupplyService } from '../service/supply-service.service';
import { MatAccordion } from '@angular/material/expansion';
import { ViewChild } from '@angular/core';
import { Machine } from '../model/machine';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-supply-display',
  templateUrl: './supply-display.component.html',
  styleUrls: ['./supply-display.component.sass']
})

export class SupplyDisplayComponent implements OnInit {

  supply!: Supply;
  newSupply!: Supply;
  loaded: boolean;
  editMode: boolean;
  @Input() machineId!: Number;
  @Input() coffeeChecked!: boolean;
  @Input() shortSupplyChecked!: boolean;
  @ViewChild(MatAccordion) accordion!: MatAccordion;

  constructor(private supplyService: SupplyService) {
    this.loaded = false;
    this.editMode = false;
  }

  ngOnInit(): void {
    this.supplyService.getSupply(+this.machineId).subscribe(data => {
      this.populateSupply(data);
    });
  };

  populateSupply(data: any):void {
    this.supply = data;
    this.supply.has_coffee ? this.coffeeChecked = true : this.coffeeChecked = false;
    this.supply.has_short_supply ? this.shortSupplyChecked = true : this.shortSupplyChecked = false;
    if (data){
      this.loaded = true;
    };
  };

  logToggle(component: string){
    if (component=="coffee"){
      this.coffeeChecked = !this.coffeeChecked;
    } else {
      this.shortSupplyChecked = !this.shortSupplyChecked;
    };
  };
  submitChanges(user:string): void {
    this.newSupply = new Supply();
    this.newSupply.machine = this.supply.machine;
    this.newSupply.time_checked = new Date();
    this.newSupply.user = !user? "Anon.": user;

    this.newSupply.has_coffee = this.coffeeChecked;
    this.newSupply.has_short_supply = this.shortSupplyChecked;

    this.supplyService.save(this.newSupply).subscribe(x=>console.log(x));
    location.reload();
  }
}
