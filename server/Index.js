require('dotenv').config()
const express = require('express')
const session = require('express-session')
const massive = require('massive')
const auth_ctrl = require('./controllers/authController')

const app = express()

const {SERVER_PORT, SESSION_SECRET, CONNECTION_STRING} = process.env

app.use(express.json())
app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60
    }
}))

massive(CONNECTION_STRING).then((database) => {
    app.set('db', database)
    console.log('🔥 database is fired up🔥')
    app.listen(SERVER_PORT, () => console.log(`theres a 🐍 in my 👢 on ${SERVER_PORT}`))
})

app.post('/auth/register', auth_ctrl.register)
app.post('/auth/login', auth_ctrl.login)
app.get('/auth/logout', auth_ctrl.logout)
