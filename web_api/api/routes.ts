import { Router } from "./deps.ts";
import { getTweets, postTweet } from "./controllers/tweets.controller.ts";

const router = new Router();

router
  .get("/tweets", getTweets)
  .post("/tweets", postTweet)
;

export { router };