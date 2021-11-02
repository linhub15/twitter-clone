import { Client } from "https://deno.land/x/mysql/mod.ts";

export class MysqlGateway {
  #hostname: string = "";
  #username: string = "";
  #db: string = ""; 
  #password: string = "";
  #client?: Client = undefined;

  async #connect(): Promise<Client> {
    return await new Client().connect({
      hostname: this.#hostname,
      username: this.#username,
      db: this.#db,
      password: this.#password,
    });
  }

  async query(query: string) {
    if (!this.#client) {
      this.#client = await this.#connect();
    }
    return await this.#client.query(query);
  }
}