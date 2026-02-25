<script setup lang="ts">
import { ref, onMounted } from "vue";

const canvas = ref(null);
let ctx;

onMounted(() => {
  const can = canvas.value;
  ctx = can.getContext("2d");

  animate();
});

function animate() {
  clearFrame();

  requestAnimationFrame(animate);
}

function clearFrame() {
  //Clears screen to black
  drawRect(0, 0, canvas.value.width, canvas.value.height);
}

function drawRect(x, y, width, height, color = "rgba(0, 0, 0, 1)") {
  //Draws a black rectangle unless otherwise specified.
  ctx.fillStyle = color;
  ctx.fillRect(x, y, width, height);
}
</script>

<template>
  <canvas ref="canvas"></canvas>
</template>

<style scoped></style>
