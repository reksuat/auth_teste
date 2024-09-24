import db from "../config/db.js";
import bcrypt from "bcrypt";

const userSchema = new db.Schema({
  nome: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minLength: 5,
  },
  confirmar_password: {
    type: String,
    required: true,
    minLength: 5,
  },
  tipo: {
    type: String,
    enum: ["ADM", "USU"],
    required: true,
    default: "USU",
  },
});

userSchema.pre("save", async function (next) {
  if (this.password !== this.confirmar_password) {
    console.log("Senhas diferentes");
    // Dentro do hook o res nao pode ser usado, então lança um erro em vez de usar res
    const error = new Error("As senhas não coincidem.");
    error.msg = "As senhas não coincidem.";
    //aqui passa o erro p o prox middleware
    return next(error);
  }

  // Monta o hash criptografado
  this.password = await bcrypt.hash(this.password, 10);

  // Remove confirmar_password antes de salvar no banco de dados
  this.confirmar_password = undefined;

  next();
});

const User = db.model("User", userSchema);

export default User;
