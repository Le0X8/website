const canvas = document.querySelector('#bg canvas');

canvas.width = window.screen.width;
canvas.height = window.screen.height;

const ctx = canvas.getContext('2d');

const gradientCanvas = document.createElement('canvas');
gradientCanvas.width = canvas.width;
gradientCanvas.height = canvas.height;
gradientCanvas.style.display = 'none';
const gradientCtx = gradientCanvas.getContext('2d');
const angle = 318 / 180 * Math.PI;
const gradient = gradientCtx.createLinearGradient(0, 0, Math.cos(angle) * canvas.width, Math.sin(angle) * canvas.height);
gradient.addColorStop(0, '#1b6da4');
gradient.addColorStop(1, '#23aeb5');
gradientCtx.fillStyle = gradient;
gradientCtx.fillRect(0, 0, canvas.width, canvas.height);
gradientCtx.willReadFrequently = true; // Chrome stuff

const getColor = (x, y) => {
  const pixel = gradientCtx.getImageData(x, y, 1, 1).data;
  return `#${pixel[0] < 16 ? '0' : '' + pixel[0].toString(16)}${pixel[0] < 16 ? '0' : '' + pixel[1].toString(16)}${pixel[0] < 16 ? '0' : '' + pixel[2].toString(16)}`;
};

const random = () => Math.floor(Math.random() * 2);

const cols = Math.floor(canvas.width / 16);
const rows = Math.floor(canvas.height / 16);

for (let i = 0; i < cols; i++) for (let j = 0; j < rows; j++) {
  if (random()) continue;
  const color = getColor(i * 16, j * 16);
  ctx.fillStyle = color;
  ctx.font = '16px Cascadia Code, monospace';
  ctx.fillText(random(), i * 16, j * 16);
};

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

setInterval(async () => {
  const x = Math.floor(Math.random() * cols);
  const y = Math.floor(Math.random() * rows);
  const color = getColor(x * 16, y * 16) + '22';
  for (let i = 0; i < 16; i++) {
    ctx.fillStyle = '#0002';
    ctx.fillRect(x * 16, y * 16, 16, 16);
    await sleep(50);
  };
  await sleep(50);
  if (random()) return;
  ctx.font = '16px Cascadia Code, monospace';
  const rnd = random();
  for (let i = 0; i < 16; i++) {
    ctx.fillStyle = color;
    ctx.fillText(rnd, x * 16, (y + 1) * 16);
    await sleep(50);
  };
}, 1);