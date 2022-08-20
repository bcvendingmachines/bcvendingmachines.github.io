import { Component } from '@angular/core'
import {MatDialog} from "@angular/material/dialog"
import {LoginComponent} from "./login/login.component"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  fullYear = new Date().getFullYear()
  loginTitle = "Login"
  constructor(public dialog: MatDialog){
  }
  openLogin(): void {
    this.dialog.open(LoginComponent)
  }
}
