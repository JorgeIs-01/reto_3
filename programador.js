const EventEmitter = require('events');
var readline = require('readline');

class programador {
	
	constructor() {

       // Temperatura actual de la habitacion:

        var temp = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
            terminal: false
          });
        
       
          temp.question('Que temperatura quieres que haya??',(respuesta)=>{
              console.log(respuesta)
          })
        // Document.write('la temmperatura es', temp,"<br>" )
		this.temperatura = temp;

		// Cada 10 segundos sube o baja aleatoriamente la temperatura 
		// hasta +/- un grado:
		setInterval(() => {
			this.temperatura += Math.random() * 2 - 1,
			console.log(`Cambio de temperatura a ${this.temperatura.toFixed(1)}ºC`);
		}, 10000);
	}
}

exports = module.exports = programador;
