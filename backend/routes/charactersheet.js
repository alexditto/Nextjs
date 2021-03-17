const router = require('express').Router();
let Charactersheet = require('../models/charactersheet.model');

router.route('/').get((req, res)=> {
    Charactersheet.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json(`Errors: ${err}`))
})

router.route('/add').post((req, res) => {
    const name = req.body.name;
    const account = req.body.account;
    const type = req.body.type;
    const str = Number(req.body.str);
    const dex = Number(req.body.dex);
    const con = Number(req.body.con);
    const wis = Number(req.body.wis);
    const int = Number(req.body.int);
    const cha = Number(req.body.cha);

    const newCharactersheet = new Charactersheet({
        name, account, type, str, dex, con, wis, int, cha
    });

    newCharactersheet.save()
        .then(() => {res.json('Charactersheet added!')})
        .catch(err=> res.status(400).json(`Errors: ${err}`))
});

router.route('/:id').get((req, res)=> {
    Charactersheet.findById(req.params.id)
        .then(charactersheet => res.json(charactersheet))
        .catch(err => res.status(400).json(`Errors: ${err}`))
});

router.route('/:id').delete((req, res)=> {
    Charactersheet.findByIdAndDelete(req.params.id)
        .then(() => res.json("Charactersheet Deleted"))
        .catch(err => res.status(400).json(`Errors: ${err}`))
});

router.route('/update/:id').post((req, res)=> {
    Charactersheet.findById(req.params.id)
        .then(charactersheet => {
            charactersheet.name = req.body.name;
            charactersheet.type = req.body.type;
            charactersheet.str = req.body.str;
            charactersheet.dex = req.body.dex;
            charactersheet.con = req.body.con;
            charactersheet.wis = req.body.wis;
            charactersheet.int = req.body.int;
            charactersheet.cha = req.body.cha;

            charactersheet.save()
                .then(()=> res.json('Charactersheet Updated'))
                .catch(err => res.status(400).json(`Errors: ${err}`))
        })
        .catch(err => res.status(400).json(`Errors: ${err}`))
})

module.exports = router;