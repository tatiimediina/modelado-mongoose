# Modelado con Mongoose

### Productos y Ventas

Relación: Cada venta tiene un listado de productos, referenciados por ObjectId en el campo productos del esquema de ventas.

Justificación:
Esta relación es referenciada porque los productos pueden ser utilizados en muchas ventas diferentes. Los productos pueden actualizarse y pdría ser ineficiente embeber la información del producto en cada venta, ya que cualquier actualización implicaría modificar múltiples documentos de ventas.

### Sucursales y Ventas

Relación: Cada venta está asociada a una sucursal, referenciada por ObjectId en el campo sucursal del esquema de ventas.

Justificación:
Esta relación es referenciada porque las sucursales son entidades independientes que pueden tener muchas ventas asociadas. Las sucursales pueden cambiar información como la dirección o el teléfono sin que esto afecte la relación entre la sucursal y las ventas pasadas.

### Usuarios y Ventas

Relación: Cada venta está asociada a un empleado (usuario), referenciado por ObjectId en el campo empleado del esquema de ventas.

Justificación:
La relación entre usuarios y ventas es referenciada porque los empleados pueden realizar muchas ventas y para evitar duplicar la información del empleado en cada venta. Los datos del empleado pueden actualizarse, y la referencia asegura que los cambios se reflejen en todas las ventas sin necesidad de actualizar múltiples documentos.

### Usuarios y Sucursales

Relación: Cada sucursal tiene una lista de empleados, referenciados por el campo empleados en el esquema de sucursales.

Justificación:
Esta relación es referenciada a los usuarios con ObjectId, para evitar duplicar información sensible como la contraseña o los datos personales del usuario en cada sucursal.

### Diagrama

![Diagrama](./src/assets/img/diagrama.png)
