var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
let centerx = canvas.width / 2;
let centery = canvas.height / 2;
let canvasScaler = 0;
let maxRadius = Math.min(centerx, centery);

let timeCS = 0;
let lastTime = performance.now();

let orbitingsquares = [];

window.addEventListener("resize", () => {
  setCanvasSize();
});

function setCanvasSize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  centerx = canvas.width / 2;
  centery = canvas.height / 2;
  maxRadius = Math.min(centerx, centery);
  canvasScaler = Math.min(canvas.height, canvas.width);

  for (let p = 0; p < orbitingsquares.length; p++) {
    orbitingsquares[p].orbitx = centerx;
    orbitingsquares[p].orbity = centery;
    orbitingsquares[p].width = maxRadius / 50;
    orbitingsquares[p].height = maxRadius / 50;
  }
}

function animate() {
  //Animation Loop
  clearFrame();
  incrementTime();

  orbitingsquares.forEach((square) => {
    square.update();
    square.draw();
  });

  requestAnimationFrame(animate);
}

function clearFrame() {
  //Clears screen to black
  drawRect(0, 0, canvas.width, canvas.height);
}

function drawRect(x, y, width, height, color = "rgba(0, 0, 0, 1)") {
  //Draws a black rectangle unless otherwise specified.
  ctx.fillStyle = color;
  ctx.fillRect(x, y, width, height);
}

function drawLine(x1, y1, x2, y2, color = "white") {
  //Draws a white line unless otherwise specified
  ctx.strokeStyle = color;
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
}

function incrementTime() {
  //Increments the time CS in CentiSeconds
  const currentTime = performance.now();
  const deltaTime = (currentTime - lastTime) / 10;
  lastTime = currentTime;

  timeCS += deltaTime;
}

class OrbitingSquare {
  constructor(
    orbitx,
    orbity,
    width,
    height,
    radiusPercent,
    color,
    speed,
    line = true,
  ) {
    this.xpos = 0;
    this.ypos = 0;
    this.orbitx = orbitx;
    this.orbity = orbity;
    this.width = width;
    this.height = height;
    this.radiusPercent = radiusPercent;
    this.color = color;
    this.speed = speed;
    this.line = line;
  }

  update() {
    //Advances the state of squares
    this.updatePosition(timeCS);
  }

  draw() {
    //Draws squares to screen
    if (this.line) this.drawLineToSquare();
    drawRect(this.xpos, this.ypos, this.width, this.height, this.color);
  }

  updatePosition(time) {
    //Updates position
    this.xpos =
      this.orbitx +
      Math.sin((this.speed * time) / 1000) *
        (this.radiusPercent * canvasScaler);
    this.ypos =
      this.orbity +
      Math.cos((this.speed * time) / 1000) *
        (this.radiusPercent * canvasScaler);
  }

  drawLineToSquare() {
    //Draws line from orbit point to center square
    drawLine(
      this.orbitx,
      this.orbity,
      this.xpos + this.width / 2,
      this.ypos + this.height / 2,
    );
  }
}

function generateSquares() {
  //Fills the squares array with random squares.
  let numSquares = 500;
  for (let i = 0; i < numSquares; i++) {
    let radiusPercent = Math.floor(Math.random() * maxRadius) / canvasScaler;
    let color = `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)},
${Math.floor(Math.random() * 256)}, 1)`;
    let speed = Math.random() * 4 + 1;
    if (Math.random() < 0.5) {
      speed *= -1;
    }

    orbitingsquares.push(
      new OrbitingSquare(
        centerx,
        centery,
        maxRadius / 50,
        maxRadius / 50,
        radiusPercent,
        color,
        speed,
      ),
    );
  }
}

setCanvasSize();
generateSquares();
animate();
