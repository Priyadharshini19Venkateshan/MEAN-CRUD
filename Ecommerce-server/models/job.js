const mongoose = require('mongoose');

var Job = mongoose.model('Job', {
    title: {type: String},
    role: { type: String },
    company: { type: String },
    location: { type: String },
    salary: { type: Number },
    experience: { type: Number },
    noofpos: { type: Number },
    qualification: { type: String },
    degree: { type: String },
    compinfo: { type: String },
    jobdesc: { type: String }
});

module.exports = { Job };