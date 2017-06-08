var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/student";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var marks = [
    { name: 'mala', maths_marks: '45', englsh_marks:'53', science_marks:'75'},
    { name: 'vanu', maths_marks: '80', englsh_marks:'75', science_marks:'85'},
    { name: 'kala', maths_marks: '32', englsh_marks:'46', science_marks:'53'},
    { name: 'aruli', maths_marks: '78', englsh_marks:'85', science_marks:'80'},
    { name: 'sharu', maths_marks: '80', englsh_marks:'76', science_marks:'65'},
    { name: 'kumaran', maths_marks: '32', englsh_marks:'73', science_marks:'84'},
    { name: 'lucky', maths_marks: '66', englsh_marks:'90', science_marks:'45'},
    { name: 'gva', maths_marks: '71', englsh_marks:'75', science_marks:'56'},
    { name: 'raam', maths_marks: '41', englsh_marks:'65', science_marks:'88'}
  ];
  db.collection("students").insert(marks, function(err, res) {
    if (err) throw err;
    console.log("Number of records inserted: " + res.insertedCount);
    db.close();
  });
});
