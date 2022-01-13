const canvas = document.getElementById('canv');
// contexto
const ctx = canvas.getContext('2d');
// guardamos el ancho
const w = canvas.width = document.body.offsetWidth;
const h = canvas.height = document.body.offsetHeight;
// seleccionamos un color de fondo
ctx.fillStyle = '#000';
ctx.fillRect(0, 0, w, h);
// Dividimos el lienzo en 40 columnas
const cols = Math.floor(w / 20)+ 1;
/* En posición (y) indicamos que empezamos a pintar desde arriba
cada columna empieza en 0*/
const ypos = Array(cols).fill(0);
// creamos función matrix y que se ejecute cada 50ms
function matrix(){
    // color negro casi transparente
    ctx.fillStyle = '#0001';
    ctx.fillRect(0, 0, w, h);
    // color verde y fuente
    ctx.fillStyle = '#0f0';
    ctx.font = '15pt monospace';
    // por cada posicion y de cada columna dame la posicion y un indice
    ypos.forEach((y, ind) => {
        // calcula un caracter al azar
        const text = String.fromCharCode(Math.random() * 128);
        // donde poner el texto
        const x = ind * 20;
        // renderizar los caracteres
        ctx.fillText(text, x, y);
        // si supera los 100px de alto, restablece aleatoriamente el final de la columna
        if (y > 100 + Math.random() * 10000) ypos[ind] = 0;
        // de lo contrario, simplemente mueva la coordenada y de la columna 20px hacia abajo
        else ypos[ind] = y + 20;
    });
}
// que se ejecute cada 50 ms
setInterval(matrix, 100);

