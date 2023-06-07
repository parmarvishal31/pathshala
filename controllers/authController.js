const JWT = require("jsonwebtoken");
const { hashPassword, comperPassword } = require("../helpers/authHelper");
const { userModel } = require("../models/userModel");

const registerController = async (req, res) => {
    try {
        const { name, username, email, password, phone, address, answer } = req.body
        if (!name) return res.send({ error: 'Name is required' });
        if (!username) return res.send({ error: 'username is required' });
        if (!email) return res.send({ error: 'email is required' });
        if (!password) return res.send({ error: 'password is required' });
        if (!phone) return res.send({ error: 'phone is required' });
        if (!address) return res.send({ error: 'address is required' });
        if (!answer) return res.send({ error: 'answer is required' });

        // check user
        const existingUser = await userModel.findOne({ email })
        // check existing user 
        if (existingUser) {
            return res.status(200).send({
                success: true,
                message: "User alredy register please login"
            })
        }
        // check username
        const existingUserName = await userModel.findOne({ username })
        // check existing user 
        if (existingUserName) {
            return res.status(200).send({
                success: true,
                message: "Username alredy register "
            })
        }

        // register user
        const hashedPassword = await hashPassword(password);
        // save

        const user = await userModel({ name, username, email, password: hashedPassword, phone, address, answer, photo }).save();

        res.status(201).send({
            success: true,
            message: 'Registreation Successfully',
            user
        })

    } catch (error) {
        res.status(500).send({
            success: false,
            message: 'Error in Registeration',
            error
        })

    }
}


// login

const loginController = async (req, res) => {
    try {

        const { username, password } = req.body;
        //validation
        if (!username || !password) {
            return res.status(404).send({
                success: false,
                message: 'Invalid email or password'
            })
        }
        //check user
        const user = await userModel.findOne({ username })

        if (!user) {
            return res.status(404).send({
                success: false,
                message: 'Username not register'
            })
        }

        const match = await comperPassword(password, user.password)
        if (!match) {
            return res.status(200).send({
                success: false,
                message: 'Wrong Password'
            })
        }
        // token

        const token = await JWT.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' })
        res.status(200).send({
            success: true,
            message: "Login successfully",
            user: {
                _id: user._id,
                name: user.name,
                email: user.email,
                phone: user.phone,
                adddress: user.address,
            },
            token,
        });

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Error in Registeration',
            error
        })
    }
}

const testController = async (req, res) => {
    try {

        res.status(200).send({
            success: true,
            message: "protected "
        })

    } catch (error) {
        res.status(500).send({
            success: false,
            message: 'Error in testController',
            error
        })
    }
}
module.exports = { registerController, loginController, testController }