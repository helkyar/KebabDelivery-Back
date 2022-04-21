//Relaciones User > admin, repartidor y cliente

const Administrador = require("./administradorModel");
const Client = require("./clientModel");
const EstadoPedido = require("./estadopedidoModel");
const Pedido = require("./pedidoModel");
const Repartidor = require("./repartidorModel");
const Rol = require("./rolModel");
const User = require("./userModel");

//Relaciones User > admin, repartidor y cliente

User.hasMany(Administrador);
User.hasMany(Repartidor);
User.hasMany(Client);
Administrador.belongsTo(User, {foreignKey:id_user});
Repartidor.belongsTo(User, {foreignKey:id_user});
Client.belongsTo(User, {foreignKey:id_user});

//Relaciones Roles > rol admin, rol repartidor y rol cliente

Administrador.hasOne(Rol, {foreignKey: id_rol})
Rol.belongsTo(Administrador)
Repartidor.hasOne(Rol, {foreignKey: id_rol})
Rol.belongsTo(Repartidor)
Client.hasOne(Rol, {foreignKey: id_rol})
Rol.belongsTo(Client)


//Relaciones Pedidos > estado_pedido

Pedido.hasOne(EstadoPedido, {foreignKey: id_estado})
EstadoPedido.belongsTo(Pedido)

//Relaciones Pedidos > Cliente y Repartidor

Pedido.hasOne(Client, {foreignKey: id_client})
Client.belongsTo(Pedido)
Repartidor.hasOne(Client, {foreignKey: id_repartidor})
Client.belongsTo(Repartidor)