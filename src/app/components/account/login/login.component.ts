import {Component, ElementRef, ViewChild} from '@angular/core';
import {UserService} from "../../../service/user.service";
import {first} from "rxjs";
import {Router} from "@angular/router";
import {AppComponent} from "../../app.component";
import {ReCaptchaV3Service} from "ng-recaptcha";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Global} from "../../../service/configs";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})

export class LoginComponent {
  hasError: boolean = false
  creatingAccount: boolean = false
  errorMessage: string = this.global.error.incompleteFields
  username: string | undefined = "Login"
  @ViewChild('retypePassword') retypePassword: ElementRef | undefined;

  constructor(private userService: UserService, private router: Router, private appComponent: AppComponent,
              private recaptchaV3Service: ReCaptchaV3Service, private snackBar: MatSnackBar, public global: Global) {
  }

  login(username: string, password: string) {
    if (!username || !password){
      this.hasError = true
      this.errorMessage = this.global.error.incompleteFields
    } else {
      this.recaptchaV3Service.execute('importantAction').pipe(first())
        .subscribe({
            next: (token)=>{
              this.userService.logIn(username, password, token).pipe(first()).subscribe({
                next: ()=>{
                  this.router.navigate(['/']).then(()=>{
                    this.appComponent.displayUser()
                  });
                }, error: ()=>{
                  this.hasError = true
                  this.errorMessage = this.global.error.serverError
                }
              })
            },
            error: ()=> {
              this.snackBar.open(this.global.error.unauthenticRequest, "Reload Page", {duration: 8000})
                .onAction().pipe(first()).subscribe(()=> location.reload())
            }
        });
    }
  }

  createAccount(username: string, password: string) {
    if (!this.retypePassword || !username || !password) {
      this.hasError = true
      this.errorMessage = this.global.error.incompleteFields
    } else if (password != this.retypePassword.nativeElement.value) {
      this.hasError = true
      this.errorMessage = this.global.error.passwordMismatch
    } else {
      this.recaptchaV3Service.execute('importantAction').pipe(first())
        .subscribe({
            next: (token)=>{
              this.userService.createAccount(username, password, token).pipe(first()).subscribe({
                next: (user)=>{
                  if (user.id){
                    this.router.navigate(['/']).then(()=>{
                      this.snackBar.open(this.global.success.accountCreated, "Dismiss")
                        .onAction().pipe(first()).subscribe(()=> this.snackBar.dismiss())
                      this.appComponent.displayUser()
                    })
                  } else {
                    this.hasError = true
                    this.errorMessage = this.global.error.userAlreadyExists
                  }
                }, error: ()=>{
                  this.hasError = true
                  this.errorMessage = this.global.error.serverError
                }
              })
            },
            error: ()=> {
              this.snackBar.open(this.global.error.unauthenticRequest, "Reload Page", {duration: 8000})
                .onAction().pipe(first()).subscribe(()=> location.reload())
            }
        });
    }
  }
}
