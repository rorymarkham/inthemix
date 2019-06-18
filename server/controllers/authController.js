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
        console.log(userFound)
        if(!userFound[0]) return res.status(401).send('Email doesnt exist')
        const authenticated = bcrypt.compareSync(password, userFound[0].password)
        if(authenticated){
            session.user = {
                id: userFound[0].user_id,
                firstname: userFound[0].firstname,
                lastname: userFound[0].lastname,
                email: userFound[0].email
            }
            res.status(200).send(session.user)
        } else {
            return res.status(401).send('Incorrect email or password')
        }
    },

    getUserStudio: async (req, res) => {
        const db = req.app.get('db')
        const {session} = req
        if (session.user){
            const studio = await db.get_user_studio({id: session.user.id})
            return res.status(200)
            .send({
                studio
            })
        }
        return res.status(401).send('Please Login')
    },

    getUser: (req, res) => {
        const {session} = req
        if(session.user){
            return res.status(200).send(session.user)
        } else {
            return res.status(401).send('Please log in')
        }
    },

    logout: (req, res) => {
        req.session.destroy()
        res.sendStatus(200)
    },
    updateName: async (req, res) => {
        const db = req.app.get('db')
        const {firstname} = req.body
        const {user} = req.session
        await db.update_user_first({firstname, user_id: user.id})
        res.status(200).send('Updated name!')
    }
}