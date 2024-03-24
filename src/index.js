import 'dotenv/config';
// import { app } from "./server.js";
import { app } from "./Routes/api.js";
import { dataRouter } from "./Routes/hw7_task2.js";
import { router1, router2 } from "./Routes/routesHW6.js";
import { signupRouter, signinRouter } from "./Routes/userAuth.js";
import fs from 'fs';

app.use(signupRouter, signinRouter);
app.use(router1, router2);
app.use(dataRouter);

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
  if (err.message) {
    res.status(400).send(err.message);
  } else {
    res.status(500).send('Something went wrong');
  }
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
