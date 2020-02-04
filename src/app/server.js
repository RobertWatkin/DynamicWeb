var express = require('express');
var path = require("path");
var bodyParser = require('body-parser');
var mongo = require("mongoose");

// mongo.connect("mongodb://localhost:27017/AngularCrud", function(err, response){
//     if(err){ console.log( err); }
//     else{ console.log('Connected to ' + db, " + ", response); }
// });

mongo
  .connect("mongodb://localhost:27017/ArticleSite", { 
    useNewUrlParser: true,
    useCreateIndex: true
  }) // Adding new mongo url parser
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

var app = express()
app.use(bodyParser());
app.use(bodyParser.json({limit:'5mb'}));
app.use(bodyParser.urlencoded({extended:true}));

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

var Schema = mongo.Schema;

var ArticlesSchema = new Schema({
    author: { type: String },
    authorToken: { type: String},
    title: { type: String },
    content: { type: String },
},{versionKey: false});

var model = mongo.model('articles', ArticlesSchema, 'articles');

app.post("/api/SaveArticle", function(req,res){
    var mod = new model(req.body);
    if(req.body.mode == "Save"){
        mod.save(function(err,data){
            if (err){
                res.send(err);
            }
            else {
                res.send({data: "Record has been Inserted..!!"});
            }
        });
    }
    else{
        model.findByIdAndUpdate(req.body.id, { author: req.body.author, authorToken: req.body.authorToken, title: req.body.title, content: req.body.content},
            function(err, data) {
            if (err){
                res.send(err);
            }
            else{
                res.send({data:"Record has been Updated..!!"})
            }
        });
    }  
})

app.post("/api/DeleteArticle", function(req,res){
    model.remove({ _id: req.body.id }, function(err){
        if(err){
            res.send(err);
        }
        else{
            res.send({data:"Record has been Deleted..!!"})
        }
    });
})

app.get("/api/GetArticle", function(req,res){
    model.find({}, function(err,data){
        if(err){
            res.send(err);
        }
        else{
            res.send(data);
        }
    });
})

app.listen(8080, function (){
    console.log("Listening on port 8080");
})