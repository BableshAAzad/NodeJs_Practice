const express = require("express")
const dbConnection = require("./mongodb")

const app = express();
app.use(express.json()) //~ for post method

app.get("/", async (req, resp)=>{
    let response = await dbConnection()
    response = await response.find().toArray()
    resp.send(response)
})

app.post("/", async (req, resp)=>{
    let response = await dbConnection()
    response = await response.insertOne(req.body)
    resp.send(response)
})


app.listen(5000)