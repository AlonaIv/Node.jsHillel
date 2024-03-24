import bcrypt from 'bcrypt';

const salt = 10;
let users  = [
    {
        username: "TestUser",
        password: "$2b$10$FC8ScEhPLdNsWTDzeZ/gxerqW53SMLMsJ76C.irBdw.U1mfjBBys6",
        email: null
    }
];

const signup = async (req, res) => {
    const { username, password, email} = req.body;

    for (const user of users) {
        if (user.username === username) {
            return {
                code: 400,
                body:  "User alredy exist"
            }
        }       
    }
    const userPassword = await bcrypt.hash(password, salt);
    
    users.push(
        {
            username: username,
            password: userPassword,
            email: email || null
        }
    );

    return {
        code: 201,
        body: "User was created" 
    }
};

export { signup };