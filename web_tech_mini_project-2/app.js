var express=require("express");
var bodyParser=require("body-parser");
var bcrypt=require("bcryptjs")
//require("./db/conn");
//const Register=require("register")

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/gfg');
var db=mongoose.connection;
db.on('error', console.log.bind(console, "connection error"));
db.once('open', function(callback){
	console.log("connection succeeded");
})

var app=express()


app.use(bodyParser.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
	extended: true
}));

app.post('/sign_up', function(req,res){
	var name = req.body.name;
	var email =req.body.email;
	var pass = req.body.password;
	//var phone =req.body.phone;

	var data = {
		"name": name,
		"email":email,
		"password":pass,
		//"phone":phone
	}


db.collection('details').insertOne(data,function(err, collection){
		if (err) throw err;
		console.log("Record inserted Successfully");
			
	});
		
	return res.redirect('signup_success.html');
})
/*app.post('/sign_in',async(req,res)=>{
    try{
        const email=req.body.email;
        const password=req.body.password;
        const useremail=await Register.findone({email:email});
        const isMatch =bcrypt.compare(password,useremail.password);
        if(isMatch){
            res.status(201).render("a");
        }
        else{
            res.send("invalid password");

        }

    }
    catch{
        res.status(400).send("invalid login details");

    }
})*/



app.get('/',function(req,res){
res.set({
	'Access-control-Allow-Origin': '*'
	});
return res.redirect('a.html');
}).listen(3000)


console.log("server listening at port 3000");

/*var express=require('express')
var bodyParser=require('body-Parser')
var multer=require('multer')
var app=express();

app.get("/",function(req,res){
    res.render('index.html')
})
//create view
app.set('view engine','pug')
app.set('views','./views')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:true
}))
app.post('/',(req,res)=>{
    console.log(req,body);
    res.send("received your request")
})
app.listen(3000,function(){
    console.log("server started");
})*/