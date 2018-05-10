const canva = document.getElementById("canva");
const piValue = document.getElementById("piValue");
let loop;
var r =
  (Math.round(Math.min(window.innerHeight, window.innerWidth) / 10) - 10) *
  10 /
  2;
canva.style.width = r * 2 + "px";
piValue.style.width = r * 2 + "px";
canva.width = r * 2;
canva.style.height = r * 2 + "px";
canva.height = r * 2;
const ctx = canva.getContext("2d");
let total = 0;
let circle = 0;
draw();

function draw() {
  ctx.beginPath();
  ctx.lineWidth = 0.5;

  ctx.rect(0, 0, 2 * r, 2 * r);
  ctx.stroke();

  ctx.translate(r, r);
  ctx.beginPath();
  ctx.lineWidth = 0.5;

  ctx.ellipse(0, 0, r, r, 0, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.closePath();
}

function doLoop() {
  total = propsNumber;
  for (let x = 0; x < propsNumber; x++) if (point()) circle++;
  piValue.innerText = "Pi:" + 4 * (circle / total);
}

function start() {
  console.log("start");
  stop();
  propsNumber = parseInt(document.getElementById("propsNumber").value);
  circle = 0;
  total = 0;
  loop = doLoop();
  // setInterval(() => {
  //   total = propsNumber;
  //   let x = 0;
  //   for (x; x < propsNumber; x++) if (point()) circle++;
  //   piValue.innerText = "Pi:" + 4 * (circle / total);
  // }, 100);
}

function stop() {
  console.log("stop");

  ctx.translate(-r, -r);
  ctx.clearRect(0, 0, canva.width, canva.height);
  total = 0;
  circle = 0;
  draw();
  // clearInterval(loop);
}

function point() {
  let x = RandomRange(-r, r);
  let y = RandomRange(-r, r);
  ctx.save();
  if (inCircle(x, y)) {
    ctx.fillStyle = "rgba(0, 255, 0)";
    ctx.fillRect(x, y, 0.5, 0.5);
    ctx.restore();
    return true;
  } else {
    ctx.fillStyle = "rgba(255, 0, 0)";
    ctx.fillRect(x, y, 0.5, 0.5);
    ctx.restore();
    return false;
  }
}

function inCircle(x, y) {
  let d = x * x + y * y;
  if (d < r * r) {
    return true;
  } else {
    return false;
  }
}

function RandomRange(Min, Max) {
  return Math.random() * (Max - Min) + Min;
}
