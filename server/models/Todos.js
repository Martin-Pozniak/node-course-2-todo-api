var mongoose = require('mongoose');


/*****************************************************************************************************
*Create a mongoose model | Basically defining what should be in a document...whats required whats not, what fields we want etc...
*****************************************************************************************************/
var Todo = mongoose.model('Todo',{
    text: {
        type: String,
        required: true,
        minLength:1,
        trim: true
    },
    completed: {
        type: Boolean,
        default:false
    },
    completedAt: {
        type: Number,
        default:null
    }
});

module.exports = {Todo}