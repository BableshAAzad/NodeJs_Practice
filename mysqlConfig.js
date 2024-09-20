const mysql = require("mysql2")

const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "ecommerce"
})

conn.connect((err) => {
    if (err) {
        console.error("Error", err)
    } else {
        console.log("connected")
    }
});

module.exports = conn;