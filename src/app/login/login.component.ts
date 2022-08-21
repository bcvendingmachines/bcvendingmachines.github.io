import {Component} from '@angular/core';
import {UserService} from "../service/user.service";
import {first} from "rxjs";
import {Router} from "@angular/router";
import {AppComponent} from "../app.component";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})

export class LoginComponent {
  error = false
  errorMessage = "Please complete all forms"
  username: string | undefined = "Login"
  loggedIn: boolean = false

  constructor(private userService: UserService, private router: Router, private appComponent: AppComponent) {
  }

  login(username: string, password: string) {
    if (!username || !password){
      this.error = true
      this.errorMessage = "Please complete all fields"
    } else {
      this.userService.logIn(username, password).pipe(first()).subscribe({
        next: ()=>{
          this.router.navigate(['/']).then(()=>{
            this.loggedIn = true
            this.appComponent.displayUser()
          });
        }, error: ()=>{
          this.error = true
          this.errorMessage = "Server error logging in... Refresh?"
        }
      })
    }
  }

  createAccount(username: string, password: string) {
    if (!username || !password){
      this.error = true
      this.errorMessage = "Please complete all fields"
    } else {
      this.userService.createAccount(username, password).pipe(first()).subscribe({
        next: ()=>{
          this.router.navigate(['/']).then();
        }, error: ()=>{
          this.error = true
          this.errorMessage = "Server error logging in... Refresh?"
        }
      })
    }
  }
}
