const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res)=> {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json(`Errors: ${err}`))
})

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;
    console.log(req.body)

    const newUser = new User({username, password, email});

    newUser.save()
        .then(() => {res.json('User added!')})
        .catch(err=> res.status(400).json(`Errors: ${err}`))
})

module.exports = router;