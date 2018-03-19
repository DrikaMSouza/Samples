import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { User } from './user.model';

@Injectable()
export class UserService {
  startedEditing = new Subject<number>();
  UsersChanged = new Subject<User[]>();

  private Users: User[] = [
    new User(
      'FistName MiddleName',
      'LastName',
      'name.lastname@exxonmobile.com',
      true,
      false),
      new User(
        'FistName MiddleName',
        'LastName',
        'name.lastname@exxonmobile.com',
        true,
        false),
        new User(
          'FistName MiddleName',
          'LastName',
          'name.lastname@exxonmobile.com',
          true,
          false)
  ];

  constructor() {}

  getUsers() {
    return this.Users.slice();
  }

  getUser(index: number) {
    return this.Users[index];
  }

  addUser(User: User) {
    this.Users.push(User);
    this.UsersChanged.next(this.Users.slice());
  }

  updateUser(index: number, newUser: User) {
    this.Users[index] = newUser;
    this.UsersChanged.next(this.Users.slice());
  }

  deleteUser(index: number) {
    this.Users.splice(index, 1);
    this.UsersChanged.next(this.Users.slice());
  }
}
