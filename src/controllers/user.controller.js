import { UserModel } from "../models/user.model.js"

export const getAllUser = async (req, res) => {
    try {
        const users = await UserModel.find();
        res.status(200).json({ 
            ok: true,
            data: users,
        });
    } catch (error) {
        return res.status(500).json({
            ok: false, 
            msg: "Ocurrió un error en el servidor",
        });
    }
};

export const getUserById = async (req, res) => {
    const {id} = req.params; 
    try {
        const user = await UserModel.findById(id);
        res.status(200).json({ 
            ok: true,
            data: user,
        });
    } catch (error) {
        return res.status(500).json({
            ok: false, 
            msg: "Ocurrió un error al buscar el usuario",
        });
    }
};

export const createUser = async (req, res) => {
    const { username, email, password, roles } = req.body;
    try { 
        const newUser = await UserModel.create({
            username, 
            email, 
            password, 
            roles
        });
        res.status(201).json({ 
            ok: true,
            msg: "El usuario ha sido creado exitosamente",
            data: newUser,
        });
    } catch (error) {
        return res.status(500).json({
            ok: false, 
            msg: "Ocurrió un error al crear el usuario",
        });
    }
};

export const updateUser = async (req, res) => {
    const {id}= req.params; 
    const data = req.body;
    try {
        const updatedUser = await UserModel.findByIdAndUpdate(
            id, 
            data,
            {new: true}
        )
        res.status(200).json({ 
            ok: true,
            msg: "El usuario se ha actualizado exitosamente",
            data: updatedUser,
        });
    } catch (error) {
        res.status(500).json({
            ok: false, 
            msg: "Ocurrió un error al actualizar el usuario",
        });
    }
};

export const deleteUser = async (req, res) => {
    const {id} = req.params; 
    try {
        await UserModel.findByIdAndUpdate(
            id, 
            {deleteAt: Date()},
            {new: true});
        res.status(200).json({ 
            ok: true,
            msg: "El usuario se ha eliminado exitosamente",
            data: deleteUser,
        });
    } catch (error) {
        return res.status(500).json({
            ok: false, 
            msg: "Ocurrió un error al eliminar el usuario",
        });
    }
};
