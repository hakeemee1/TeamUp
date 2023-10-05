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
  origin: ['http://localhost:5173'],
  methods: ['GET', 'POST', 'PUT', 'DELETE']
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
// register section
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

// login section
// app.post('/api/login', async (req, res) => {
//   const { email, password } = req.body

//   const [result] = await conn.query('SELECT * from users WHERE email = ?', email)
//   const user = result[0]
//   const match = await bcrypt.compare(password, user.password)
//   if (!match) {
//     return res.status(400).send({ message: 'Invalid email or password' })
//   }

//   res.send({ message: 'Login successful' })
// })






//use token if have a token, you can access all item or not have token you can't access all
app.get('/api/users', async (req, res) => {
  try {
    //ส่ง Token ผ่าน Bearer token
    const authHeader = req.headers['authorization']
    let authToken  = ''
    if(authHeader) {
       authToken = authHeader.split(' ')[1] //ต้องการเเค่ตำเเหน่งที่ 2 (index 1) จะได้เเต่ token
    }
    console.log('authToken is : ',authToken)
    //confirm token ที่ได้รับ คือของจริง
    const user = jwt.verify(authToken, secret) //secret ต้องตรงถึงจะผ่าน
    console.log('user', user.email)
    //เรามั่นใจว่า user คนจริง
    //recheck from db
    const [checkResults] = await conn.query('SELECT * from users where email = ?', user.email)
    if (!checkResults[0]) {
      throw { message: 'user not found'}
    }
    const [results] = await conn.query('SELECT * from users')
    res.json({
      users : results
    })

  } catch (error) {
    console.log('error', error)
    res.status(403).json ({
      message : "Authentiaction fail",
      error
    })
  
  }

})


// Post data to DB
app.post('api/postproject', async (req, res) => {

})

// Listen
app.listen(port, async () => {
  await initMySQL()
  console.log('Server started at port 8000')
})