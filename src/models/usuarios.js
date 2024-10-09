import { Schema } from "mongoose";
const usuarioSchema = new Schema({
  nombre: {
    type: String,
    required: true,
  },
  apellido: {
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
  },
  rol: {
    type: String,
    required: true,
    enum: ["empleado", "gerente", "usuario"],
    default: "usuario",
  },
});

export const usuarios = mongoose.model("Usuarios", usuarioSchema);
