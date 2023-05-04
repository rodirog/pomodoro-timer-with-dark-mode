
export default function Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls,
  timeEndSound
}) {
  let timerTimeOut
  let minutes = Number(minutesDisplay.textContent)

  function countdown() {
    timerTimeOut = setTimeout(function() {

      let minutes = Number(minutesDisplay.textContent)
      let seconds = Number(secondsDisplay.textContent)
      let isFinished = seconds == 0 && minutes == 0

      if ((seconds == 0) && (minutes > 0)) {
        seconds = 60
        minutes = minutes - 1
      }

      if (isFinished) {
        reset()
        resetControls()
        timeEndSound()
        return
      } 

      seconds = seconds - 1
      updateTimerDisplay(minutes, seconds)

      countdown()
    }, 1000)
  }

  function updateTimerDisplay(minutes, seconds) {
    minutesDisplay.textContent = String(minutes).padStart(2, "0")
    secondsDisplay.textContent = String(seconds).padStart(2, "0")
  }

  function increaseMinutes() {
    minutes = minutes + 5
  }

  function decreaseMinutes() {
    if (minutes > 5) {
      minutes = minutes - 5
    }
  }

  function hold() {
    clearTimeout(timerTimeOut)
  }

  function reset() {
    clearTimeout(timerTimeOut)
    
    updateTimerDisplay(minutes, 0)
  }

  return {
    countdown,
    hold,
    reset,
    updateTimerDisplay,
    increaseMinutes,
    decreaseMinutes
  }
}