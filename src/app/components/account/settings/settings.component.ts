import {Component, OnInit} from '@angular/core';
import {UserRepository} from "../../../state/user.repository";
import {User} from "../../../model/user";
import {first, take} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../../service/user.service";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.sass']
})
export class SettingsComponent implements OnInit {
  accountUser: User = new User()
  currentUser: User = new User()
  editable: boolean = false
  public username: string | null | undefined
  contributions: number | undefined;

  constructor(private userService: UserService, private userRepository: UserRepository, private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.username = this.activatedRoute.snapshot.paramMap.get('username');
    this.userService.getUser(this.username).pipe(first()).subscribe((user)=>{
      this.accountUser = user
    })
    this.userRepository.currentUser.pipe(take(1)).subscribe((user)=>{
      if (user){
        this.currentUser = user
        this.editable = user.username === this.username;
      }
    })
  }

  logOut() {
    this.userRepository.deleteUser(this.currentUser.id)
    this.router.navigate(['/']).then(location.reload);
  }
}
