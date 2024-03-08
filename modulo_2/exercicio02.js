const carros = require("./exercicio01")

const diasDaSemana = {
	0: "Domingo",
	1: "Segunda", 
	2: "Terça", 
	3: "Quarta", 
	4: "Quinta", 
	5: "Sexta", 
	6: "Sábado", 
}

const temRodizio = (diaSemana=0, carros) => {
	if (diaSemana > 6 || diaSemana < 0) {
		return "Você digitou um dia inválido."
	}
	let resultado = []
	if (diaSemana === 1) {
		resultado = carros.filter((carro) => {
			return carro.placa.endsWith("1") || carro.placa.endsWith("2");
		})
	} else if (diaSemana == 2) {
		resultado = carros.filter((carro) => {
			return carro.placa.endsWith("3") || carro.placa.endsWith("4");
		})
	} else if (diaSemana == 3) {
		resultado = carros.filter((carro) => {
			return carro.placa.endsWith("5") || carro.placa.endsWith("6");
		})
	} else if (diaSemana == 4) {
		resultado = carros.filter((carro) => {
			return carro.placa.endsWith("7") || carro.placa.endsWith("8");
		})
	} else if (diaSemana == 5) {
		resultado = carros.filter((carro) => {
			return carro.placa.endsWith("9") || carro.placa.endsWith("0");
		})
	} else {
		return "Não tem rodízio"
	}
	if (resultado.length) {
		return resultado
	} else {
		return "Nenhum carro da lista está no rodízio para este dia."
	}
	
}

let contador = 0 
while (contador < 7) { 
	if (temRodizio(contador, carros)) {
		console.log(diasDaSemana[contador], "- os veículos de rodízio são:")
		console.log(temRodizio(contador, carros)); 
		console.log("---------------------")
		contador += 1;
	}
} 
