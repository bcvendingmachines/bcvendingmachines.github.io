// Comment out the config you don't need

// PRODUCTION / HTTPS
// export enum Configs {
//   saveUrl = 'https://bcvm.herokuapp.com/save',
//   supplyUrl = 'https://bcvm.herokuapp.com/supply/',
//   machinesUrl = 'https://bcvm.herokuapp.com/machines',
//   loginUrl = 'https://bcvm.herokuapp.com/login',
//   createAccountUrl = 'https://bcvm.herokuapp.com/create',
//   userUrl = 'https://bcvm.herokuapp.com/user/',
//   updateUserUrl = 'https://bcvm.herokuapp.com/updateUser',
// }

// LOCAL / HTTP
import {User} from "../model/user";
import {Injectable} from "@angular/core";

export enum Configs {
  saveUrl = 'http://localhost:8080/save',
  supplyUrl = 'http://localhost:8080/supply/',
  machinesUrl = 'http://localhost:8080/machines',
  loginUrl = 'http://localhost:8080/login',
  createAccountUrl = 'http://localhost:8080/create',
  userUrl = 'http://localhost:8080/user/',
  updateUserUrl = 'http://localhost:8080/updateUser'
}

@Injectable({providedIn: "root"})
export class Global {
  public currentUser: User = new User()
  public loggedIn: boolean = false
}
