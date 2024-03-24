import express from 'express';
import { validator } from "../middleware/validationMiddleware.js";
import { recordCreateSchema } from "../validationSchemas/dataValidationSchemasTask2.js";


var dataRouter = express.Router();

dataRouter.post('/data', validator(recordCreateSchema), (req, res) => {
    res.status(200).send('Ok!');
});

export { dataRouter }