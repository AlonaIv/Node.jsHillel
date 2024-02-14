import { getUsers as get, createUsers as create } from "../Services/UserService.js";

const getUsers = async (req, res) => {
    const result = await get(req, res);

    if (true === result.hasOwnProperty('data')) {
        res.send(result.data);
    } else {
        res.status(result.code).send(result);
    }
};

const createUsers = async (req, res) => {
    const result = await create(req, res);

    if (result.code == 400 || result.code == 500) {
        res.status(result.code).send(result);
    } else {
        res.send(result);
    }
};

export {
    getUsers,
    createUsers
  };