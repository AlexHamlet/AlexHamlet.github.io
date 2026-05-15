var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

let mousex = 0;
let mousey = 0;

let timeCS = 0;
let lastTime = performance.now();

let arms = [];

class RobotArm {
  constructor(basex, basey, numArmSegments) {
    this.basex = basex;
    this.basey = basey;
    this.armSegments = [];
    this.joints = [];
    for (let p = 0; p < numArmSegments; p++) {
      this.armSegments.push(50);
      this.joints.push(0);
    }
  }

  calculateTarget() {
    let thetaTotal = 0;
    let remainingLength = this.armSegments.reduce(function (x, y) {
      return x + y;
    }, 0);

    if()
  }

  // Calculate the positions of the joints and end effector
  calculatePositions() {
    let jointPositions = [[this.basex, this.basey]];
    let thetaTotal = 0;

    for (let p = 0; p < this.armSegments.length; p++) {
      thetaTotal += this.joints[p];
      jointPositions.push([
        jointPositions[p][0] + this.armSegments[p] + Math.cos(thetaTotal),
        jointPositions[p][1] + this.armSegments[p] + Math.cos(thetaTotal),
      ]);
    }

    return jointPositions;
  }

  draw() {
    // Get positions
    const drawJoints = this.calculatePositions();

    for (let p = 1; p < drawJoints.length; p++) {
      drawLine(
        drawJoints[p - 1][0],
        drawJoints[p - 1][1],
        drawJoints[p][0],
        drawJoints[p][1],
      );
      drawCircle(drawJoints[p - 1][0], drawJoints[p - 1][1], 20);
    }
  }
}

const arm = new RobotArm(500, 500, 5);
arms.push(arm);

canvas.addEventListener("mousemove", function (event) {
  const rect = canvas.getBoundingClientRect();
  mousex = event.clientX - rect.left;
  mousey = event.clientY - rect.top;
});

window.addEventListener("resize", () => {
  setCanvasSize();
});

function setCanvasSize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

function animate() {
  //Animation Loop
  clearFrame();

  drawRect(mousex, mousey, 10, 10);
  drawArms();

  requestAnimationFrame(animate);
}

function clearFrame() {
  //Clears screen to black
  drawRect(0, 0, canvas.width, canvas.height, "rgba(255, 255, 255, 1)");
}

function drawRect(x, y, width, height, color = "rgba(0, 0, 0, 1)") {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, width, height);
}

function drawCircle(x, y, radius, color = "rgba(0, 0, 0, 1)") {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(x, y, 10, 0, 2 * Math.PI);
  ctx.stroke();
}

function drawLine(x1, y1, x2, y2, color = "rgba(0, 0, 0, 1)") {
  ctx.fillStyle = color;
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

function drawArms() {
  for (let p = 0; p < arms.length; p++) {
    arms[p].calculateTarget();
    arms[p].draw();
  }
}

setCanvasSize();
animate();
