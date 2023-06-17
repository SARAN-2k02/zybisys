let [seconds, minutes, hours] = [0, 0, 0];
watchDisplay = document.getElementById("mainWatch");
let timer = null;

function watchstop() {
  seconds++;
  if (seconds == 60) seconds = 0;
  minutes++;
  if (minutes == 60) minutes = 0;
  hours++;
  let hr = hours < 10 ? "0" + hours : hours;
  let mn = minutes < 10 ? "0" + minutes : minutes;
  let sc = seconds < 10 ? "0" + seconds : seconds;
  console.log(hr, mn, sc);
  document.getElementById("mainWatch").innerHTML = hr + ":" + mn + ":" + sc;
}

function startWatch() {
  if (timer !== null) {
    clearInterval(timer);
  }
  timer = setInterval(watchstop, 2000);
}

function stopWatch() {
  clearInterval(timer);
}

function resetWatch() {
  clearInterval(timer);
  [seconds, minutes, hours] = [0, 0, 0];
  mainWatch.inneHTML = "00:00:00";
}
