import {TagModel} from "../models/tag.model.js"

export const getAllTags = async (req, res) => {
    try {
        const {name, description} = req.body;
        const tags = await TagModel.find(req.params.id, {name, description}, {new: true});
        return res.status(200).json({
            ok: true, 
            msg: tags
        });
    } catch (error) {
        return res.status(500).json({
            ok: false, 
            msg: "Ocurrió un error al buscar las etiquetas"
        })
    }
};

export const getTagById = async (req, res) => {
    try {
        const tag = await TagModel.findById(req.params.id);
        return res.status(200).json({
            ok: true, 
            msg: tag
        })
    } catch (error) {
        return res.status(500).json({
            ok: false, 
            msg: "Ocurrió un error al buscar la etiqueta"
        })
    }
};

export const createTag = async (req, res) => {
    try {
        const {name, description} = req.body; 
        const newTag = await TagModel.create({
            name, 
            description
        });
        return res.status(201).json({
            ok: true, 
            msg: "La etiqueta ha sido creada exitosamente",
            data: newTag
        })
    } catch (error) {
        return res.status(500).json({
            ok: false, 
            msg: "Ocurrió un error con la creación de la etiqueta"
        });
    }
};

export const updateTag = async (req, res) => {
    try {
        const { name, description } = req.body; 
        const tag = await TagModel.findByIdAndUpdate(
            req.params.id, 
            {name, description}, 
            {new: true}
        );
        return res.status(200).json({
            ok: true, 
            msg: tag
        })
    } catch (error) {
        return res.status(500).json({
            ok: false, 
            msg: "Ocurrió un error al actualizar la etiqueta"
        })
    }
};

export const deleteTag = async (req, res) => {
    try {
        const tag = await TagModel.findByIdAndDelete(req.params.id);

        await articleModel.updateMany(
            {tags: tag._id},
            {$pull: {tags: tag._id}}
        );
        return res.status(200).json({
            ok: true, 
            msg: "La etiqueta ha sido eliminada exitosamente",
        });
    } catch (error) {
        return res.status(500).json({
            ok: false, 
            msg: "Ocurrió un error al eliminar la etiqueta"
        })
    }
};
