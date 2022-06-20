const mysql = require('mysql');
const db = require('../config/db.config');

var con = mysql.createConnection({
    host:db.host,
    user:db.user,
    password:db.password,
    database:db.database
});

exports.getAll = async function(){
    var users = [];
    con.query("SELECT * FROM user", (err, result)=>{
        result.forEach(element => {
            users.push(element);
        });
    });
    console.log(users);
    return users;
}