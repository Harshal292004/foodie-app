const path = require('path')
const express = require('express')
const app = express()
const port = 5000
//used to establish connection with data base 
const db= require('./config/mongoose-connection')
const cookieParser = require('cookie-parser');
const expressSession=require('express-session')



const usersRouter=require('./routes/usersRouter')
const productRouter= require('./routes/productRouter')

require('dotenv').config()

const allowedOrigins= ['http://localhost:5173','https://localhost:3000']
app.use((req,res,next)=>{
  const origin= req.headers.origin
  if(allowedOrigins.includes(origin)){  
    res.setHeader("Access-Control-Allow-Origin",origin)
  }
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  )
  next()
})

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(cookieParser());

app.use(
  expressSession(
      {
        //saved uninitialized means ki agar koyi hai jo logged in nahi hai uska session mat handle karo 
        resave:false,
        //resave is for dont redo the sessions
        saveUninitialized:false,
        secret:process.env.EXPRESS_SESSION_SECRET
      }
    )
)

//routes middle ware 
app.use('/users',usersRouter)
app.use('/products',productRouter)

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})




