import express from 'express';
import { signinUser } from '../Controllers/Auth/LoginController.js';
import { signupUser } from '../Controllers/Auth/RegisterController.js';
import { userLoginValidationSchema } from "../validationSchemas/userValidationSchemas.js";
import { userCreateValidationSchema } from "../validationSchemas/userValidationSchemas.js";
import { validator } from '../middleware/validationMiddleware.js';

let signupRouter = express.Router();
let signinRouter = express.Router();

signupRouter.post('/signup', validator(userCreateValidationSchema), signupUser);
signinRouter.post('/signin', validator(userLoginValidationSchema), signinUser);

export { signupRouter, signinRouter }