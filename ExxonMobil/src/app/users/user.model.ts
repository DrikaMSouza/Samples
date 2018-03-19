export class User {
  public firstName: string;
  public lastName: string;
  public email: string;
  public field: boolean;
  public role: boolean;

  constructor( firstName: string, lastName: string, email: string, field:boolean, role:boolean) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.field = field;
    this.role = role;
  }
}
