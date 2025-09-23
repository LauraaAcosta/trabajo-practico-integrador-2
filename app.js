import express from "express";
import {connectDB} from "./src/config/database.js"
import "dotenv/config";
import cors from "cors";


const app = express();

dotenv.config();
app.use(cors());
app.use(express.json());


const PORT = process.env.PORT;

app.use("/",(req,res)=>{
    res.send("El servidor funciona correctamente");
});

app.listen(PORT, async () => {
    await connectDB();
    console.log(`Servidor escuchando el puerto ${PORT}`);
});