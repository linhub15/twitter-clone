import { RouterMiddleware } from 'https://deno.land/x/oak@v9.0.1/mod.ts';
import { listTweets } from "../../application/use_cases/list_tweets.ts";

const getTweets: RouterMiddleware = (ctx) => {
  listTweets();
  // Get tweets from the db
  ctx.response.body = [
    {
      tweet_id: '1',
      tweet: 'My first tweet',
    },
  ];
};

const postTweet: RouterMiddleware = (ctx) => {
  // handle use-case of making a tweet
}


export { getTweets, postTweet };
