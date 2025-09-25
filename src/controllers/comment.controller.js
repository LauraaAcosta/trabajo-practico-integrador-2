import { CommentModel } from "../models/comment.model.js"

export const getAllComments = async (req, res) => {
    try {
        const comments = await CommentModel.find();
        res.status(200).json({
            ok: true,
            data: comments
        })
    } catch (error) {
        return res.status(500).json({
            ok: false, 
            msg: "Ocurrió un error al buscar los comentarios"
        });
    }
};

export const getCommentById = async (req, res) => {
    const { id } = req.params;
    try {
        const comment = await CommentModel.findById(id);
        res.status(200).json({
            ok: true,
            data: comment
        })
    } catch (error) {
        return res.status(500).json({
            ok: false, 
            msg: "Ocurrió un error al buscar el comentario"
        });
    }
};

export const createComment = async (req, res) => {
    const {author, content, article } = req.body;
    try {
        const newComment = await CommentModel.create({
            author, 
            content,
            article
        });
        res.status(201).json({
            ok: true,
            msg: "El comentario ha sido creado exitosamente",
            data: newComment,
        })
    } catch (error) {
        return res.status(500).json({
            ok: false, 
            msg: "Ocurrió un error al crear el comentario"
        });
    }
};

export const updateComment = async (req, res) => {
    const {id} = req.params;
    const data = req.body;
    try {
        const updatedComment = await CommentModel.findByIdAndUpdate(
            id, 
            data, 
            {new: true}
        );
        res.status(200).json({
            ok: true,
            msg: "El comentario se actualizó correctamente",
            data: updatedComment
        });
    } catch (error) {
        return res.status(500).json({
            ok: false, 
            msg: "Ocurrió un error al actualizar el comentario"
        })
    }
};

export const deleteComment = async (req, res) => {
    const {id} = req.params;
    try {
        await CommentModel.findByIdAndDelete(id);
        res.status(200).json({
            ok: true,
            msg: "El comentario se eliminó correctamente" 
        });
    } catch (error) {
        return res.status(500).json({
            ok: false, 
            msg: "Ocurrió un error añ eliminar el comentario"
        });
    }
};