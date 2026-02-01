const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const User = new mongoose.Schema({
    email:{
        type:String,
        required:[true,"your email address is required"],
        unique:true
    },
    password:{
        type:String,
        required:[true,"your password is required"],
    },
    username:{
        type:String,
        required:[true,"your user is required"],
        unique:true,
    },
    phone:{
        type:Number,
        required:[true,"your phone number is required"],
        unique:true
    },
    createdAt:{
        type:Date,
        default:new Date(),
    }
});
User.pre("save", async function(){
    this.password = await bcrypt.hash(this.password,12);
    
})
module.exports = mongoose.model("User",User);