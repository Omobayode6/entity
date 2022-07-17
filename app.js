require("dotenv").config()

const express = require ("express");

const mongoose = require ("mongoose")

//creating an instance of express and mongoose
const app = express();

mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection
db.on("error", (error) =>console.error(error))
db.once("open", () => console.log("connected to Database"))

//use a middleware
app.use(express.json())

const usersRouter = require("./Server")
app.use("/Server", usersRouter)

app.listen(3000, () => console.log("Server Started"))