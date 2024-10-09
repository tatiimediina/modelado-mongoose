import { Schema } from "mongoose";

const sucursalSchema = new Schema({
  nombre: {
    type: String,
    required: true,
  },
  telefono: {
    type: String,
    required: true,
  },
  direccion: {
    type: String,
    required: true,
  },
  empleados: [
    {
      type: Schema.Types.ObjectId,
      ref: "Usuarios",
    },
  ],
});

export const sucursales = mongoose.model("Sucursales", sucursalSchema);
