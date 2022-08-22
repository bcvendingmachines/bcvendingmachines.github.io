import {createStore} from '@ngneat/elf';
import {
  addEntities,
  deleteEntities,
  selectAllEntities, selectFirst,
  setEntities,
  updateEntities,
  withEntities
} from '@ngneat/elf-entities';
import {Observable} from 'rxjs';
import {withRequestsCache, withRequestsStatus} from '@ngneat/elf-requests';
import {Injectable} from "@angular/core";

export interface User {
  id: PropertyKey | number
  username: string | undefined
  password: string | undefined
  contributions: number
  display_name: string | undefined
}

@Injectable({ providedIn: 'root' })
export class UserRepository {
  user$: Observable<User[]>;
  currentUser: Observable<User | undefined>
  private store;

  constructor() {
    this.store = this.createStore();
    this.user$ = this.store.pipe(selectAllEntities());
    this.currentUser = this.store.pipe(selectFirst())
  }

  setUser(user: User[]) {
    this.store.update(setEntities(user));
  }

  addUser(user: User) {
    this.store.update(addEntities(user));
  }

  updateUser(id: User['id'], user: Partial<User>) {
    this.store.update(updateEntities(id, user));
  }

  deleteUser(id: User['id']) {
    this.store.update(deleteEntities(id));
  }

  private createStore() {
    return createStore({name: 'user'},
      withEntities<User, 'id'>({idKey: 'id'}),
      withRequestsCache<'User'>(), withRequestsStatus<'User'>());
  }
}
