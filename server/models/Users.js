var mongoose = require('mongoose');

/*****************************************************************************************************
*Create a mongoose model | Basically defining what should be in a document...whats required whats not, what fields we want etc...
*****************************************************************************************************/
var User = mongoose.model('User', {
    name: {
        type: String,
        required:true,
        minLength:1,
        trim:true
    },
    email: {
        type:String,
        minLength:1,
        required:true,
        trim:true
    },
    age: {
        type: Number,
        default:null,
        required:true
    },
    location: {
        type: String,
        default:null,
        required:false
    }
});

module.exports = {User}