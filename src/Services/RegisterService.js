import { userCreateValidationSchema } from "../validationSchemas/userValidationSchemas.js";
import bcrypt from 'bcrypt';

const salt = 10;
var users  = [
    {
        username: "TestUser",
        password: "$2b$10$FC8ScEhPLdNsWTDzeZ/gxerqW53SMLMsJ76C.irBdw.U1mfjBBys6",
        email: null
    }
];

const signup = async (req, res) => {
    const { error, value } = userCreateValidationSchema.validate(req.body);

    if (error) {
        return {
            'code': 400,
            'body':  error.details[0].message
        }
      } else {
        for (const user of users) {
            if (user.username === value.username) {
                return {
                    'code': 400,
                    'body':  "User alredy exist"
                }
            }       
        }
        const password = await bcrypt.hash(value.password, salt);
        
        users.push(
            {
                username: value.username,
                password: {password},
                email: value.email || null
            }
        );

         return {
            'code': 201,
            'body': "User was created" 
        }
      }
};

export { signup };