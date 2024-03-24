import { signup } from "../../Services/RegisterService.js";

const signupUser = async (req, res) => {
    const result = await signup(req, res);

    res.status(result.code).send(result);
};

export { signupUser };