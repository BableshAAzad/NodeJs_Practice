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

// !-----------------html pages in express js-----------------------
const express = require("express")
const app = express();




app.listen(5000)