<script setup lang="ts">
import { ref, onMounted } from "vue";

const secondsCanvas = ref(null);
const minutesCanvas = ref(null);
const hoursCanvas = ref(null);
const secondsContainer = ref(null);
let sctx;
let mctx;
let hctx;

onMounted(() => {
  const sccanv = secondsCanvas.value;
  sccanv.width = secondsContainer.value.width;
  sccanv.height = secondsContainer.value.height;
  sctx = sccanv.getContext("2d");
  console.log("sccanv height", sccanv.height);


  const mccanv = minutesCanvas.value;
  mctx = mccanv.getContext("2d");

  const hccanv = hoursCanvas.value;
  hctx = hccanv.getContext("2d");

  draw();
});

/*This is raw awesomeness ;) nice job!*/
function draw() {
  //attempt at getting the time
  var date = new Date();
  var seconds = (Math.PI / 30) * date.getSeconds();
  var minutes = (Math.PI / 30) * date.getMinutes() + seconds / 60;
  var hour = (Math.PI / 6) * date.getHours() + minutes / 12;

  //draws inner circle
  let secondsradius = Math.min(
    secondsCanvas.value.width / 2,
    secondsCanvas.value.height / 2,
  );
  secondsCanvas.value.width = secondsradius*2;
  secondsCanvas.value.height = secondsradius*2;
  sctx.font = "12px Courier New";
  sctx.beginPath();
  sctx.arc(secondsradius, secondsradius, secondsradius - 1, 0, 2 * Math.PI);
  sctx.stroke();
  initSeconds();

  //draws middle circle
  let minutesradius = Math.min(
    minutesCanvas.value.width / 2,
    minutesCanvas.value.height / 2,
  );
  minutesCanvas.value.width = minutesradius*2;
  minutesCanvas.value.height = minutesradius*2;
  mctx.font = "16px Comic Sans MS";
  mctx.beginPath();
  mctx.arc(minutesradius, minutesradius, minutesradius - 1, 0, 2 * Math.PI);
  mctx.stroke();
  initMinutes();

  //draws outer circle
  let hoursradius = Math.min(
    hoursCanvas.value.width / 2,
    hoursCanvas.value.height / 2,
  );
  hoursCanvas.value.width = hoursradius*2;
  hoursCanvas.value.height = hoursradius*2;
  hctx.font = "20px Impact";
  hctx.beginPath();
  hctx.arc(hoursradius, hoursradius, hoursradius - 1, 0, 2 * Math.PI);
  hctx.stroke();
  initHours();

  //<insert acknowledgement that 12 is less than 60 here>
  function initSeconds() {
    sctx.translate(secondsradius, secondsradius);
    sctx.rotate(-seconds);
    for (var i = 1; i <= 12; i++) {
      sctx.rotate(Math.PI / 6);
      sctx.fillText((i * 5) % 60, -5, -135);
    }
  }

  function initMinutes() {
    mctx.translate(minutesradius, minutesradius);
    mctx.rotate(-minutes);
    for (var i = 1; i <= 12; i++) {
      mctx.rotate(Math.PI / 6);
      mctx.fillText((i * 5) % 60, -7, -232);
    }
  }

  function initHours() {
    hctx.translate(hoursradius, hoursradius);
    hctx.rotate(-hour);
    for (var i = 1; i <= 12; i++) {
      hctx.rotate(Math.PI / 6);
      hctx.fillText(i, -9, -329);
    }
  }
}
</script>

<template>
  <div class="main-container">
    <h1>The Time</h1>
    <div class="seconds-container" ref="secondsContainer">
      <canvas ref="secondsCanvas" id="seconds"></canvas>
    </div>
    <div class="minutes-container" ref="minutesContainer">
      <canvas ref="minutesCanvas" id="minutes"></canvas>
    </div>
    <div class="hours-container" ref="hoursContainer">
      <canvas ref="hoursCanvas" id="hours"></canvas>
    </div>
  </div>
</template>

<style scoped>
.main-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
  background: #f0f0f0;
  height: 50vh;
  width: 50vw;
}

.hours-container {
  height: 30%;
  width: 30%;
  position: absolute;
  top: 0;
  left: 0;
}

.minutes-container {
  height: 70%;
  width: 70%;
  position: absolute;
  top: 10%;
  left: 10%;
}

.seconds-container {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 20%;
  left: 20%;
}

#hours {
  font: 20px;
  font-family: Impact, Charcoal, sans-serif;
  animation: round 43200s 0s infinite linear;
}

#minutes {
  font: 16px;
  font-family: "Comic Sans MS", cursive, sans-serif;
  animation: round 3600s 0s infinite linear;
}

#seconds {
  font: 12px;
  font-family: "Courier New", Courier, monospace;
  animation: round 60s 0s infinite linear;
}

@keyframes round {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-360deg);
  }
}
</style>
