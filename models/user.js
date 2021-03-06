/* sample user mongoose schema from IWA2 class lectured by prof. Mikhail */

var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({ 
    email: { type: String, unique: true, lowercase: true},
    password: String,
    username: String,
    gender: { 
        type: String,
        enum: ['MALE', 'FEMALE']
    },
    phone: Number 
});

module.exports = mongoose.model('User', userSchema);