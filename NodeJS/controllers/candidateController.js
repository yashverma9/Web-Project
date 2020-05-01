const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { Candidate } = require('../models/candidate');

// For opening in browser => localhost:3000/Candidate/
router.get('/', (req, res) => {
    Candidate.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Candidate Details :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Candidate.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving Candidate :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.post('/', (req, res) => {
    var can = new Candidate({
        can_id: req.body.can_id,
        name: req.body.name,
        age: req.body.age,
        constituency: req.body.constituency,
        });
    can.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Candidate Save :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    var can = {
        can_id: req.body.can_id,
        name: req.body.name,
        age: req.body.age,
        constituency: req.body.constituency,
    };
    Candidate.findByIdAndUpdate(req.params.id, { $set: can }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Candidate Update :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Candidate.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Candidate Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;