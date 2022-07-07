### Init project nodejs
```bash
npm init
npm init -y
```
### Install dependencies
```
npm i <name> // prod dependencie
npm install <name>

npm i -D <name> // Dev dependencie
npm install <name> --save-dev
```
### Git command
```
git init
git add .
git commit -m <message>
```
### DOC API REST
- GET /events -> get all events
- GET /events/:id -> get event by id
- POST /events -> create event
- DELETE /events/:id -> delete event by id
- PUT /events/:id -> update event by id


Create model user
    firstName
    lastName
    email
    password

Create route for users
Create controller for users
    getAllUsers, getOneUser, ...
