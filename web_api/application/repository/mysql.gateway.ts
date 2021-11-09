import { Client } from "https://deno.land/x/mysql/mod.ts";

export class MysqlGateway {
  #hostname: string;
  #username: string;
  #db: string;
  #password: string;
  #client?: Client = undefined;
  
  constructor() {
    const hostname = Deno.env.get("MYSQL_HOSTNAME");
    const username = Deno.env.get("MYSQL_USERNAME");
    const db = Deno.env.get("MYSQL_DB"); 
    const password = Deno.env.get("MYSQL_PASSWORD");
    
    if (!hostname || !username || !db || !password) {
      throw new Error("missing environment variables");
    }

    this.#hostname = hostname as string;
    this.#username = username as string;
    this.#db = db as string;
    this.#password = password as string;
  }

  async #connect(): Promise<Client> {
    return await new Client().connect({
      hostname: this.#hostname,
      username: this.#username,
      db: this.#db,
      password: this.#password,
    });
  }

  async query(sql: string) {
    if (!this.#client) {
      this.#client = await this.#connect();
    }
    return await this.#client.query(sql);
  }

  async execute(sql: string) {
    if (!this.#client) {
      this.#client = await this.#connect();
    }
    return await this.#client.execute(sql);
  }
}