var mongoose=require('../config/db');
var ObjectId = require('mongoose').Types.ObjectId; 
var Schema = mongoose.Schema;

var userSchema = new Schema({
  name: String,
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  admin: Boolean,
  location: String,
  meta: {
    age: Number,
    website: String
  },
  created_at: Date,
  updated_at: Date
});
var User = mongoose.model('User', userSchema);
/*var up=User.update({"_id": new ObjectId("587e603d3ff9901abacb02af")},{$set:{name:'s--jana'}});
  u= up.exec(function(err,data){
  console.log(JSON.stringify(data));
  return data
})*/
//console.log(JSON.stringify(u));
/*----------- Create New User -----------*/
User.save=function(data){
  var new_user=User(data);
  if(new_user.save()){
    return 1;
  }else{
    return 0;
  }

}

/*-------------- Edit User Data --------------*/
User.edit=function(id, data){
  return User.update({_id: new ObjectId("587e5f6778843d1a8f1a94f3")}, {$set:{name:"test2"}})
}

/*-------------- Delete User ----------------*/

module.exports = User;