import {Component, OnInit} from '@angular/core'
import {MatDialog} from "@angular/material/dialog"
import {LoginComponent} from "./login/login.component"
import {UserRepository} from "./state/user.repository";
import {take} from "rxjs";
import {UserService} from "./service/user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit{
  fullYear = new Date().getFullYear()
  loginTitle: string | undefined = "Login"
  error = false
  errorMessage = "Please complete all forms"

  constructor(public dialog: MatDialog, private userRepository: UserRepository){
  }

  ngOnInit(): void {
    this.userRepository.currentUser.pipe(take(1)).subscribe((user)=>{
      if (user){
        this.loginTitle = user?.username
      }
    })
  }

  openLogin(): void {
    this.dialog.open(LoginComponent)
  }
}
