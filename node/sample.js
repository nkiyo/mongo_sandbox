const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const assert = require('assert');

const url = 'mongodb://127.0.0.1:27017';
const dbName = 'study';
const collectionName = 'user';
const client = new MongoClient(url);

client.connect((err) => {
    assert.equal(null, err);
    console.log('Connected successfully to server');

    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    // insert a document
    //collection.insertMany([{name: 'hoge', age: 20}]);

    // find all documents
    //collection.find({}).toArray((err, docs) => {
    //    assert.equal(err, null);
    //    console.log('Found the following records.');
    //    console.log(docs);
    //});

    // find documents with a query filter
    let name;
    let age;
    collection.find({name: 'nakahara'}).toArray((err, docs) => {
        assert.equal(err, null);
        console.log('Found the following records.');
        name = docs[0].name;
        age = docs[0].age;
        console.log(`name = "${name}", age = ${age} ${typeof age}`);
    });

    // update a document
    age++;
    //const newAge = {age: 11};
    const newAge = {age: age};
    console.log(`${JSON.stringify(newAge)}`);
    collection.updateOne({name: 'nakahara'}, { $set: newAge }, (err, result) => {
        assert.equal(err, null);
        assert.equal(1, result.result.n);
        console.log('Updated the document');
    });

    client.close();
});

