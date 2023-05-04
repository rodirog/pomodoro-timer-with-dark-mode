import Timer from "./timer.js"
import Controls from "./controls.js"
import Events from "./events.js"
import Sound from "./sound.js"
import Cards from "./cards.js"
import Mode from "./mode.js"
import {
  minutesDisplay,
  secondsDisplay,
  buttonPlay,
  buttonPause
} from "./elements.js"

const sound = Sound()

const cards = Cards()

const mode = Mode()

const controls = Controls({
  buttonPlay,
  buttonPause
})

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.reset,
  timeEndSound: sound.timeEnd
})

Events({
  timer,
  controls,
  sound,
  cards,
  mode
})


