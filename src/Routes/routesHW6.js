import express from 'express';

//point 2
var router1 = express.Router();
var router2 = express.Router();

router1.route("/cars")
.get((req, res) => {
    res.send('cars get')
})
.post((req, res) => {
    res.send('cars post')
})
.put((req, res) => {
    res.send('cars put')
});


router2.route("/cars/:carId")
.get((req, res) => {
    res.send('car get')
})
.delete((req, res) => {
    res.send('car delete')
})
.put((req, res) => {
    res.send('car put')
});

export { router1, router2 }