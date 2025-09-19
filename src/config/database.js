import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/integradormongo");
        console.log("Conexión exitosa a la  base de datos");
    } catch (error) {
        console.log("Error al conectar con la base de datos", error);
    }
};