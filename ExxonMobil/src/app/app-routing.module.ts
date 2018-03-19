import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersComponent } from './users/users.component';
import { UserStartComponent } from './users/user-start/user-start.component';
import { UserEditComponent } from './users/user-edit/user-edit.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  { path: 'users', component: UsersComponent, children: [
    { path: '', component: UserStartComponent },
    { path: 'new', component: UserEditComponent },
    { path: ':id/edit', component: UserEditComponent },
  ] },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
