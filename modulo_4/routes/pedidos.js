const express = require('express');

const { Pedido } = require("../models")

const router = express.Router();

router.get('/', (_, res) => {
	Pedido.find({}).then((pedidos) => {
		res.render('pedidos/index', {
			nomeDoUsuario: "João",
			pedidos: pedidos,
		});
	});
});

module.exports = router;
