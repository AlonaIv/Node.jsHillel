import { rejects } from 'assert';
import fs from 'fs/promises';
import { resolve } from 'path';

const getUsers = async (req, res) => {
    try {
        let readResult = await readUsers();

        return readResult;
    } catch (error) {
        return error;
    }
};

const createUsers = async (req, res) => {
    const data = req.body;
    const validationResult = validateUsers(data);

    if (validationResult.code === 400) {
        return validationResult;
    }
    
    try {
        let writeResult = await writeUsers(data.users);
        return writeResult;
    } catch (error) {
        return error;
    }
};

function validateUsers(users) {
    if (true === users.hasOwnProperty('users')) {
        for (const user of users.users) {
            if (false === user.hasOwnProperty('login') || false === user.hasOwnProperty('password')) {
                return {
                    "code": 400,
                    "body": `Invalid user data. User: ${ user.login || 'empty'}, ${ user.password || 'empty'},`
                };
            }
        }
    } else {
        return {
            "code": 400,
            "body": 'Users is required.'
        };
    }

    return {
        "code": 200,
        "body": 'Ok.'
    }
} 

function writeUsers(users) {
    return new Promise((resolve, reject) => {
        fs.writeFile('db.json', JSON.stringify(users))
        .then(() => resolve({
            "code": 200,
            "body": 'Users were written'
        }))
        .catch(err => reject({
            "code": 500,
            "body": 'Error with writing'
        }));
    });
}


async function readUsers() {
    return new Promise((resolve, reject) => {
        fs.readFile('db.json')
        .then((data) => resolve({
            "code": 200,
            "body": "Ok",
            "data": data.toString()
        }))
        .catch(err => reject({
            "code": 500,
            "body": err.message
        }));
    });
}

export {
    getUsers,
    createUsers
  };