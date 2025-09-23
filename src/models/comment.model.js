import { model, Schema } from "mongoose";

const ObjectId = Schema.Types.ObjectId;

const TagSchema = new mongoose.Schema(
    {
        content: {
            type: String, 
            unique: true, 
            required: true,
            minlength: 5,
            maxlength: 500
        },
        author: {
            type: ObjectId,
            ref: "User",
        },
        article: {
            type: ObjectId,
            ref: "Article"
        },
    },
    {
        timestaps: true,
    },
);

const TagModel = model ("Tag", TagSchema);

export default TagModel;