import { Component, OnInit, Input } from '@angular/core'
import { Supply } from '../model/supply'
import { SupplyService } from '../service/supply-service.service'
import { MatAccordion } from '@angular/material/expansion'
import { ViewChild } from '@angular/core'
import {Machine} from "../model/machine"
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-supply-display',
  templateUrl: './supply-display.component.html',
  styleUrls: ['./supply-display.component.sass']
})

export class SupplyDisplayComponent implements OnInit {

  supply!: Supply
  newSupply!: Supply
  loaded = false
  editMode = false
  @Input() machine!: Machine
  @ViewChild(MatAccordion) accordion!: MatAccordion

  constructor(private supplyService: SupplyService, private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.supplyService.getSupply(this.machine.id).subscribe((supply:Supply) => {
      this.populateSupply(supply)
    })
  }

  populateSupply(data: Supply): void {
    this.supply = data
    if (data){
      this.loaded = true
    }
  }

  logToggle(component: string){
    if (component=="coffee"){
      this.supply.coffee = !this.supply.coffee
    } else {
      this.supply.short_supply = !this.supply.short_supply
    }
  }
  submitChanges(checked_by:string): void {
    this.newSupply = new Supply()
    this.newSupply.machine = this.supply.machine
    this.newSupply.time_checked = new Date()
    this.newSupply.checked_by = !checked_by? "Anon.": checked_by

    this.newSupply.coffee = this.supply.coffee
    this.newSupply.short_supply = this.supply.short_supply
    this.supplyService.save(this.newSupply).subscribe({
      next: () => {
        this.supply = this.newSupply
        this.editMode = false
        this.snackBar.open("Update successful!")
      }, error: () => {
        this.snackBar.open("Unable to connect to database. Please try again later")
      }
    })
  }
}
