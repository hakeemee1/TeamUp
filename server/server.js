const cors = require('cors')
const express = require('express')
const mysql = require('mysql2/promise')
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const bcrypt = require('bcrypt')

const app = express()
app.use(express.json())
app.use(cors({
  credentials: true,
  origin: ['http://localhost:8888']
}))
app.use(cookieParser())

app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: true
}))

const port = 8000
const secret = 'mysecret'

let conn = null

// function init connection mysql
const initMySQL = async () => {
  conn = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'teamup'
  })
}

/* เราจะแก้ไข code ที่อยู่ตรงกลาง */
app.post('/api/register', async (req, res) => {
  try {
  const { email, password} = req.body
  const passwordHash = await bcrypt.hash(password, 10)
  const userData ={
    email,
    password : passwordHash
  }
  
  const [results] = await conn.query('INSERT INTO users SET ?', userData)
  res.json({
    message : "Insert ok",
    results 
  })
} catch (error) {
  console.log("insert error")
  res.json ({
    message : "insert error",
    error
  })

}

})

// Hash the password
// const passwordHash = await bcrypt.hash(password, 10)
// 10 = salt (การสุ่มค่าเพื่อเพิ่มความซับซ้อนในการเข้ารหัส)
// และมันจะถูกนำมาใช้ตอน compare 

// Listen
app.listen(port, async () => {
  await initMySQL()
  console.log('Server started at port 8000')
})