var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

let mousex = 0;
let mousey = 0;

let timeCS = 0;
let lastTime = performance.now();

let arms = [];

class RobotArm {
  constructor(basex, basey, L1, L2, L3, theta1, theta2, theta3) {
    this.basex = basex;
    this.basey = basey;
    this.L1 = L1; // Length of segment 1
    this.L2 = L2; // Length of segment 2
    this.L3 = L3; // Length of segment 3
    this.theta1 = theta1; // Angle of joint 1 in radians
    this.theta2 = theta2; // Angle of joint 2 in radians
    this.theta3 = theta3; // Angle of joint 2 in radians
  }

  calculateTarget() {
    // Step 1: Calculate distance from mouse to base
    const dx = mousex - this.basex;
    const dy = mousey - this.basey;
    const targetDist = Math.sqrt(dx * dx + dy * dy);

    // Step 2: Define maximum reach (L1 + L2 + L3)
    const maxLength = this.L1 + this.L2 + this.L3;

    // Step 3: Handle cases based on mouse position
    if (targetDist < this.L1) {
      // Mouse is too close to base, arm can't reach
      this.theta1 = Math.atan2(dy, dx);
      this.theta2 = 0;
      this.theta3 = 0;
    } else if (targetDist > maxLength) {
      // Mouse is beyond maximum reach, arm can't reach
      this.theta1 = Math.atan2(dy, dx);
      this.theta2 = 0;
      this.theta3 = 0;
    } else {
      // Mouse is within reach, compute angles using inverse kinematics

      // Step 4: Calculate theta1 (angle of the first segment)
      this.theta1 = Math.atan2(dy, dx);

      // Step 5: Compute remaining distance after L1
      const remainDist = targetDist - this.L1;

      // Step 6: Compute theta2 and theta3 using Law of Cosines
      // First, solve for the angle between L2 and L3 (theta3)
      const cosC =
        (this.L2 ** 2 + this.L3 ** 2 - remainDist ** 2) /
        (2 * this.L2 * this.L3);
      const angleRadians = Math.acos(cosC);
      this.theta3 = angleRadians;

      // Step 7: Solve for theta2 using Law of Cosines again
      // Compute the distance between the end of L2 and the mouse
      const distBetweenL2EndAndMouse = Math.sqrt(
        (dx - this.L1 * Math.cos(this.theta1)) ** 2 +
          (dy - this.L1 * Math.sin(this.theta1)) ** 2,
      );

      // Compute theta2
      const cosD =
        (this.L2 ** 2 + distBetweenL2EndAndMouse ** 2 - this.L3 ** 2) /
        (2 * this.L2 * distBetweenL2EndAndMouse);
      this.theta2 = Math.acos(cosD);

      // Step 8: Adjust theta2 for orientation
      // If the mouse is to the left of the L2 segment, theta2 should be negative
      const crossProduct =
        (dx - this.L1 * Math.cos(this.theta1)) * (this.L3 * Math.sin(this.theta3)) -
        (dy - this.L1 * Math.sin(this.theta1)) * (this.L3 * Math.cos(this.theta3));
      if (crossProduct < 0) {
        this.theta2 = -this.theta2;
      }

      // Step 9: Assign computed angles
      this.theta2 = this.theta2;
      this.theta3 = this.theta3 + Math.PI;
    }
  }

  // Calculate the positions of the joints and end effector
  calculatePositions() {
    // Joint 1 position (relative to origin)
    const x1 = this.L1 * Math.cos(this.theta1) + this.basex;
    const y1 = this.L1 * Math.sin(this.theta1) + this.basey;

    // Joint 2 position (relative to joint 1)
    const x2 = x1 + this.L2 * Math.cos(this.theta1 + this.theta2);
    const y2 = y1 + this.L2 * Math.sin(this.theta1 + this.theta2);

    // End effector position (relative to joint 2)
    const x3 = x2 + this.L3 * Math.cos(this.theta1 + this.theta2 + this.theta3);
    const y3 = y2 + this.L3 * Math.sin(this.theta1 + this.theta2 + this.theta3);

    return { x1, y1, x2, y2, x3, y3 };
  }

  // Draw the robot arm using the provided functions
  draw() {
    // Get positions
    const { x1, y1, x2, y2, x3, y3 } = this.calculatePositions();

    // Draw segment 1 (from origin to joint 1)
    drawLine(this.basex, this.basey, x1, y1); // This would draw the first segment

    // Draw segment 2 (from joint 1 to joint 2)
    drawLine(x1, y1, x2, y2); // This would draw the second segment

    // Draw segment 3 (from joint 2 to end effector)
    drawLine(x2, y2, x3, y3); // This would draw the third segment

    // Draw joint 1 as a rectangle
    drawRect(x1 - 5, y1 - 5, 10, 10, "red"); // This would draw joint 1

    // Draw joint 2 as a rectangle
    drawRect(x2 - 5, y2 - 5, 10, 10, "blue"); // This would draw joint 2

    // Draw end effector as a rectangle
    drawRect(x3 - 5, y3 - 5, 10, 10, "green"); // This would draw end effector

    // Note: The above drawing calls are commented out per your request.
    // To render the arm, simply remove the `//` from the drawLine and drawRect calls.
  }
}

const arm = new RobotArm(
  500,
  500,
  100,
  100,
  100,
  Math.PI / 4,
  Math.PI / 6,
  Math.PI / 6,
);
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
  //Draws a black rectangle unless otherwise specified.
  ctx.fillStyle = color;
  ctx.fillRect(x, y, width, height);
}

function drawLine(x1, y1, x2, y2) {
  //Draws a white line unless otherwise specified
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
