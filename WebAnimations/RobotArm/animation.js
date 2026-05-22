var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

let mousex = 0;
let mousey = 0;

let timeCS = 0;
let lastTime = performance.now();

let arms = [];

class RobotArm {
  constructor(basex, basey, armSegmentLengths) {
    this.basex = basex;
    this.basey = basey;
    this.armSegments = [];
    this.joints = [];
    for (let p = 0; p < armSegmentLengths.length; p++) {
      this.armSegments.push(armSegmentLengths[p]);
      this.joints.push(0);
    }
  }

  calculateTarget(targetX, targetY) {
    const baseX = this.basex;
    const baseY = this.basey;
    const armLengths = this.armSegments;
    const numSegments = armLengths.length;

    // Total length of the robotic arm
    const totalLength = armLengths.reduce((sum, length) => sum + length, 0);

    // Vector from base to target
    const dx = targetX - baseX;
    const dy = targetY - baseY;
    const distanceToTarget = Math.sqrt(dx ** 2 + dy ** 2);

    // Check if the target is reachable
    if (distanceToTarget > totalLength) {
      // If not reachable, set to maximum reach
      const maxReachAngle = Math.atan2(dy, dx);
      this.joints = [maxReachAngle, 0, 0];
      return;
    }

    // For 3-segment arm: L1, L2, L3
    const L1 = armLengths[0];
    const L2 = armLengths[1];
    const L3 = armLengths[2];

    const L12 = L1 + L2;
    const L123 = L12 + L3;

    // Compute angles using geometric inverse kinematics
    const alpha = Math.atan2(dy, dx);
    const gamma = Math.acos(
      (distanceToTarget ** 2 - L3 ** 2 - L12 ** 2) / (2 * L12 * L3),
    );
    const theta3 = gamma;

    const beta = Math.atan2(L3 * Math.sin(gamma), L12 + L3 * Math.cos(gamma));
    const theta1 = alpha - beta;

    // Compute theta2
    const theta2 = Math.acos(
      (L12 ** 2 + L3 ** 2 - distanceToTarget ** 2) / (2 * L12 * L3),
    );

    // Assign joint angles
    this.joints = [theta1, theta2, theta3];
  }

  // Calculate the positions of the joints and end effector
  calculatePositions() {
    let jointPositions = [[this.basex, this.basey]];
    let thetaTotal = 0;

    for (let p = 0; p < this.armSegments.length; p++) {
      thetaTotal += this.joints[p];
      const segmentLength = this.armSegments[p];
      const x = jointPositions[p][0] + segmentLength * Math.cos(thetaTotal);
      const y = jointPositions[p][1] + segmentLength * Math.sin(thetaTotal);
      jointPositions.push([x, y]);
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

const arm = new RobotArm(500, 500, [50, 50, 50]);
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
    arms[p].calculateTarget(mousex, mousey);
    arms[p].draw();
  }
}

setCanvasSize();
animate();
