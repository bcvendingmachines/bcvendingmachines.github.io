import { Component, OnInit } from '@angular/core';
import { Supply } from '../model/supply';
import { SupplyService } from '../service/supply-service.service';

@Component({
  selector: 'app-db-tester',
  templateUrl: './db-tester.component.html',
  styleUrls: ['./db-tester.component.sass']
})
export class DbTesterComponent implements OnInit {
  supply!: Supply;
  newSupply!: Supply;

  constructor(private supplyService: SupplyService) {}

  ngOnInit(): void {
    // this.newSupply = new Supply();
    // this.supplyService.getSupply(+this.machineId).subscribe(data => {
    //   this.populateSupply(data);
    // });
    this.newSupply.machine = this.supply.machine;
    this.newSupply.time_checked = new Date();
    this.newSupply.checked_by = "Test";

    this.newSupply.coffee = true;
    this.newSupply.short_supply = false;

    this.supplyService.save(this.newSupply).subscribe(x=>console.log(x));
  };
}
