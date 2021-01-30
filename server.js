// Require necessary packages
const express = require("express");
const mysql = require("mysql");
const exphbs = require("express-handlebars");
const app = express();
const PORT = process.env.PORT || 8080;
const routes = require("./controllers/burger_controllers");

// Setup sql database connection
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

// Setup express connection
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

// Setup handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Listener to start our server
app.listen(PORT, function() {
    console.log(`Server listening on: http://localhost:${PORT}`);
});