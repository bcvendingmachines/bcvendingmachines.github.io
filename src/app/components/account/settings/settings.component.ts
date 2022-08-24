import {Component, OnInit} from '@angular/core';
import {UserRepository} from "../../../state/user.repository";
import {User} from "../../../model/user";
import {first, take} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../../service/user.service";
import {Global} from "../../../service/configs";
import {ReCaptchaV3Service} from "ng-recaptcha";
import {MatSnackBar} from "@angular/material/snack-bar";
import {AppComponent} from "../../app.component";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.sass']
})
export class SettingsComponent implements OnInit {
  accountUser: User = new User()
  editable: boolean = false
  hasError: boolean = false
  public username: string | null | undefined
  errorMessage: string = this.global.error.incompleteFields

  constructor(private userService: UserService, private userRepository: UserRepository, private router: Router,
              private activatedRoute: ActivatedRoute, public global: Global, private recaptchaV3Service: ReCaptchaV3Service,
              private snackBar: MatSnackBar, private appComponent: AppComponent) { }

  ngOnInit(): void {
    this.username = this.activatedRoute.snapshot.paramMap.get('username');
    this.userService.getUser(this.username).pipe(first()).subscribe((user)=>{
      this.accountUser = user
    })
    this.userRepository.currentUser.pipe(take(1)).subscribe((user)=>{
      if (user){
        this.global.currentUser = user
        this.editable = user.username === this.username;
      }
    })
  }

  logOut(): void {
    this.userRepository.deleteUser(this.global.currentUser.id)
    this.global.currentUser = new User()
    this.global.loggedIn = false
    this.router.navigate(['/']).then(()=>{
    });
  }

  saveSettings(newName: string): void {
    this.global.currentUser.display_name = newName
    this.recaptchaV3Service.execute('importantAction').pipe(first()).subscribe({
      next: (token)=>{
        this.userService.updateUser({...this.global.currentUser, token: token}).pipe(first()).subscribe(()=>{
          this.userRepository.updateUser(this.global.currentUser.id, this.global.currentUser)
          this.appComponent.displayUser()
          this.snackBar.open(this.global.success.saveSuccessful, "Dismiss", {duration: 5000})
            .onAction().pipe(first()).subscribe(()=> this.snackBar.dismiss())
        })
      }, error: ()=>{
        this.hasError = true
        this.snackBar.open(this.global.error.unauthenticRequest, "Reload Page", {duration: 8000})
          .onAction().pipe(first()).subscribe(()=> location.reload())
      }
    })
  }
}
