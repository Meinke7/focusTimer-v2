import * as el from './elements.js'
import state from './state.js'
import { reset } from './actions.js'

export function countdown() {
  if (!state.isRunning) {
    return
  }

  let minutes = Number(el.minutes.textContent)
  let seconds = Number(el.seconds.textContent)

  seconds--

  if (seconds < 0) {
    seconds = 59
    minutes--
  }
  if (minutes < 0) {
    reset()
    endAudio.play()
    return
  }

  updateDisplay(minutes, seconds)

  setTimeout(() => countdown(), 1000)
}

export function updateDisplay(minutes, seconds) {
  minutes = minutes ?? state.minutes
  seconds = seconds ?? state.seconds

  el.minutes.textContent = String(minutes).padStart(2, "0")
  el.seconds.textContent = String(seconds).padStart(2, "0")
}


const addButton = document.getElementById("addButton");
const subtractButton = document.getElementById("subtractButton");

addButton.addEventListener("click", function () {
  
  let currentMinutes = parseInt(el.minutes.textContent);

  
  currentMinutes += 5;

  
  updateDisplay(currentMinutes, null);
});

subtractButton.addEventListener("click", function () {
  
  let currentMinutes = parseInt(el.minutes.textContent);

  
  currentMinutes = Math.max(0, currentMinutes - 5);

  
  updateDisplay(currentMinutes, null);
});