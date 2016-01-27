//use module exports to expose middleware


//add to module.exports
var middleware= {
	requireAuthentication: function(reg,res,next) {
		console.log('private route hit');
		next();
	},
	logger: function (reg,res,next){
		console.log(reg.method); //get the req method
		next();
	}
};

module.exports=middleware;