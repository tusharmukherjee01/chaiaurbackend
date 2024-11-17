
require('dotenv').config()
const express = require('express')
const app = express()
// const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/tushar',(req,res) => {
    res.send("My Name is Tushar Mukherjee...")
})

app.get('/login',(req,res) => {
    res.send('<h1>Login Karo Bro..</h1>')
})

app.get('/chai' , (req,res) => {
    res.send("<h1>Mere saath chai pine chaloge kiya cuteyy ?💕🌻..</h1>")
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})