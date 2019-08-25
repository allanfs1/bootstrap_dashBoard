var mongoClient = require("mongodb").MongoClient;

/* URL da Umbler*///url = "mongodb://web:somalia989@kamino.mongodb.umbler.com:43689/mongo";
url = "mongodb://localhost:27017/mongo";

   function saveCustomer(cm,bit,motor,callback){
     mongoClient.connect(url,function(err,db){
         if(err) return console.log(err)     
         db.db('mongo').collection("user").insert({cm,bit,motor},function(err,result){
         if(err) return console.log(err);
         console.log(result);
         db.close();
         callback();

        });
      });
   }



function findCuston(callback){
  mongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mongo");
    db.db('mongo').collection("user").find({}).toArray(function(err, docs) {
      if (err) throw err;
      console.log(docs);
      db.close();
      callback(docs);
    });
  });

}



module.exports = {saveCustomer,findCuston}