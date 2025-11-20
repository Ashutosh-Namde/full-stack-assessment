const express = require("express")
const app = express()
const router = require("./routes/user.route")


app.use(express.json());

app.use("/user",router)


module.exports = app;