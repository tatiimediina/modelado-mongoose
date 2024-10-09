import { Schema } from "mongoose";

const productoSchema = new Schema({
  nombre: {
    type: String,
    required: true,
  },
  precio: {
    type: Number,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
  },
  descripcion: {
    type: String,
    required: true,
  },
});

export const productos = mongoose.model("Productos", productoSchema);
