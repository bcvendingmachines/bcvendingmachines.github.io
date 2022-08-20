import { Component } from '@angular/core'
import {MatDialog} from "@angular/material/dialog"
import {LoginComponent} from "./login/login.component"
import {User} from "./model/user";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  fullYear = new Date().getFullYear()
  loginTitle: string | undefined = "Login"
  constructor(public dialog: MatDialog){
  }
  openLogin(): void {

    this.dialog.open(LoginComponent)
  }

  logIn(user: User) {
    this.loginTitle = user.username
  }
}
