const db = require("../models/user");
const md5 = require("react-native-md5");

exports.getUsers = async function(req, res){
    let users = db.getAll();
    console.log(users);
    res.send({data: "user"});
}