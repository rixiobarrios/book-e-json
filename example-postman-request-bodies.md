# Postman Request Bodies

## Bookmark: Create

_URL:_ `http://localhost:8080/api/bookmarks`

_Method:_ `POST`

_Request Body:_

```json
{
  "title": "example",
  "url": "example.com"
}
```

## Bookmark: Update

_URL:_ `http://localhost:8080/api/bookmarks/example`

_Method:_ `PUT`

_Request Body:_

```json
{
  "title": "updated title",
  "url": "example.com"
}
```

## User: Create

_URL:_ `http://localhost:8080/api/users`

_Method:_ `POST`

_Request Body:_

```json
{
  "name": "Hammad",
  "email": "hammad@gmail.com"
}
```

## User: Create With Bookmark

_URL:_ `http://localhost:8080/api/users/create-with-bookmark`

_Method:_ `POST`

_Request Body:_

```json
{
  "user": {
    "name": "Hammad",
    "email": "hammad@gmail.com"
  },
  "bookmark": {
    "title": "bookmark with user",
    "url": "another-example.com"
  }
}
```

## Add Bookmark to user:

_URL:_ `http://localhost:8080/api/users/Paul%20Allen/bookmark/5d72c65b2c92fd9e8d5d3c40`

_Method:_ `PUT`

_Request Body:_ None!
