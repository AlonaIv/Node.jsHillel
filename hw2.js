import axios from "axios";

const executor = async (urls) => {
    const result = await getData(urls);

    console.log(result);
}

//task 1

const usersUrls = [
    'https://jsonplaceholder.typicode.com/users/1',
    'https://jsonplaceholder.typicode.com/users/2',
    'https://jsonplaceholder.typicode.com/users/3',
    'https://jsonplaceholder.typicode.com/users/4',
];

async function getData(urls) {
    let result = [];

    for (const url of urls) {
        let urlInfo = await axios.get(url);

        result.push(urlInfo.data);
    }

   return result;
}

executor(usersUrls);

//task 2

const users = [
    { username: 'user1', password: 'password1' },
    { username: 'user2', password: 'password2' },
    { username: 'user3', password: 'password3' },
    { username: 'admin', password: 'admin123' }
];

function authenticateUser(username, password) {
    return new Promise((resolve, reject) => {
        for (const user of users) {
            if (user.username === username && user.password === password) {
                return resolve(user);
            }
       }

        return reject(new Error('Username and Password are invalid!'));
    });
}

authenticateUser('user1', 'password1')
    .then(user => {
        console.log('user authenticated', user);
    })
    .catch(error => {
        console.error('Authentication failed:', error.message);
    });


authenticateUser('user5', 'passwor')
    .then(user => {
        console.log('user authenticated', user);
    })
    .catch(error => {
        console.error;
        console.error('Authentication failed:', error.message);
    });