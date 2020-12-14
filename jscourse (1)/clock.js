const clockContainer = document.querySelector(".js-clock"); //querySelector : js-clock이란 class명을 찾아줌
const clockTitle = clockContainer.querySelector("h1");

function getTime() {
  const date = new Date();
  const hour = date.getHours();
  const min = date.getMinutes();
  const seconds = date.getSeconds();
  clockTitle.innerText = `${hour < 10 ? `0${hour}` : hour}:${
    min < 10 ? `0${min}` : min
  }:${seconds < 10 ? `0${seconds}` : seconds}`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();
