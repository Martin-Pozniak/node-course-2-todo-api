/**************************************************
*File: mongodb-connect
*Desc: This file is practice connecting to our mongo db server. we insert, remove, and read from the DB
**************************************************/

/**************************************************
*Requires
**************************************************/
// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

/**************************************************
*Extra information
**************************************************/
// var obj = new ObjectID(); //This now allows us to create our own object ID's if we so choose. but we would rather let mongo do it automatically like it does by default
// console.log(obj);

//object destructuring is what is used above...below is an example. it strips an objects members into a variable. this is an ES6 feature
// var user = {name: 'andrew', age: 25};
// var {name} = user;
// console.log(name); 
//---------------------------------------------------------------

/**************************************************
*Mongo Connect Function | We handle all the adding and reading and removing from within this function
**************************************************/
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    
    if( err ) {
        console.log("Unable To Connect To Mongo DB Server");
        return;
    }
    console.log("Connected To MongoDB server!");

    const TodoDb = db.db('TodoApp'); //need this line for using v3.x of mongo

    /**************************************************
    *Insert Functions
    **************************************************/
    // TodoDb.collection('Todos').insertOne({
    //     text: 'Something To Do',
    //     completed: false
    // }, (err,result) => {
    //     if(err) {
    //         return console.log("There was an Error: ",err);
    //     }
    //     console.log(JSON.stringify(result.ops,undefined,2)); //result.ops returns all the documents
    // });
    //Insert a new doc into the users collection
    // TodoDb.collection('Users').insertOne(
    //     {name:'Josh',age:25},
    //     (err,result) => {
    //         if(err) return console.log("Something Went Wrong");
    //         console.log(JSON.stringify(result.ops[0]._id.getTimestamp(),undefined,2));
    // });

    /**************************************************
    *Querying Mongo db
    **************************************************/

    db.close();
});