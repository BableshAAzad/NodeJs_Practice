const { MongoClient } = require("mongodb")
// or  const MongoClient = require("mongodb").MongoClient
const url = "mongodb://localhost:27017"
const client = new MongoClient(url)
const database = "mongodbtest"

async function dbConnection() {
    let result = await client.connect()
    let db = result.db(database)
    // let collection = db.collection("student")
    return db.collection("student")

    // let response =await collection.find({}).toArray()// for all data
    // let response =await collection.find({name : "Bablesh"}).toArray()
    // console.log(response)
}

module.exports = dbConnection