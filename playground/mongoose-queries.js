const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/Todos');
const {User} = require('./../server/models/Users');

// var id = '5a4194ded1495c3608d06158';
var uID = '5a41498e3a9df70be87c5c87';

// if(!ObjectID.isValid(id)) {
//     console.log('ID is not valid');
// }

// Todo.find( {
//     _id: id
// }).then( (todos) => {
//     console.log('\nTodos:',todos);
// });
// Todo.findOne( {
//     _id: id
// }).then( (todo) => {
//     console.log('\nTodo: ',todo);
// });

// Todo.findById(id).then( (todo) => {
//     if(!todo) return console.log('Id Not Found');
//     console.log('\nTodo: ',todo);
// }).catch( (e) => console.log(e));

User.findById(uID).then( (user) => {
    if(!user) return console.log("unable to find user");
    console.log(JSON.stringify(user,undefined,2));    
}).catch( (e) => console.log(e));