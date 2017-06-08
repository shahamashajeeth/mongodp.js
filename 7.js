var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/student";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var myquery =   { name: 'lucky', maths_marks: '66', englsh_marks:'90', science_marks:'45'};
  var newvalues = {$set:   { name: 'lucky', maths_marks: '66', englsh_marks:'90', science_marks:'75'} };
  db.collection("students").update(myquery, newvalues, function(err, res) {
    if (err) throw err;
    console.log(res.result.nModified + " record updated");
    db.close();
  });
});
