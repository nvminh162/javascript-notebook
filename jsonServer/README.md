# Configuration JSON server:
### Source: https://github.com/typicode/json-server

## 1. Trỏ cmd vào thư mục Project:

## 2. Cài đặt package.json:
```bash
    npm init
```

## 3. Cài đặt JSON server

### 3.1. Project only
```bash
    npm i json-server
```
### 3.2. Global PC
```bash
    npm i -g json-server
```

## 4. Create a db.json or db.json5 file
```bash
{
  "posts": [
    { "id": "1", "title": "a title", "views": 100 },
    { "id": "2", "title": "another title", "views": 200 }
  ],
  "comments": [
    { "id": "1", "text": "a comment about post 1", "postId": "1" },
    { "id": "2", "text": "another comment about post 1", "postId": "1" }
  ],
  "profile": {
    "name": "typicode"
  }
}
```

## 5.1. Config package.json if you choose 3.1. Project only => search "scripts" add line start
```bash
  "scripts": {
    "start": "json-server --watch db.json",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```

## 5.2. Start JSON Server
```bash
  npm start
```