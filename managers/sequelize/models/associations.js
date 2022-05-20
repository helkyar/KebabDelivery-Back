
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
Administrador.belongsTo(User, {foreignKey:'id'});
Repartidor.belongsTo(User, {foreignKey:'id'}); 
Client.belongsTo(User, {foreignKey:'id'});

// Relaciones Pedidos > Cliente y Repartidor

Pedido.hasOne(Client, {foreignKey: 'userid'}) 
Client.belongsTo(Pedido)
Repartidor.hasOne(Client, {foreignKey: 'userid'})
Client.belongsTo(Repartidor)

