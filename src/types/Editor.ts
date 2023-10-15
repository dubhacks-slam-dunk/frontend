export default class Editor {
  name: string;
  systemMessage: string;

  constructor(name: string, systemMessage: string) {
    this.name = name;
    this.systemMessage = systemMessage;
  }
}
