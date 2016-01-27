var express = require('express');
var app = express();

var middleware = require('./middleware.js');
/*
var middleware= {
	requireAuthentication: function(reg,res,next) {
		console.log('private route hit');
		next();
	},
	logger: function (reg,res,next){
		console.log(reg.method); //get the req method
		next();
	}
}; */

//require the middleware
app.use(middleware.logger);//app level middleware

//route
//app.get('/',function(req,res){
	//res.send('Hello Express!'); //send back a string
//});
app.get('/about',middleware.requireAuthentication, function(req,res){   //route level middleware
	res.send('About us'); //send back a string
});

//new route to expose a folder,express.static takes folder you want to expose,__dirname is to get current path
app.use(express.static(__dirname +'/public'));

//console.log(__dirname);
app.listen(3000);