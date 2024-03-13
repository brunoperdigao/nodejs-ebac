const express = require('express');

const router = express.Router();

router.get('/', (_, res) => {
	res.render('perfil/index', {nomeDoUsuario: "brunoperdigao", primeiroNome: "Bruno", sobrenome: "Perdigão", idade: "38"});
});

module.exports = router;
