import User from './User';

export default class GossipEntry {
  user: User;
  entry: string;

  constructor(user: User, entry: string) {
    this.user = user;
    this.entry = entry;
  }
}
