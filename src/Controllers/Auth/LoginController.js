import { login } from "../../Services/LoginService.js";

const signinUser = async (req, res) => {
    const result = await login(req, res);

    res.status(result.code).send(result);
};

export { signinUser };