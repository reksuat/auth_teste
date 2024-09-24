import e from "express";
import "dotenv/config";
import user_router from "./routes/user-route.js";
// import bodyParser from 'body-parser';   

const app = e();

app.use(e.json());

// // Middleware para processar JSON no corpo da requisição
// app.use(bodyParser.json()); 

app.use("/user", user_router);

app.listen(process.env.API_PORT, () => console.log("Servidor executando na porta " + process.env.API_PORT));