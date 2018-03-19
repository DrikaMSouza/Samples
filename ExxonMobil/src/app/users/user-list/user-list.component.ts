import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit, OnDestroy {
  @Input() user: User;
  @Input() index: number;

  users: User[];
  subscription: Subscription;

  constructor(private userService: UserService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.subscription = this.userService.UsersChanged
      .subscribe(
        (users: User[]) => {
          this.users = users;
        }
      );
    this.users = this.userService.getUsers();
  }

  onNewUser() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }
 
  onDeleteUser(index: number) {
    this.userService.deleteUser(this.index);
  }


  onEditUser(index: number) {
    this.router.navigate([index+'/edit'], {relativeTo: this.route});
  }


  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}