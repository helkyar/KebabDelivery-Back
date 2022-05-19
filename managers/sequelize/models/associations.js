
//Relaciones User > admin, repartidor y cliente

const Administrador = require("./administradorModel");
const Client = require("./clientModel");
// const EstadoPedido = require("./estadopedidoModel");
const Pedido = require("./orderModel");
const Repartidor = require("./repartidorModel");
// const Rol = require("./rolModel");
const User = require("./userModel");

//Relaciones User > admin, repartidor y cliente

User.hasMany(Administrador);
User.hasMany(Repartidor);
User.hasMany(Client);
<<<<<<< HEAD
Administrador.belongsTo(User, {foreignKey:'id'});
Repartidor.belongsTo(User, {foreignKey:'id'});
Client.belongsTo(User, {foreignKey:'id'});
=======
Administrador.belongsTo(User, { foreignKey: id });
Repartidor.belongsTo(User, { foreignKey: id });
Client.belongsTo(User, { foreignKey: id });
>>>>>>> e9c2bc8954a29cbe876778d9617454c82c6605ea

// Relaciones Pedidos > Cliente y Repartidor

<<<<<<< HEAD
Pedido.hasOne(Client, {foreignKey: 'id_user'})
Client.belongsTo(Pedido)
Repartidor.hasOne(Client, {foreignKey: 'id_user'})
Client.belongsTo(Repartidor)
=======
Administrador.hasOne(Rol, { foreignKey: id_rol });
Rol.belongsTo(Administrador);
Repartidor.hasOne(Rol, { foreignKey: id_rol });
Rol.belongsTo(Repartidor);
Client.hasOne(Rol, { foreignKey: id_rol });
Rol.belongsTo(Client);

//Relaciones Pedidos > estado_pedido

Pedido.hasOne(EstadoPedido, { foreignKey: id_estado });
EstadoPedido.belongsTo(Pedido);

//Relaciones Pedidos > Cliente y Repartidor

Pedido.hasOne(Client, { foreignKey: userid });
Client.belongsTo(Pedido);
Repartidor.hasOne(Client, { foreignKey: userid });
Client.belongsTo(Repartidor);
>>>>>>> e9c2bc8954a29cbe876778d9617454c82c6605ea
