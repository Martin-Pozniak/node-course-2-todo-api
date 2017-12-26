/*****************************************************************************************************
*File: server.js
*Desc: This file is the main file we use to get our server app up and running.
       We are using the mongoose module to simplify the interaction between our app and the mongodb
       Database.
*****************************************************************************************************/



/*****************************************************************************************************
*Requiring of the files that set up and configure mongoose and the models
*****************************************************************************************************/
const express = require('express'); //we put a space between local imports and ones from our dependencies
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

const port = process.eventNames.PORT || 3000;

var {mongoose} = require('./db/mongoose.js'); //we are using es6 destructuring
var {Todo} = require('./models/Todos.js');
var {User} = require('./models/Users.js');

/*****************************************************************************************************
*RStart the express app
*****************************************************************************************************/
var app = express();

/*****************************************************************************************************
*Configure Middleware
*****************************************************************************************************/
app.use(bodyParser.json()); //this middle ware takes json and turns it into something we can use on the req object

/*****************************************************************************************************
*create the app routes. The post handlers and the request handlers
*****************************************************************************************************/
app.post('/todos', (req,res) => {
    var todo = new Todo({
        text:req.body.text
    });
    todo.save().then( (doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});

app.get('/todos',(req,res) => {
    Todo.find().then( (todos) => {
        res.send({
            todos
        });
    }, (e) => {
        res.status(400).send(e);
    });
});

//GET /todos/:id
app.get('/todos/:id', (req,res) => {

    var id = req.params.id;

    if(!ObjectID.isValid(id)) 
        return res.status(404).send("Invalid ID");

    Todo.findById({_id:id}).then( (todo) => {
        if(!todo) return res.status(404).send();
        res.send({
            todo
        });
    }), (e) => res.status(400).send(e);

});


/*****************************************************************************************************
*start the web server on port 3000 localhost
*****************************************************************************************************/
app.listen(port, () => {
    console.log("About to start server!");
    console.log(`Started At ${port}`);
});

module.exports = {app};


