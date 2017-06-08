var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/student";

 MongoClient.connect(url, function(err, db) {
 f (err) throw err;
 var myquery = {name:"john",maths_marks:'87',englsh_marks:'23'};
 var newvalues = {name:"john",maths_marks:'87',science_marks:'23'};
 db.collection("students").update(myquery, newvalues, function(err, res) {
 if (err) throw err;
 console.log(res.result.nModified + " record updated");
 db.close();
 });
 });
