const express = require("express")
const { randomUUID } = require("crypto")
const { request } = require("http")
const app = express()
app.use(express.json())

app.listen(3333, () => {
    console.log("Servidor foi iniciado!")
});""