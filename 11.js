var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/student";

MongoClient.connect(url, function(err, db) {
if (err) throw err;
var myquery = {name:"raam",maths_marks:'41',englsh_marks:'65',science_marks:'88'};
var newvalues = {name:"raam",maths_marks:'41',englsh_marks:'65'};
db.collection("students").update(myquery, newvalues, function(err, res) {
if (err) throw err;
console.log(res.result.nModified + " record updated");
db.close();
});
});
