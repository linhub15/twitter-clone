# twitter-clone

## API

### Create a Tweet

#### Request

```
POST /tweets HTTP/1.1
Content-Type: application/json

{
  "tweet": "My first tweet"
}
```

#### Response

```
HTTP/1.1 201 OK
Date: <just-now>
Location: http://localhost/tweets/936DA01F9ABD4d9d80C702AF85C822A8
Content-Type: application/json
ETag: <hashed-id>
Last-Modified: <just-now>

{
  "tweet_id": "936DA01F9ABD4d9d80C702AF85C822A8"
}
```

### Display Tweets

#### Request

```
GET /tweets HTTP/1.1
```

#### Response

```
HTTP/1.1 200 OK
Content-Type: application/json

[
  {
    "tweet_id": "936DA01F9ABD4d9d80C702AF85C822A8",
    "tweet": "My first tweet"
  }
]
```
