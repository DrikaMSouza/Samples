import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

import { UserService } from '../user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  subscription: Subscription;
  id: number;
  editMode = false;
  userForm: FormGroup;
  selectedField;
  selectedRole;

  constructor(private route: ActivatedRoute,
              private userService: UserService,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.editMode = params['id'] != null;
          this.initForm();
        }
      );
  }

  onSubmit() {
    if (this.editMode) {
      this.userService.updateUser(this.id, this.userForm.value);
    } else {
      this.userService.addUser(this.userForm.value);
    }
    this.onCancel();
  }


  onDelete(index: number) {
    (<FormArray>this.userForm.get('user')).removeAt(index);
  }

  onCancel() {
    this.router.navigate(['../../'], {relativeTo: this.route});
  }

  onSelectionChange(entry) {
    this.selectedField = Object.assign({}, this.selectedField, entry);
}

  private initForm() {
    let userName = '';
    let userLastName = '';
    let userEmail = '';
    let userField = false;
    let userRole = false;

    if (this.editMode) {
      const user = this.userService.getUser(this.id);
      userName = user.firstName;
      userLastName = user.lastName;
      userEmail = user.email;
      userField = user.field;
      userRole = user.role;
 
    }

    this.userForm = new FormGroup({
      'firstName': new FormControl(userName, Validators.required),
      'lastName': new FormControl(userLastName, Validators.required),
      'email': new FormControl(userEmail, Validators.required),
      'fieldField': new FormControl(userField, Validators.required),
      'fieldRole': new FormControl(userRole, Validators.required),
    });
  }

}
