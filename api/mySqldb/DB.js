const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "todo_list",
    password: "see++17sql",
});

connection.connect(function(err){
  if(err)
    return console.log(err) ;
})

module.exports = connection ;