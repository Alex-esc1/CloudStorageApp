const Router = require("express");
const User = require("../models/User");
const router = new Router()

router.post('/registration', (req, res) => {
    try {

        const {email, password} = req.body

        const candidate = User.findOne({email})

        if(candidate) {
            return res.status(400).json({message: `Пользователь с таким email: ${email} уже существует!`})
        }

        const user = new User ({email})

    } catch (e) {
        console.log(e)
        res.send({message: "Server error"})

    }

})