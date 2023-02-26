function validate(){
    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://localhost:27017/";

    MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("gfg");
    dbo.collection("details").findOne({}, function(err, result) {
        if (err) throw err;
        console.log(db.email);
        db.close();
    });
    });
}