const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { Job } = require('../models/job');

// => localhost:3000/jobs/
router.get('/', (req, res) => {
    Job.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving jobs :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

        Job.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving jobs :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.post('/', (req, res) => {
    var job = new Job({
        title: req.body.title,
        role: req.body.role,
        company: req.body.company,
        location: req.body.location,
        salary: req.body.salary,
        experience: req.body.experience,
        noofpos:req.body.noofpos ,
        qualification: req.body.qualification,
        degree: req.body.degree,
        compinfo: req.body.compinfo,
        jobdesc: req.body.jobdesc
    });
    job.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in job Save :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    var job = {
        title: req.body.title,
        role: req.body.role,
        company: req.body.company,
        location: req.body.location,
        salary: req.body.salary,
        experience: req.body.experience,
        noofpos:req.body.noofpos ,
        qualification: req.body.qualification,
        degree: req.body.degree,
        compinfo: req.body.compinfo,
        jobdesc: req.body.jobdesc
    };
    Job.findByIdAndUpdate(req.params.id, { $set: job }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in job Update :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

        Job.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in job Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;