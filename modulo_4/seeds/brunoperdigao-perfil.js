const mongoose = require("mongoose")

const { Perfil } = require("../models")

mongoose.connect('mongodb://127.0.0.1:27017/ebacpizza');

const seedPerfil = [
  {
    "nomeDoUsuario": "brunoperdigao",
    "sobrenome": "Perdigão",
    "idade": 38,
    "primeiroNome": "Bruno"
  }
];

const seedDB = async () => {
  await Perfil.deleteMany({});
  await Perfil.insertMany(seedPerfil);
};

seedDB().then(() => {
  mongoose.connection.close();
});
