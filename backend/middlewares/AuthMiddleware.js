const User = require('../model/UserModel');
const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports.userVerification =  (req,res,next) => {
    const cookie = req.cookies.token;
    if(!cookie){
        return res.json({status:false});
    }
    jwt.verify(cookie,process.env.TOKEN_KEY, async (err,data) => {
        if(err){
            return res.json({status:false});
        }else{
            const user = await User.findById(data.id);
            if(user){
                req.user = user;
                return res.json({status : true,user:user.username});
            }
            else return res.json({status:false});
        }
    })
}