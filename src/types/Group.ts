import { Edition } from './Edition';
import User from './User';

export interface GroupProps {
  name: string;
  image: string;
  users: User[];
  editor: string;
  editions: Edition[];
}

export class Group {
  name: string;
  image: string;
  users: User[];
  editor: string;
  editions: Edition[];

  constructor(groupProps: GroupProps) {
    const { name, image, users, editor, editions } = groupProps;
    this.name = name;
    this.image = image;
    this.users = users;
    this.editor = editor;
    this.editions = editions;
  }

  public getUsers = () => {
    return this.users;
  };
  public getImage = () => {
    return this.image;
  };
  public getName = () => {
    return this.name;
  };
  public getEditor = () => {
    return this.editor;
  };
  public getEditions = () => {
    return this.editions;
  };
}
