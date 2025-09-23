import { model, Schema } from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        username: {
            type: String, 
            unique: true, 
            required: true,
/*             minlength: 3,
            maxlength: 20 */
        },
        email: {
            type: String,
            unique: true,
            required: true, 
/*             match: [/^\S@\S+\.\S+$/, "El email no es válido"] -> puede no ser conveniente, se puede en E-V */
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
        },]
    },
    {
        timestaps: true,
    },
);

const UserModel = model ("User", UserSchema);

export default UserModel;