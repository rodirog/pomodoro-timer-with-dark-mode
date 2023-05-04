import {
  soundOnForest,
  soundOnRain,
  soundOnCoffeeShop,
  soundOnFireplace,
  soundOffForest,
  soundOffRain,
  soundOffCoffeeShop,
  soundOffFireplace,
  buttonLightMode, 
  buttonDarkMode,
  timerDisplay,
  body,
  controlButtons } from "./elements.js"

export default function Mode() {
  function darkModeOn() {
    buttonLightMode.classList.add("hide")
    buttonDarkMode.classList.remove("hide")
    timerDisplay.classList.add("dark-mode")
    body.classList.add("dark-mode")
    controlButtons.classList.add("dark-mode")
    soundOnForest.classList.add("dark-mode")
    soundOffForest.classList.add("dark-mode")
    soundOnRain.classList.add("dark-mode")
    soundOffRain.classList.add("dark-mode")
    soundOnCoffeeShop.classList.add("dark-mode")
    soundOffCoffeeShop.classList.add("dark-mode")
    soundOnFireplace.classList.add("dark-mode")
    soundOffFireplace.classList.add("dark-mode")
  }

  function lightModeOn() {
    buttonLightMode.classList.remove("hide")
    buttonDarkMode.classList.add("hide")
    timerDisplay.classList.remove("dark-mode")
    body.classList.remove("dark-mode")
    controlButtons.classList.remove("dark-mode")
    soundOnForest.classList.remove("dark-mode")
    soundOffForest.classList.remove("dark-mode")
    soundOnRain.classList.remove("dark-mode")
    soundOffRain.classList.remove("dark-mode")
    soundOnCoffeeShop.classList.remove("dark-mode")
    soundOffCoffeeShop.classList.remove("dark-mode")
    soundOnFireplace.classList.remove("dark-mode")
    soundOffFireplace.classList.remove("dark-mode")
  }

  return{
    lightModeOn,
    darkModeOn
  }
}