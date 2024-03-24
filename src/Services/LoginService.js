import bcrypt from 'bcrypt';

const salt = 10;
let users  = [
    {
        username: "TestUser",
        password: "$2b$10$FC8ScEhPLdNsWTDzeZ/gxerqW53SMLMsJ76C.irBdw.U1mfjBBys6",
        email: null
    }
];

const login = async (req, res) => {
    const { username, password } = req.body;

    for (const user of users) {
        if (user.username === username) {
            const passwordVerify = await bcrypt.compare(password, user.password);

            if (true === passwordVerify) {
                return {
                    code: 200,
                    body:  "Successful login"
                }
            }        
        }
    }

    return {
        code: 401,
        body:  "Not authorised"
    }
};

export { login };