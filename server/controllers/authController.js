const bcrypt = require('bcryptjs')

module.exports = {
    register: async (req, res) => {
        const {firstname, lastname, email, password} = req.body
        const db = req.app.get('db')
        const {session} = req
        const userFound =  await db.check_user_email({email})
        if(userFound[0]) return res.status(409).send('I think youve been here before')
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)
        const createdUser = await db.register_user({
            firstname,
            lastname,
            email,
            password: hash
        })
        session.user = createdUser[0]
        res.status(200).send(session.user)
    },

    login: async (req, res) => {
        const {email, password} = req.body
        const db = req.app.get('db')
        const {session} = req
        const userFound = await db.check_user_email({email})
        if(!userFound[0]) return res.status(401).send('Email doesnt exist')
        const authenticated = bcrypt.compareSync(password, userFound[0].password)
        if(authenticated){
            session.user = {
                email: userFound[0].email
            }
            res.status(200).send(session.user)
        } else {
            return res.status(401).send('Incorrect email or password')
        }
    },
    logout: (req, res) => {
        req.session.destroy()
        res.sendStatus(200)
    }
}