import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-user-start',
  templateUrl: './user-start.component.html',
  styleUrls: ['./user-start.component.css']
})
export class UserStartComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute) {
}

  ngOnInit() {
  }

  // Create a New User
  onNewUser() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

}