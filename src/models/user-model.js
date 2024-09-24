import db from "../config/db.js";
import bcrypt from "bcrypt";

const userSchema = new db.Schema({
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
  tipo: {
    type: String,
    enum: ["ADM", "USU"],
    required: true,
    default: "USU",
  },
});

// não precisa do next nas versões mais novas do mongoose
userSchema.pre("save", async function () {
  // if (this.password !== this.confirmar_password) {} // Da pra deixar essa validação só no front

  // Monta o hash criptografado
  this.password = await bcrypt.hash(this.password, 10);
});

// Define um método para a classe
userSchema.methods.senhaCorreta = async function (senha) {
  return await bcrypt.compare(senha, this.password);
};

const User = db.model("User", userSchema);

export default User;
