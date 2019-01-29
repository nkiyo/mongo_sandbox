// show all dbs
show dbs

// show all collection on db "study"
use study
show collections

// show all documents on collection "user"
//db.user.find()

// show documents that age is 20.
db.user.find({age: 20})

// show documents that 20 <= age <= 30.
//db.user.find({age: {$gte: 20}, age: {$lte: 30}})

// show documents that age is 20 or 40.
//db.user.find({$or:[ {age: 20}, {age: 40}]})

// update ms.b's age.
//db.user.update({name: 'ms.b'}, {$set: {age: 21}})

// insert an user document
//db.user.insert({name: 'nakahara', age: 37, hobbies: ['programming', 'hoge']});


