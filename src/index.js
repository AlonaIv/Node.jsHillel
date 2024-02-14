import 'dotenv/config';
// import { app } from "./server.js";
import { app } from "./Routes/api.js";
import fs from 'fs';

if (!fs.existsSync("./images")) {
    fs.mkdir("./images", function(err) {
        if (err) {
          console.log(err)
        } else {
          console.log("New directory successfully created.")
        }
    });
} else {
    console.log("Directory already exists.");
}

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server was started. Port ${PORT}`)
})