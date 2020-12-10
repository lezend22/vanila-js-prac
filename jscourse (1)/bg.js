const body = document.querySelector("body");
const Image_num = 3;

function PaintImage(num) {
  const image = new Image();
  image.src = `photos/${num + 1}.jpg`;
  image.classList.add("bgimage");
  body.appendChild(image);
}

function getRandom() {
  return (number = Math.floor(Math.random() * Image_num));
}

function init() {
  const randomNumber = getRandom();
  PaintImage(randomNumber);
}

init();
