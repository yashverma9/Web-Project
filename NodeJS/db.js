
/*
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Election', (err) => {
    if (!err)
        console.log('MongoDB connection succeeded.');
    else
        console.log('Error in DB connection : ' + JSON.stringify(err, undefined, 2));
});

module.exports = mongoose;

*/

/*
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://yash:123@cluster0-89xau.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
*/

const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://yash:123@cluster0-89xau.mongodb.net/test?retryWrites=true&w=majority").then().catch()