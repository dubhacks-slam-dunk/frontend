import User from './User';

export default class MediaEntry {
  user: User;
  entry: string;

  constructor(user: User, entry: string) {
    this.user = user;
    this.entry = entry;
  }
}
