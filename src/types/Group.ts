import { Edition } from './Edition';
import Editor from './Editor';
import User from './User';

export interface GroupProps {
  name: string;
  image: string;
  joinCode: string;
  users: User[];
  editor: Editor;
  edition: Edition;
}

export class Group {
  name: string;
  image: string;
  joinCode: string;
  users: User[];
  editor: Editor;
  edition: Edition;

  constructor(groupProps: GroupProps) {
    const { name, image, joinCode, users, editor, edition } = groupProps;
    this.name = name;
    this.image = image;
    this.joinCode = joinCode;
    this.users = users;
    this.editor = editor;
    this.edition = edition;
  }
}
