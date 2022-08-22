import {Component, Injectable} from '@angular/core'
import {UserRepository} from "../state/user.repository";
import {take} from "rxjs";
import {Global} from "../service/configs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
@Injectable({ providedIn: 'root' })
export class AppComponent {
  fullYear = new Date().getFullYear()
  loginTitle: string | undefined = "Login"

  constructor(private userRepository: UserRepository, public global: Global) {
  }

  displayUser(): void {
    this.userRepository.currentUser.pipe(take(1)).subscribe((user)=>{
      if (user){
        this.global.loggedIn = true
        this.loginTitle = user?.display_name
        this.global.currentUser = user
      }
    })
  }
}
