const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const assert = require('assert');

const url = 'mongodb://127.0.0.1:27017/user';
const dbName = 'study';
const client = new MongoClient(url);

client.connect((err) => {
    assert.equal(null, err);
    console.log('Connected successfully to server');

    const db = client.db(dbName);
    const collection = db.collection('user');
    collection.insertMany([{name: 'hoge', age: 20}]);
    client.close();
});

