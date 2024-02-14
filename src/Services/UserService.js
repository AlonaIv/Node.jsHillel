import { rejects } from 'assert';
import fs from 'fs/promises';
import { resolve } from 'path';

const getUsers = async (req, res) => {
    try {
        let readResult = await readUsers();
        
        if (true === readResult.hasOwnProperty('data')) {
            readResult['data'] = '{"users":[' + readResult['data'].slice(0, -1) +']}';
        }

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
        let writeResult = await writeUsers(data.user);
        return writeResult;
    } catch (error) {
        return error;
    }
};

function validateUsers(user) {
    if (true === user.hasOwnProperty('user')) {
            if (false === user.user.hasOwnProperty('login') || false === user.user.hasOwnProperty('password')) {
                return {
                    "code": 400,
                    "body": `Invalid user data. User: login: ${ user.user.login || 'empty'}, password: ${ user.user.password || 'empty'},`
                };
            }
    } else {
        return {
            "code": 400,
            "body": 'User is required.'
        };
    }

    return {
        "code": 200,
        "body": 'Ok.'
    }
} 

function writeUsers(users) {
    return new Promise((resolve, reject) => {
        fs.appendFile('db.json', JSON.stringify(users) + ',')
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