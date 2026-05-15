let canvas = document.getElementById("canvas");
var sctx = canvas.getContext("2d");

let circles = [];
let spacing = 20;
let gridx = canvas.width / spacing;
let gridy = canvas.height / spacing;
let maxSize = 10;

function noise(radius) {
  let newsize = radius;

  if (Math.random() < radius / 10) {
    newsize--;
  } else {
    newsize++;
  }

  return Math.min(Math.max(newsize, 1), maxSize);
}

function initializeCircles() {
  for (let p = 0; p < gridx; p++) {
    circles.push([]);
    for (let s = 0; s < gridy; s++) {
      circles[p].push(Math.floor(Math.random() * 10));
    }
  }
}

function updateCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  let oldx = gridx;
  let oldy = gridy;
  gridx = canvas.width / spacing;
  gridy = canvas.height / spacing;
  if (oldx != gridx || oldy != gridy) {
    initializeCircles();
  }
}

function updateCircles() {
  updateCanvas();
  sctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let p = 0; p < gridx; p++) {
    for (let s = 0; s < gridy; s++) {
      circles[p][s] = noise(circles[p][s]);
      sctx.beginPath();
      sctx.arc(spacing * p, spacing * s, circles[p][s], 0, 2 * Math.PI);
      sctx.fillStyle = "white";
      sctx.fill();
    }
  }
}

initializeCircles();
setInterval(updateCircles);
