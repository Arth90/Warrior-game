







const canvasId = 'main-canvas'
const game = new Game(canvasId); // new Game singnifica se instancia esa clase


// el addEventListener siempre tienen 2 argumentos: EL evento y EL evento que se ha producido
// el evento es cuando te subscribes a la newletter, el segundo argumento es cuando te llega el mail
window.addEventListener('keydown', (event) => game.onKeyDown(event)); 
window.addEventListener('keyup', (event) => game.onKeyUp(event)); 


game.start(); // posteriormente lo asignaré a un botón

















