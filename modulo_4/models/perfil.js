const { Schema } = require('mongoose')

const Perfil = new Schema({
	nomeDoUsuario: {
		type: String,
		required: true
	},
	primeiroNome: {
		type: String,
		required: true
	},
	sobrenome: {
		type: String,
		required: true
	},
	idade: {
		type: Number,
		required: true
	},
}, {collection: "perfis"});
	

module.exports = Perfil;

