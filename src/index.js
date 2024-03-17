import 'dotenv/config';
// import { app } from "./server.js";
import { app } from "./Routes/api.js";
import { router1, router2 } from "./Routes/routesHW6.js";
import fs from 'fs';

app.use(router1, router2);

function logRequest(req, res, next) {
  console.log(`Request made to ${req.url}`);
  next();
}

//point 3
//application level
app.use(logRequest);
//router level
router1.use(logRequest);
//route level
app.get('/something', logRequest, (req, res) => {
  res.send('something get')
});

//point 4
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something went wrong');
});

//point 5
function validateCarId(req, res, next) {
  const carId = req.params.carId;

  if (!/^\d+$/.test(carId)) {
      return res.status(400).json({ error: 'Car ID must be a number' });
  }

  next();
}

router2.patch('/cars/:carId', validateCarId, (req, res) => {
  res.send('car patch')
});


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
