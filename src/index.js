import 'dotenv/config';
// import { app } from "./server.js";
import { app } from "./Routes/api.js";
import fs from 'fs';

const dirs = ['./uploads', './images'];

dirs.forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdir(dir, function(err) {
        if (err) {
          console.log(err)
        } else {
          console.log("New directory successfully created.", dir)
        }
    });
} else {
    console.log("Directory already exists.", dir);
}
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server was started. Port ${PORT}`)
})