import axios from 'axios';
import fs from 'fs';

async function processImage(imageUrl, filePath) {
    try {
        const response = await axios.get(imageUrl, {
            responseType: 'arraybuffer'
        });

        fs.writeFileSync(filePath, response.data);

        return Promise.resolve('Image successfully saved.');
    } catch (error) {
        return Promise.reject('Error saving image: ' + error.message);
    }
}

const imageUrl = 'https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure.webp';
const filePath = 'images/image.jpg';

processImage(imageUrl, filePath)
    .then(message => console.log(message))
    .catch(errorMessage => console.error(errorMessage));