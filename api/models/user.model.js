import mongoose from "mongoose";
// import defaults from "nodemon/lib/config/defaults";

const userSchema=new mongoose.Schema({
    username:{
        type: String,
        Required: true,
        unique: true,
    },
    email:{
        type: String,
        Required: true,
        unique: true,
    },
    password:{
        type: String,
        Required: true,
    },
    avatar:{
        type: String,
        default: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
    },
}, {timestamps: true});

const User = mongoose.model('User', userSchema);

export default User;