import { model, Schema } from "mongoose";

const TagSchema = new Schema(
    {
        name: {
            type: String, 
            unique: true, 
            required: true,
            minlength: 3,
            maxlength: 30
        },
        description: {
            type: String,
            required: false,
            maxlength: 200
        },
    },
    {
        timestaps: true,
    },
);

const TagModel = model ("Tag", TagSchema);

export default TagModel;