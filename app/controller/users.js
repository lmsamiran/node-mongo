var User=require('../model/user');
var ObjectId = require('mongoose').Types.ObjectId;
var multer  = require('multer');
var up = multer({
    dest: './uploads/',
    limits: {
        fieldNameSize: 50,
        files: 1,
        fields: 5,
        fileSize: 625*625
    },
    rename: function(fieldname, filename) {
        return filename;
    },
    onFileUploadStart: function(file) {
        console.log('Starting file upload process.');
        if(file.mimetype !== 'image/jpg' && file.mimetype !== 'image/jpeg' && file.mimetype !== 'image/png') {
            return false;
        }
    },
    inMemory: true //This is important. It's what populates the buffer.
}).single('file');

module.exports.list = function(req, res){
	//var users=User.find({"_id":new ObjectId("587e5f6778843d1a8f1a94f3")});
	var users=User.find();
	users.exec(function(err,users){
		res.writeHead(200, {'Content-Type': 'text/plain'});
		res.write('Hello Samiran!\n');
		res.write('USer Data'+JSON.stringify(users));
		res.end();
	})
	
};
module.exports.add = function(req, res){
	//console.log(req.body);
	if(User.save(req.body)){
		res.writeHead(200, {'Content-Type': 'text/plain'});
		res.write('Data inserted successfully');
		res.end();
	}else{
		res.writeHead(200, {'Content-Type': 'text/plain'});
		res.write('Data not inserted');
		res.end();
	}
	
};
module.exports.edit=function(req, res){
	//console.log(req.params.id+'====>'+JSON.stringify(req.body));
	var edit=User.edit(req.params.id, req.body);
		edit.exec(function(err,data){
			//console.log(req.body);
		res.writeHead(200, {'Content-Type': 'text/plain'});
		res.write(JSON.stringify(data));
		res.end();
		});
	
}

module.exports.upload = function(req, res){
	up(req,res,function(){

		res.writeHead(200, {'Content-Type': 'text/plain'});
		res.write('Hello!\n');
		res.write('USer Data'+req.body.name);
		res.end();
	})
	
};
