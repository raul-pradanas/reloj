var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");
const radius = 200;
context.translate(canvas.height / 2, canvas.width / 2);

setInterval(drawClock, 1000);
function drawClock() {
  drawMain(context);
  drawTime(context, radius);
}

function drawTime(ctx, radius) {
  var now = new Date();
  var hour = now.getHours();
  var minute = now.getMinutes();
  var second = now.getSeconds();

  hour = hour % 12;
  hour =
    (hour * Math.PI) / 6 +
    (minute * Math.PI) / (6 * 60) +
    (second * Math.PI) / (360 * 60);

  drawCircle(ctx, hour, radius * 0.55, "#86C88A");
  drawCircle(ctx, minute, radius * 0.25, "#ECD671");
  drawCircle(ctx, second, radius * 0.07, "white");
}

function drawCircle(ctx, time, radius, color) {
  ctx.beginPath();
  //No se si esta bien
  //ang = (time * Math.PI) / 6;
  ctx.translate(0, -radius/2 - 20);
  ctx.arc(0, 0, radius, 0, 2 * Math.PI, false);
  ctx.fillStyle = color;
  ctx.fill();
}

function drawMain(ctx) {
  ctx.beginPath();
  ctx.arc(0, 0, radius, 0, 2 * Math.PI, false);
  ctx.fillStyle = "#70B2D2";
  ctx.fill();
}
