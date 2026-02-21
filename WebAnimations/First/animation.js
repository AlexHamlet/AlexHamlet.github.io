var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let centerx = canvas.width / 2;
let centery = canvas.height / 2;

let time = 0;
let orbitingsquares = [];

function animate() {
  clearFrame();
  incrementTime();

  orbitingsquares.forEach((square) => updateOrbitingSquarePosition(square));
  orbitingsquares.forEach((square) => drawSquare(square));
  orbitingsquares.forEach((square) => drawLineToSquare(square));

  requestAnimationFrame(animate);
}

function clearFrame() {
  drawRect(0, 0, canvas.width, canvas.height);
}

function drawLineToSquare(square) {
  drawLine(
    centerx,
    centery,
    square.xpos + square.width / 2,
    square.ypos + square.height / 2,
  );
}

function drawSquare(square) {
  drawRect(square.xpos, square.ypos, square.width, square.height, square.color);
}

function drawRect(x, y, width, height, color = "rgba(0, 0, 0, 0.5)") {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, width, height);
}

function drawLine(x1, y1, x2, y2, color = "white") {
  ctx.strokeStyle = color;
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
}

function updateOrbitingSquarePosition(square) {
  square.xpos =
    centerx + Math.sin((square.speed * time) / 1000) * square.radius;
  square.ypos =
    centery + Math.cos((square.speed * time) / 1000) * square.radius;
}

function incrementTime() {
  time += 1;
}

class OrbitingSquare {
  constructor(width, height, radius, color, speed) {
    this.xpos = 0;
    this.ypos = 0;
    this.width = width;
    this.height = height;
    this.radius = radius;
    this.color = color;
    this.speed = speed;
  }
}

function generateSquares() {
  let numSquares = 500;
  let maxRadius = Math.min(centerx, centery);
  for (let i = 0; i < numSquares; i++) {
    let radius = Math.floor(Math.random() * maxRadius);
    let color = `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)},
${Math.floor(Math.random() * 256)}, 1)`;
    let speed = Math.random() * 4 + 1;
    if (Math.random() < 0.5) {
      speed *= -1;
    }

    orbitingsquares.push(
      new OrbitingSquare(
        maxRadius / 100,
        maxRadius / 100,
        radius,
        color,
        speed,
      ),
    );
  }
}

generateSquares();
animate();
