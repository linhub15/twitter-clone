import { RouterMiddleware } from 'https://deno.land/x/oak@v9.0.1/mod.ts';

const getTweets: RouterMiddleware = (ctx) => {
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
