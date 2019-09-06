# Postman Request Bodies

## Bookmark: Create

```json
{
  "title": "example",
  "url": "example.com"
}
```

## Bookmark: Updater

```json
{
  "title": "updated title",
  "url": "example.com"
}
```

## User: Create

```json
{
  "name": "Hammad",
  "email": "hammad@gmail.com"
}
```

## User: Create With Bookmark

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
