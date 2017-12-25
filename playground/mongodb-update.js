/************************************************************************************************************************************
*File: mongodb-update
*Desc: This file is practice connecting to our mongo db server. We update information in the database
************************************************************************************************************************************/

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

    /**************************************************
    *Function: findOneAndUpdate | this function finds and updates a specified entry
    **************************************************/
    // TodoDb.collection('Todos').findOneAndUpdate(
    //     {_id: new ObjectID("5a3f38916121a207314b87e8")}, //filter arg
    //     {$set: {completed:false}}, //update args
    //     {returnOriginal: false}//options arg
    //     //no callback passed so a promise is returned
    // ).then( (result) => {
    //     console.log(result);
    // });

    /**************************************************
    *Function: Challenge, Update the name field and increment the age field
    **************************************************/
    TodoDb.collection('Users').findOneAndUpdate(
        {_id: new ObjectID("5a3f325999e8c720d4595a6f")},
        {$set: {name:'Dayquan'}, $inc: {age: 1}},
        {returnOriginal: false}
    ).then( (res) => {
        console.log(res);
    });

    //db.close();
});