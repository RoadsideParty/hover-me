import './style.css';
const width = 80;
const height = 30;
const body = document.body;
const dom = document.createElement('div');
dom.style.width = width + 'px';
dom.style.height = height + 'px';
dom.innerHTML = 'hover me';
dom.classList.add('square');
body.appendChild(dom);

window.addEventListener('mousemove', (e) => {
  const { left, top } = dom.getBoundingClientRect();
  const x = e.clientX;
  const y = e.clientY;
  const { xPos, yPos } = getRandomPos();
  if (x < left + width / 2 && y < top + height / 2) {
    console.log('left top');
    if (left - x < width / 2 || top - y < height / 2) {
      dom.style.left = xPos + 'px';
      dom.style.top = yPos + 'px';
    }
    return;
  }
  if (x < left + width / 2 && y > top + height / 2) {
    console.log('left bottom');
    if (left - x < width / 2 || y - top < height / 2) {
      dom.style.left = xPos + 'px';
      dom.style.top = yPos + 'px';
    }
    return;
  }
  if (x > left + width / 2 && y < top + height / 2) {
    console.log('right top');
    if (x - left < width / 2 || top - y < height / 2) {
      dom.style.left = xPos + 'px';
      dom.style.top = yPos + 'px';
    }
    return;
  }
  if (x > left + width / 2 && y > top + height / 2) {
    console.log('right bottom');
    if (x - left < width / 2 || y - top < height / 2) {
      dom.style.left = xPos + 'px';
      dom.style.top = yPos + 'px';
    }
    return;
  }
});
function getRandomPos() {
  const { width: bodyWidth, height: bodyHeight } = body.getBoundingClientRect();
  const XRan = Math.random() * bodyWidth;
  const yRan = Math.random() * bodyHeight;
  const xPos = XRan > bodyWidth ? bodyWidth - width : XRan;
  const yPos = yRan > bodyHeight ? bodyHeight - height : yRan;
  return { xPos, yPos };
}
