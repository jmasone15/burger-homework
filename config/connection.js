// Setup sql database connection
const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "rootroot",
    database: "burgers_db"
});

connection.connect( (err) => {
    if (err) throw err;
    console.log(`Connected at id: ${connection.threadId}`);
});

// Export to ORM
module.exports = connection;