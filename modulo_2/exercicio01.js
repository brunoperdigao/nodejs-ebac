const carros = [
	{
		modelo: "gol",
		ano: 1987,
		placa: "HZ0506",
	},{
		modelo: "chevete",
		ano: 1985,
		placa: "AB9921",
	},{
		modelo: "palio",
		ano: 2003,
		placa: "HIU7552",
	},{
		modelo: "hb20",
		ano: 2015,
		placa: "POT0190",
	},
]

const novoCarro = {
		modelo: "t-cross",
		ano: 2022,
		placa: "DFC3R43",
	}
 carros.push(novoCarro)

carros.sort((carro1, carro2) => {
	if (carro1.modelo > carro2.modelo) {
		return 1
	} else if (carro1.modelo < carro2.modelo) {
		return -1
	} else {
		return 0
	}
})

if (require.main === module) {
	console.log(carros);
}

module.exports = carros
