import { userLoginValidationSchema } from "../validationSchemas/userValidationSchemas.js";
import bcrypt from 'bcrypt';

const salt = 10;
var users  = [
    {
        username: "TestUser",
        password: "$2b$10$FC8ScEhPLdNsWTDzeZ/gxerqW53SMLMsJ76C.irBdw.U1mfjBBys6",
        email: null
    }
];

const login = async (req, res) => {
    const { error, value } = userLoginValidationSchema.validate(req.body);

    if (error) {
        return {
            'code': 401,
            'body':  error.details[0].message
        }
      } else {
        for (const user of users) {
            const passwordVerify = await bcrypt.compare(value.password, user.password);

            if (user.username === value.username && true === passwordVerify) {
                return {
                    'code': 200,
                    'body':  "Successful login"
                }
            }     
        }

        return {
            'code': 401,
            'body':  "Not authorised"
        }
      }
};

export { login };