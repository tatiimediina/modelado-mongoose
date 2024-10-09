const ventasSchema = new Schema({
  empleado: {
    type: Schema.Types.ObjectId,
    ref: "Usuarios",
    required: true,
  },
  fecha: {
    type: Date,
    required: true,
  },
  total: {
    type: Number,
    required: true,
  },
  cantidad: {
    type: Number,
    required: true,
  },
  sucursal: {
    type: Schema.Types.ObjectId,
    ref: "Sucursales",
    required: true,
  },
  productos: [
    {
      type: Schema.Types.ObjectId,
      ref: "Productos",
    },
  ],
});

export const ventas = mongoose.model("Ventas", ventasSchema);
