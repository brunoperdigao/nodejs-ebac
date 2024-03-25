const express = require('express');

const { Perfil } = require("../models")
// console.log(Perfil.find())

const router = express.Router();

router.get('/', (_, res) => {
	Perfil.find({primeiroNome: "Bruno"}).then((perfil) => {
		res.render('perfil/index', {
			perfil: perfil[0],
		});		
	})
});

module.exports = router;
