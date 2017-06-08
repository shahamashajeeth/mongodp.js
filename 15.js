var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/student";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  db.collection("students").find({$or:[{name:"kala"},{name:"aruli"}]},{maths_marks:1,science_marks:1,Name:1,_id:0}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});
