import { Group } from './Group';

export default class User {
  id: string;
  name: string;
  groups: Group[];

  constructor(id: string, name: string, groups: Group[]) {
    this.id = id;
    this.name = name;
    this.groups = groups;
  }

  public getId(): string {
    return this.id;
  }
}
