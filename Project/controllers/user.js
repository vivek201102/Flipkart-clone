const db = require("../models");
const md5 = require("react-native-md5");
const await = require("await");
const path = require("path");
const User = db.user_model;

/* 
    Create User
*/

exports.createUser = async function (req, res) {
    let data = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        contact_no: req.body.contact_no,
        email: req.body.email,
        gender: req.body.gender,
        password: md5.hex_md5(req.body.password),
    }
    
    const user = await User.create(data);

    res.status(200).json({
        status : true,
        message: "User Created Successfully",
        data: user,
    });
};


/*
    Fina all User
*/

exports.getUsers = async function (req, res) {
    const user = await User.findAll()
    
    if(!user) {
        res.status(200).json({
            status : false,
            message: "No Data Found.",
            data: user,
        });
    }

    res.status(200).json({
        status : true,
        message: "Data get Successfully",
        data: user,
    });
}


/*
    Authentication of user
*/

exports.getAuth = async function (req, res){
    var email= req.body.email;
    var password= md5.hex_md5(req.body.password);
    const user = await User.findOne({where: {email:email, password:password}})
    if(user != null)
        res.send({message:"User found", data: user});
    else
        res.send("User not found");
}


/*
    Updatre User
*/

exports.updateUser = async function (req, res) {
    const id = req.body.id;
    const user = await User.update(req.body, {where: {id: id}});
    res.send({data:user});
}

/*
    Update Password
*/


exports.updatePassword = async function(req, res){
    const current = md5.hex_md5(req.body.current);
    const id = req.body.id;
    const data = {
        password:md5.hex_md5(req.body.password)
    }
    let user = await User.findOne({where: {id: id}});
    if(user.password == current)
    {
        user = await User.update(data, {where: {id:id}});
        res.send({data:user});
    }
    else
        res.send({message:"Current password is wrong"});
}


/*
    Delete User
*/

exports.deleteUser = async function(req, res){
    const id = req.body.id;
    const user = await User.destroy({where: {id: id}});
    if(user)
        res.send({message:"Data deleted succesfull"});
    else
        res.send({message:"No data found"});
}
