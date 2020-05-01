const mongoose = require('mongoose');

var Candidate = mongoose.model('Candidate', { 
    can_id: { type: String },    
    name: { type: String },
    age: { type: Number },
    constituency: { type: String }
});

module.exports = { Candidate };