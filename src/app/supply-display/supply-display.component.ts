import { Component, OnInit, Input } from '@angular/core';
import { Supply } from '../model/supply';
import { SupplyService } from '../service/supply-service.service';
@Component({
  selector: 'app-supply-display',
  templateUrl: './supply-display.component.html',
  styleUrls: ['./supply-display.component.sass']
})
export class SupplyDisplayComponent implements OnInit {

  supply!: Supply[];
  @Input() machineId!: Number;
  constructor(private supplyService: SupplyService) { }

  ngOnInit(): void {
    this.supplyService.getSupply(+this.machineId).subscribe(data => {
      this.supply = data;
    });
    console.log("supply-display: "+this.supply)
  }
}
