import express from 'express';
import {getUsers, createUsers} from '../Controllers/UsersController.js';
import { uploadVideo } from '../Controllers/VideoController.js';
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//users
app.get('/api/v1/users', getUsers);
app.post('/users', createUsers);

//video
app.post('/upload', uploadVideo);

export { app }