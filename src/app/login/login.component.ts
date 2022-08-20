import {Component, EventEmitter, Output} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {UserService} from "../service/user.service";
import {first} from "rxjs";
import {User} from "../model/user";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent {
  error = false
  errorMessage = "Please complete all forms"
  @Output() loggedIn = new EventEmitter<User>()

  constructor(public dialog: MatDialog, private userService: UserService) {
  }

  login(event: SubmitEvent, username: string, password: string) {
    event.preventDefault()
    if (!username || !password){
      this.error = true
      this.errorMessage = "Please complete all fields"
    } else {
      this.userService.logIn(username, password).pipe(first()).subscribe({
        next: (user)=>{
          this.dialog.closeAll()
          this.loggedIn.emit(user)
        }, error: ()=>{
          this.error = true
          this.errorMessage = "Server error logging in... Refresh?"
        }
      })
    }
  }
}
