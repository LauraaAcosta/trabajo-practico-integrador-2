import {model, Schema} from "mongoose";

const ObjectId = Schema.Types.ObjectId; 

const ArticleSchema = new mongoose.Schema(
    {
        title: {
            type: String, 
            unique: true, 
            required: true,
            minlength: 3,
            maxlength: 200
        },
        content: {
            type: String,
            unique: true,
            required: true, 
            min: 50,
        },
        excerpt: {
            type: String, 
        }, 
        status: {
            type: String, 
            enum: ["published", "archived"],
            default: "published",
        },
        author: {
            type: ObjectId,
            ref: "User",
            minlength: 500,
            required: false,
        },
        tags: {
            type: [{
                ObjectId, 
                ref: "Tag"
            }]
        }
    },
    {
        timestaps: true,
    },
);

const ArticleModel = model ("Article", ArticleSchema);

export default ArticleModel;