/**************************************************
*File: mongodb-find
*Desc: This file is practice connecting to our mongo db server. we query information from the database in this file.
**************************************************/

/**************************************************
*Requires
**************************************************/
// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

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

    /****************************************************************************
    *Querying Mongo db | Queries all the todos in the collection in the database
    ****************************************************************************/   
    // TodoDb.collection('Todos').find().toArray().then( (docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs,undefined,2));
    // }, (err) => {
    //     console.log("Unable to Fetch:",err);
    // }); //Calling find will return all the docs in the collection as a cursor, toArray() returns a promise

    /****************************************************************************
    *Querying Mongo db | Queries the Todos with the completed status of false
    ****************************************************************************/   
    // TodoDb.collection('Todos').find({completed:false}).toArray().then( (docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs,undefined,2));
    // }, (err) => {
    //     console.log("Unable to Fetch:",err);
    // });  

    /****************************************************************************
    *Querying Mongo db | Queries the Todos By ID
    ****************************************************************************/   
    // TodoDb.collection('Todos').find({_id: new ObjectID("5a3f38916121a207314b87e8")}).toArray().then( (docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs,undefined,2));
    // }, (err) => {
    //     console.log("Unable to Fetch:",err);
    // }); 

    /****************************************************************************
    *Querying Mongo db | Queries the Count of the Todos
    ****************************************************************************/   
    TodoDb.collection('Todos').find().count().then( (count) => {
        console.log(`Todos Count: ${count}`);
    }, (err) => {
        console.log("Unable to Fetch:",err);
    });

    /****************************************************************************
    *Querying Mongo db | Queries the users with age 21
    ****************************************************************************/   
    TodoDb.collection('Users').find({age:21}).toArray().then( (docs) => {
        console.log('Todos');
        console.log(JSON.stringify(docs,undefined,2));
    }, (err) => {
        console.log("Unable to Fetch:",err);
    });

    
    //db.close();
});