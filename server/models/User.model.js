const mongoose = require('mongoose');

//Diseñamos nuestro Schema
const userSchema = mongoose.Schema(
    {
        userName: {
            type: String,
            required: true,
            trim: true,
        },
        password: {
            type: String,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            trim: true,
            unique: true,
        },
        token: {
            type: String,
        },
        tokenConfirm: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true,
    }
);

//Definir el schema
const User = mongoose.model("user", userSchema)

export default User;