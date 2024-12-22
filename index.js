const express = require("express")

const app = express()

app.get("/",(req,res)=>{
  // 1. Get Data from Frontend


  // 2. DB Logic

  // 3. Data to Frontend
  res.send("Aws - Node & Express APIs Working")
})

app.get("/test",(req,res)=>{
  // 1. Get Data from Frontend


  // 2. DB Logic

  // 3. Data to Frontend
  res.send("APIs Working - Test Route")
})

app.listen(3000)