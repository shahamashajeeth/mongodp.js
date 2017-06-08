var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/student";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var myobj = [
  {name:"john",maths_marks:'87',englsh_marks:'23'}
  ];
  db.collection("students").insert(myobj, function(err, res) {
  if (err) throw err;
  console.log("Number of records inserted: " + res.insertedCount);
  db.close();
  });
});
