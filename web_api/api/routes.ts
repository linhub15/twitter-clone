import { Router } from "./deps.ts";
import { listTweets, postTweet } from "./controllers/tweets.controller.ts";

const router = new Router();

router
  .get("/tweets", listTweets)
  .post("/tweets", postTweet)
;

export { router };