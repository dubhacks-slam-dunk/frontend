import User from './User';

export default class MediaEntry {
  user: User;
  entry: string;
  // type: string;

  constructor(user: User, entry: string) {
    this.user = user;
    this.entry = entry;
    // this.type = type;
  }
}
