import e from "express";
import "dotenv/config";
import user_router from "./routes/user-route.js";
import dog_router from "./routes/dog-route.js";

const app = e();

app.use(e.json());

app.use("/user", user_router);
app.use("/dog", dog_router);

const porta = 5000;
app.listen(porta, () => {
    console.log("Server is running.. ");
})