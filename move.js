const canvas = document.getElementById("canvas");

const ctx = canvas.getContext("2d");

let rectX = 50; // Initial x-coordinate of the rectangle
let rectY = 50; // Initial y-coordinate of the rectangle
const rectWidth = 40;
const rectHeight = 10;
let rectSpeedX = 2; // Speed of the rectangle movement
let rectSpeedY = 1;

let circleX = canvas.width / 2; // Initial x-coordinate of the circle
let circleY = canvas.height / 2; // Initial y-coordinate of the circle
const circleRadius = 10;
let circleSpeedX = -1; // Speed of the circle movement
let circleSpeedY = -2;

function drawRectangle() {
  ctx.fillStyle = "red";
  ctx.fillRect(rectX, rectY, rectWidth, rectHeight);
}

function drawCircle() {
  ctx.fillStyle = "blue";
  ctx.beginPath();
  ctx.arc(circleX, circleY, circleRadius, 0, 2 * Math.PI);
  ctx.fill();
}

function moveRectangle() {
  rectX += rectSpeedX;
  rectY += rectSpeedY;

  if (rectX + rectWidth > canvas.width || rectX < 0) {
    rectSpeedX = -rectSpeedX; // Reverse the direction if the rectangle reaches the canvas boundary
  }

  if (rectY + rectHeight > canvas.height || rectY < 0) {
    rectSpeedY = -rectSpeedY; // Reverse the direction if the rectangle reaches the canvas boundary
  }
}

function moveCircle() {
  circleX += circleSpeedX;
  circleY += circleSpeedY;

  if (circleX + circleRadius > canvas.width || circleX - circleRadius < 0) {
    circleSpeedX = -circleSpeedX; // Reverse the direction if the circle reaches the canvas boundary
  }

  if (circleY + circleRadius > canvas.height || circleY - circleRadius < 0) {
    circleSpeedY = -circleSpeedY; // Reverse the direction if the circle reaches the canvas boundary
  }
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
  moveRectangle();
  moveCircle();
  drawRectangle();
  drawCircle();
}

setInterval(draw, 10); // Call the draw function repeatedly every 10 milliseconds
