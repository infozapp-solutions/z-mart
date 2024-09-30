const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const emailjs = require('@emailjs/nodejs')
const userModel = require("../../models/userModel")
const appurls = require('../../helpers/appUrls');

async function userForgotPasswordController(req, res) {
	try {
		const { email } = req.body
		const user = await userModel.findOne({ email })
		
    if(!user) {
      return res.json({
        success: false,
        error: true,
        message: "Email not found, Please register with the given email."
      })
    }

    const token = await jwt.sign({id: user._id}, process.env.TOKEN_SECRET_KEY, { expiresIn: 60 * 60 * 8 }); // Token will expire in 8 Hours
    const data = {
      user: user,
      token: token
    };

    res.json({
			data: data,
			success: true,
			error: false,
			message: "User found Successfully!"
		})

	} catch (err) {
    console.log(err);

		res.json({
			message: err.message || err,
			error: true,
			success: false,
		})
	}
}

module.exports = userForgotPasswordController