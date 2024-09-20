//& --------------------Argument Variables-------------------------------
// const fs = require("fs")
// const input = process.argv

// if (input[2] === "add") {
//     fs.writeFileSync(input[3], input[4])
// } else if (input[2] === "remove") {
//     fs.unlinkSync(input[3])
// } else {
//     console.log("Invalid input")
// }
//~ --------------------Create Multiple folders-------------------------------
// const fs = require("fs")
// const path = require("path")
// const dirPath = path.join(__dirname, "files")
// ------create folders------------
// for (let i = 1; i <= 5; i++) {
// fs.writeFileSync(dirPath + "/newFolder" + i + ".txt", "Folder text test")
// fs.writeFileSync(`${dirPath}/newFolder${i}.txt`, "Folder text test")
// }
// ------print folders------------
// fs.readdir(dirPath, (err, files) => {
//     files.forEach((item) => {
//         console.log("Folder name is : ", item)
//     })
// })
//* -------------------------CRUD-------------------------------
// const fs = require("fs")
// const path = require("path")
// const dirPath = path.join(__dirname, "crud")
// const filePath = `${dirPath}/demo.txt`
// 1. Create
// fs.writeFileSync(filePath, "This is a demo file for CRUD option")

// 2. Read
// fs.readFile(filePath, "utf8", (err, item)=>{
//     console.log(item)
// })

// 3. Add Content
// fs.appendFile(filePath, " This is a additional text", (err)=>{
//     if(!err) console.log("File is updated")
// })

// 4. Rename file
// fs.rename(filePath, `${dirPath}/Test.txt`, (err)=>{
//     if(!err) console.log("File name is changed")
// })

// 5. Delete file
// fs.unlinkSync(`${dirPath}/Test.txt`)

//^ ----------------------------promise-----------------------------------
// let a = 10;
// let b = 0;

// let waitingData = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(20)
//     }, 3000)
// })
// waitingData.then((data) => {
//     b = data;
//     console.log(a + b);
// })
//!-------------------------------express js----------------------------------------------
// const express = require("express")
// const app = express();

// app.get("", (req, resp)=>{
//     resp.send("Hello Bablesh Kumar AAzad ", req.query.name)
//     console.log(req.query.name)
// })

// app.get("", (req, resp)=>{
//     resp.send("<h1>Hello Bablesh Kumar AAzad</h1>")
// })

// app.get("/about", (req, resp)=>{
//     resp.send("This is About Page")
// })

// app.get("/Help", (req, resp)=>{
//     resp.send("Help Page")
// })

// app.listen(5000)

// !-----------------html pages  with custom URL express js-----------------------
// const path = require("path")
// const express = require("express")

// const app = express();

// const publicPath = path.join(__dirname, "public")
// console.log(publicPath)
// app.use(express.static(publicPath));

// app.get("", (req, resp) => {
//     resp.sendFile(`${publicPath}/index.html`)
// })

// app.get("/about", (req, resp) => {
//     resp.sendFile(`${publicPath}/about.html`)
// })

// app.get("/contact", (req, resp) => {
//     resp.sendFile(`${publicPath}/contact.html`)
// })

// app.get("*", (req, resp) => {
//     resp.sendFile(`${publicPath}/help.html`)
// })

// app.listen(5000)


// *----------------Template Engine express js-----------------------
// ~ What is template engine?
// & Template engine is provided dynamic pages eg. ejs etc
// ^ npm i ejs
// ^ create a folder and default name is views
// ^ inside view folder create file with .ejs like profile.ejs

// const express = require("express")

// const app = express();
// app.set(`view engine`, `ejs`)


// app.get("/profile", (req, resp) => {
//     let user = {
//         name : "Bablesh AAzad",
//         email : "bableshaazad@outlool.com",
//         city : "Bengalore",
//         skills : ["java", "js", "mysql", "python", "reactjs"]
//     }
//     resp.render(`profile`, {user})
// })

// app.get("/login", (req, resp) => {
//     resp.render(`login`)
// })

// app.listen(5000)

// &---------------------- Middleware ---------------------------------------------------
// Middleware is used to protect route and checking authentication and authorization
//~ Types of middleware
//1. Application level middleware
//2. Router level middleware
//3. Error Handling middleware
//4. Built-in middleware
//5. Third party middleware

// const express = require("express")
// const reqFilter = require("./middleware")

// const app = express();
// const route = express.Router()

// route.use(reqFilter)

// app.get("/", (req, resp) => { // if you not want to apply then choose app otherwise route
//     resp.send(`Welcome to Home page`)
// })

// route.get("/user", (req, resp) => { // if you use in route level middleware then it apply only in that route
//     resp.send(`Welcome to User page`)
// })

// route.get("/about", (req, resp) => {
//     resp.send(`Welcome to About page`)
// })

// route.get("/contact", (req, resp) => {
//     resp.send(`Welcome to Contact page`)
// })

// app.use("/", route)
// app.listen(5000)

//^ ------------------------------------Mongo DB------------------------------------------

//! CRUD operation using mongodb

//& Read (CRUD)
// const dbConnection = require("./mongodb")

// dbConnection().then((resp)=>{
//    resp.find({}).toArray().then((data)=>{
//     console.log(data)
//    })
// })

//========= or ==============

// let main = async ()=>{
//   let data = await dbConnection();
//   data = await data.find().toArray()
//   console.log(data)
// }
// main()

//& Insert (CRUD)
// const dbConnection = require("./mongodb")

// let insertData = async () => {
//     let db = await dbConnection();
//     let response = await db.insertMany( // for single data you can use insertOne({...})
//         [
//             {
//                 name: "Kumar",
//                 email: "kumar@outlook.com",
//                 city: "Gangtok",
//                 age: 54
//             },
// {
//     name: "AAzad",
//     email: "aazad@outlook.com",
//     city: "Bhilai",
//     age: 60
// },
// {
//     name: "Durgesh",
//     email: "durgesh@outlook.com",
//     city: "Raipur",
//     age: 53
// }
//         ]
//     )
//     console.log(response)
// }
// insertData()

//& Update (CRUD)
// const dbConnection = require("./mongodb")

// let updateData = async () => {
//     let response = await dbConnection()
//     response = await response.updateOne(
//         { name: "Babloo" },
//         { $set: { city: "Bidar", age : 75 } }
//     )
//     console.log(response)
// }

// updateData()

//& Delete (CRUD)
// const dbConnection = require("./mongodb")

// let deleteData = async () => {
//     let response = await dbConnection()
//     response = await response.deleteMany({ name: "Kumar" })
//     console.log(response)
// }

// deleteData()

// *------------- MySql database ----------------------------
// const mysql = require("mysql2")

// const conn = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "root",
//     database: "ecommerce"
// })

// conn.connect((err) => {
//     if (err) {
//         console.error("Error", err)
//     } else {
//         console.log("connected")
//     }
// });

// conn.query("select * from user", (err, result) => {
//     if (err) {
//         console.error("Error", err)
//     } else {
//         console.log(result)
//     }
// })

// *------------- MySql CRUD ----------------------------
const conn = require("./mysqlConfig")
const express = require("express")

const app = express();
app.use(express.json()) //~ For recieve incomming data in JSON format

// ^ Fetch data ------------------
app.get("/", (req, resp) => {
    conn.query("select * from user", (err, result) => {
        if (err) {
            resp.send("Error", err)
        } else {
            resp.send(result)
        }
    })
})

// ^ Insert data ------------------
app.post("/", (req, resp) => {
    conn.query("insert into user set ?", req.body, (error, result, fields) => {
        if (error) error;
        resp.send(result);
    })
})

// ^ Update data -------------------
app.put("/:id", (req, resp) => {
    const data = [
        req.body.user_address,
        req.body.user_email,
        req.body.user_name,
        req.body.user_password,
        req.body.user_phone,
        req.body.user_pic,
        req.body.user_type,
        req.params.id
    ]
    console.log(data)
    conn.query(`UPDATE user SET
         user_address=?,
          user_email=?,
          user_name=?,
          user_password=?,
          user_phone=?,
          user_pic=?,
          user_type=?
          WHERE user_id=?
           `, data, (error, result, fields) => {
        if (error) throw error;
        resp.send(result);
    })
})
// ^ Delete data
app.delete("/:id", (req, resp) => {
    conn.query(`delete from user where user_id=${req.params.id}`,
        (error, result, fields) => {
            if (error) throw error;
            resp.send(result);
        }
    )
})



app.listen(5000)