const express = require('express');

const router = express.Router();

router.get('/', (_req, res) => {
  res.send('Olá mundo!')
})

module.exports = router;
