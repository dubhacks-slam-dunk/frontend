import { Group } from './Group';

export default class User {
  name: string;
  groups: Group[];

  constructor(name: string, groups: Group[]) {
    this.name = name;
    this.groups = groups;
  }
}
