const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");
let hr = 0;
let min = 0;
let sec = 0;
let state = "reset";

start.addEventListener("click", () => {
  if (state !== "start") {
    state = "start";
    stopwatch();
  }
});

reset.addEventListener("click", () => {
  state = "reset";
  hr = 0;
  min = 0;
  sec = 0;
  millisecond = 0;
  document.getElementById("hr").innerText = "00";
  document.getElementById("min").innerText = "00";
  document.getElementById("sec").innerText = "00";
});

stop.addEventListener("click", () => {
  state = "stop";
});

stopwatch = () => {
  if (state === "start") {
    render();
    if (sec === 60) {
      min += 1;
      sec = 0;
    }
    if (min === 60) {
      hr += 1;
      min = 0;
    }
    sec += 1;
    setTimeout(stopwatch, 1000);
  }
};

render = () => {
  if (sec < 10) {
    document.getElementById("sec").innerText = "0" + sec;
  } else {
    document.getElementById("sec").innerText = "" + sec;
  }

  if (min < 10) {
    document.getElementById("min").innerText = "0" + min;
  } else {
    document.getElementById("min").innerText = "" + min;
  }

  if (hr < 10) {
    document.getElementById("hr").innerText = "0" + hr;
  } else {
    document.getElementById("hr").innerText = "" + hr;
  }
};
