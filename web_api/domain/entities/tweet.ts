export class Tweet {
  #id: string;
  #message: string;

  constructor(message: string) {
    this.#id = "";
    this.#message = message;
  }

  get id() { return this.#id; }

  get message() { return this.#message; }

  set message(newMessage: string) { this.#message = newMessage; }
}