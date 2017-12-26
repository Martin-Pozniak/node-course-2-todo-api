const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
console.log("\n----------\n"+process.env.MONGODB_URI+"\n----------\n");
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp',{useMongoClient:true}).then( () => {

}, (e) => console.log("Error Something Happend:",e));

module.exports = {
    mongoose
}