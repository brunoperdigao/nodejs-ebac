const mongoose = require('mongoose');


const PedidoSchema = require('./pedido');
const Pedido = mongoose.model('Pedido', PedidoSchema)

const PerfilSchema = require('./perfil');
const Perfil = mongoose.model('Perfil', PerfilSchema)

const connect = () => {
	mongoose.connect('mongodb://127.0.0.1:27017/ebacpizza');
}

module.exports = {
	connect,
	Pedido,
	Perfil,
}
