import db from "../config/db.js";
import bcrypt from "bcrypt";

const dogSchema = new db.Schema({
  nome: {
    type: String,
    required: true,
  },
  idade: {
    type: Number,
    required: true,
  },
  raca: {
    type: String,
    required: true,
  },
});

const Dog = db.model("Dog", dogSchema);

export default Dog;
