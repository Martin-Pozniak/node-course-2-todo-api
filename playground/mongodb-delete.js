/**************************************************
*File: mongodb-delete
*Desc: This file is practice connecting to our mongo db server. We delete information from the db from here
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

    /**************************************************
    *Delete Many Function | Deletes all that match
    **************************************************/
    // TodoDb.collection('Todos').deleteMany({text: 'Eat Lunch'}).then( (result) => {
    //     console.log(result);
    // });

    /**************************************************
    *Delete One Function | Deletes the first instance that matchess
    **************************************************/
    // TodoDb.collection('Todos').deleteOne({text: 'Eat Lunch'}).then( (result) => {
    //     console.log(result);
    // });

    /**************************************************
    *Find One and Delete | Finds and returns and deletes the object
    **************************************************/
    // TodoDb.collection('Todos').findOneAndDelete({text: 'Eat Lunch'}).then( (result) => {
    //     console.log(result);
    // });

    /**************************************************
    *Challenge From Course
    **************************************************/
    // Todo.collection('Users').deleteMany({name: 'Martin'}).then ( (res) => {
    //     console.log(res);
    // });
    // TodoDb.collection('Users').findOneAndDelete({_id: new ObjectID('')}).then( (res) => {
    //     console.log(JSON.stringify(res,undefined,2));
    // })
    //db.close();
});