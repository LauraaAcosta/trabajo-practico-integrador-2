import express from "express";
import {connectDB} from "./src/config/database.js"
import "dotenv/config";


const app = express();
const PORT = process.env.PORT;


app.listen(PORT, async () => {
    await connectDB();
    console.log(`Servidor escuchando el puerto ${PORT}`);
});