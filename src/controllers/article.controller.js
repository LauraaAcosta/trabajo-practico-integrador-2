import { ArticleModel } from "../models/article.model.js";

export const getAllArticles = async (req, res) => {
    try {
        const articles = await ArticleModel.find();
        res.status(200).json({
            ok: true,
            data: articles
        })
    } catch (error) {
        return res.status(500).json({
            ok: false, 
            msg: "Ocurrió un error al obtener los artículos"
        })
    }
};

export const getArticleById = async (req, res) => {
    const {id} =req.params;
    try {
        const article = await ArticleModel.findById(id);
        res.status(200).json({
            ok: true,
            data: article
        })
    } catch (error) {
        return res.status(500).json({
            ok: false, 
            msg: "Ocurrió un error al buscar el articulo"
        })
    }
};

export const createArticle = async (req, res) => {
    const {title, content, excerpt, status, aythor, tags} = req.body;
    try {
        const newArticle = await ArticleModel.create({
            title, 
            excerpt,
            content, 
            status,
            author, 
            tags
        })
        res.status(200).json({
            ok: true,
            msg: "El articulo se ha creado correctamente",
            data: newArticle
        })
    } catch (error) {
        return res.status(500).json({
            ok: false, 
            msg: "Ocurrió un error con la creación del articulo"
        })
    }
};

export const updateArticle = async (req, res) => {
    const {id} = req.params;
    const data = req.body;
    try {
        const updatedArticle = await ArticleModel.findByIdAndUpdate(
            id, 
            data, 
            {new: true}
        )
        res.status(200).json({
            ok: true,
            msg: "El articulo se ha actuaizado exitosamente",
            data: updatedArticle,
        })
    } catch (error) {
        return res.status(500).json({
            ok: false, 
            msg: "Ocurrió un error al actualizar el artículo",
        })
    }
};

export const deleteArticle = async (req, res) => {
    const {id} = req.params; 
    try {
        await ArticleModel.findByIdAndDelete(id);
        res.status(200).json({
            ok: true,
            msg: "El artículo se ha eliminado exitosamente"
        })
    } catch (error) {
        return res.status(500).json({
            ok: false, 
            msg: "Ocurrió un error al eliminar el articulo"
        })
    }
};