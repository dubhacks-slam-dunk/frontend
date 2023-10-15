import { Group } from './Group';

export default class User {
  id: string;
  firstName: string;
  lastName: string;
  groups: Group[];

  constructor(id: string, firstName: string, lastName: string, groups: Group[]) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.groups = groups;
  }

  public getId(): string {
    return this.id;
  }
}
