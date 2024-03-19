import express from 'express';
import { signinUser } from '../Controllers/Auth/LoginController.js';
import { signupUser } from '../Controllers/Auth/RegisterController.js';

var signupRouter = express.Router();
var signinRouter = express.Router();

signupRouter.post('/signup', signupUser);
signinRouter.post('/signin', signinUser);

export { signupRouter, signinRouter }