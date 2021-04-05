

// Cuanto subimos o bajamos la temperatura 
const DELTA = 0.1;


// Clase Climatizador.
// Modifica la temperatura de una habitacion.
// Metodos:
//    enfriar
//    calentar
class Climatizador {
	
	constructor(programador) {

		this.programador = programador;
	}
	// constructor(habitacion) {

	// 	this.habitacion = habitacion;
	// }

	enfriar() {
		console.log('Enfriando.')
        this.programador.temperatura -= DELTA;
	}

	calentar() {
		console.log('Calentando.')
        this.programador.temperatura += DELTA;
	}
}

exports = module.exports = Climatizador;
