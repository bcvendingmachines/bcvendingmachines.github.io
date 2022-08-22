import { Component, OnInit, Input } from '@angular/core'
import { Supply } from '../../../model/supply'
import { SupplyService } from '../../../service/supply-service.service'
import { MatAccordion } from '@angular/material/expansion'
import { ViewChild } from '@angular/core'
import {Machine} from "../../../model/machine"
import {MatSnackBar} from "@angular/material/snack-bar";
import {first} from "rxjs";
import {ReCaptchaV3Service} from "ng-recaptcha";
import { Global } from 'src/app/service/configs'
import {UserRepository} from "../../../state/user.repository";
import {UserService} from "../../../service/user.service";

@Component({
  selector: 'app-supply-display',
  templateUrl: './supply-display.component.html',
  styleUrls: ['./supply-display.component.sass']
})

export class SupplyDisplayComponent implements OnInit {

  supply!: Supply
  newSupply = new Supply()
  loaded = false
  editMode = false
  @Input() machine!: Machine
  @ViewChild(MatAccordion) accordion!: MatAccordion
  loadingText = "Loading..."

  constructor(private supplyService: SupplyService, private snackBar: MatSnackBar,
              private recaptchaV3Service: ReCaptchaV3Service, public global: Global,
              private userRepository: UserRepository, private userService: UserService) {
  }

  ngOnInit(): void {
    this.supplyService.getSupply(this.machine.id).pipe(first()).subscribe((supply:Supply) => {
      this.supply = supply
      if (supply){
        this.loaded = true
      }
    })
    setTimeout(()=>{
      if (!this.loaded){
        this.loadingText = "Taking longer than expected... Consider reloading?"
      }
    }, 5000)
  }

  logToggle(component: string){
    if (component=="coffee"){
      this.supply.coffee = !this.supply.coffee
    } else {
      this.supply.short_supply = !this.supply.short_supply
    }
  }

  saveSupply(token: string): void {
    this.supplyService.save(this.newSupply, token).pipe(first()).subscribe({
      next: () => {
        this.supply = this.newSupply
        this.global.currentUser.contributions += 1
        this.userRepository.updateUser(this.global.currentUser.id, this.global.currentUser)
        this.editMode = false
        this.snackBar.open("Update successful!", "Dismiss", {duration: 3000})
      }, error: () => {
        this.snackBar.open("Server error. Please try again", "Reload Page", {duration: 8000})
          .onAction().pipe(first()).subscribe(()=> location.reload())
      }
    })
  }

  submitChanges(checked_by: string, event: SubmitEvent): void {
    event.preventDefault()
    this.newSupply.machine = this.supply.machine
    this.newSupply.time_checked = new Date()
    this.newSupply.checked_by = this.global.loggedIn ? checked_by : checked_by+"**"
    this.newSupply.coffee = this.supply.coffee
    this.newSupply.short_supply = this.supply.short_supply
    this.newSupply.user_id = this.global.currentUser
    if (!this.global.loggedIn) {
      this.userService.getUser("guest").pipe(first()).subscribe((user) => {
        this.newSupply.user_id = user
        this.recaptchaV3Service.execute('importantAction').pipe(first())
          .subscribe({
              next: (token)=>{
                this.saveSupply(token)
              },
              error: ()=> {
                this.snackBar.open("Unauthentic request detected", "Reload Page", {duration: 8000})
                  .onAction().pipe(first()).subscribe(()=> location.reload())
              }
            }
          );
      })
    } else {
      this.recaptchaV3Service.execute('importantAction').pipe(first())
        .subscribe({
          next: (token)=>{
            this.saveSupply(token)
          },
          error: ()=> {
            this.snackBar.open("Unauthentic request detected", "Reload Page", {duration: 8000})
              .onAction().pipe(first()).subscribe(()=> location.reload())
          }
        }
      );
    }
  }
}
