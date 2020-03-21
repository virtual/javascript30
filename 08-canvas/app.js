// https://github.com/wesbos/JavaScript30
const canvas = document.getElementById("draw");
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle = '#003f7f';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;

function draw(e) {
  if (!(isDrawing)) { return; } // stop fx
  console.log(e)
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  [lastX, lastY] = [e.offsetX, e.offsetY];
  ctx.lineTo(e.offsetX, e.offsetY); // destructuring an array
  ctx.stroke();
  hue++;
  
}
function setTool() {
  hue = 360*Math.random();
  ctx.lineWidth = 30 * Math.random();
  
}
canvas.addEventListener('mousedown',  (e) => {
 isDrawing = true;
setTool();
 [lastX, lastY] = [e.offsetX, e.offsetY];
 
});

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false );
canvas.addEventListener('mouseout', () => isDrawing = false );