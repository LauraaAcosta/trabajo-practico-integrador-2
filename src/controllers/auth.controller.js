import UserModel from "../models/user.model.js";

export const register = async (req, res) => {
  try {
    const data = req.body;

    await UserModel.create(data);

    res.status(201).json({
        ok: true,
        message: "Usuario creado",
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: "Ocurrió un error de manera interna",
    });
  }