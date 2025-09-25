import { model, Schema } from "mongoose";

const UserSchema = new Schema(
    {
        username: {
            type: String, 
            unique: true, 
            required: true,
        },
        email: {
            type: String,
            unique: true,
            required: true, 
        },
        password: {
            type: String, 
        }, 
        role: {
            type: String, 
            enum: ["user", "admin"],
            default: "user",
        },
        profile: [{
            firstname: {
                type: String,
                minlength: 2, 
                maxlength: 50,
            },
            lastname:{
                type: String, 
                minlength: 2, 
                maxlength: 50,
            },
        },],
        deletedAt: {
            type: Date, 
            default: null,
        }
    },
    {
        timestaps: true,
    },
);

const UserModel = model ("User", UserSchema);

export default UserModel;