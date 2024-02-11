import express from 'express';
import {getUsers, createUsers} from '../Controllers/UsersController.js';
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/api/v1/users', getUsers);
app.post('/users', createUsers);

export { app }