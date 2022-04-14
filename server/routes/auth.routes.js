const Router = require("express");
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const {check, validationResult} = require("express-validator")
const router = new Router()

router.post('/registration', 
    [
        check('email', "Некорректный email").isEmail(),
        check('password', "Пароль должен быть больше 3-х символов и не более 12-ти").isLength({min:3, max:12})
    ],
    async (req, res) => {
    try {
        const errors = validationResult(req)
        if(!errors.isEmpty()) {
            return res.status(400).json({message: "Неверный запрос", errors})
        }

        const {email, password} = req.body

        const candidate = User.findOne({email})

        if(candidate) {
            return res.status(400).json({message: `Пользователь с таким email: ${email} уже существует!`})
        }

        const hashPassword = await bcrypt.hash(password, 15)
        const user = new User ({email, password: hashPassword})
        await user.save()
        return res.json({message: "Был создан пользователь"})

    } catch (e) {
        console.log(e)
        res.send({message: "Server error"})

    }

})

module.exports = router