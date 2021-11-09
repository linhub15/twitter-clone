import { MysqlGateway } from "../repository/mysql.gateway.ts";

export function listTweets() {
  const repository = new MysqlGateway();
  console.log(repository.query("select * from tweets"));
}