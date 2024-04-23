db = connect('mongodb://localhost/ebacpizza');
console.log(db)

db.perfis.insertOne(
  {
    "nomeDoUsuario": "brunoperdigao",
    "sobrenome": "Perdigão",
    "idade": 38,
    "primeiroNome": "Bruno"
  }
)
