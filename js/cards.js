import {
  soundOnForest,
  soundOnRain,
  soundOnCoffeeShop,
  soundOnFireplace,
  soundOffForest,
  soundOffRain,
  soundOffCoffeeShop,
  soundOffFireplace
} from "./elements.js"

export default function Cards() {
  function playForest() {
    soundOffForest.classList.add("hide")
    soundOnForest.classList.remove("hide")
    soundOffForest.classList.add("remove-animation")
  }

  function playRain() {
    soundOffRain.classList.add("hide")
    soundOnRain.classList.remove("hide")
    soundOffRain.classList.add("remove-animation")
  }

  function playCoffeeShop() {
    soundOffCoffeeShop.classList.add("hide")
    soundOnCoffeeShop.classList.remove("hide")
    soundOffCoffeeShop.classList.add("remove-animation")
  }
  
  function playFireplace() {
    soundOffFireplace.classList.add("hide")
    soundOnFireplace.classList.remove("hide")
    soundOffFireplace.classList.add("remove-animation")
  }

  function reset() {
    soundOffForest.classList.remove("hide")
    soundOnForest.classList.add("hide")
    soundOffRain.classList.remove("hide")
    soundOnRain.classList.add("hide")
    soundOffCoffeeShop.classList.remove("hide")
    soundOnCoffeeShop.classList.add("hide")
    soundOffFireplace.classList.remove("hide")
    soundOnFireplace.classList.add("hide")
  }

  return {
    playForest,
    playRain,
    playCoffeeShop,
    playFireplace,
    reset
  }
}