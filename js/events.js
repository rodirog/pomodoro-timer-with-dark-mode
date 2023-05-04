import {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonDecrease,
  buttonIncrease,
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
  volumeControlForestOn,
  volumeControlRainOn,
  volumeControlCoffeeShopOn,
  volumeControlFireplaceOn,
  volumeControlForestOff,
  volumeControlRainOff,
  volumeControlCoffeeShopOff,
  volumeControlFireplaceOff
} from "./elements.js"

export default function Events({
  timer,
  controls,
  sound,
  cards,
  mode
}) {

  buttonPlay.addEventListener("click", function() {
    timer.countdown()
    controls.play()
    sound.buttonPress()
  })

  buttonPause.addEventListener("click", function() {
    timer.hold()
    controls.reset()
    sound.buttonPress()
  })

  buttonStop.addEventListener("click", function() {
    controls.reset()
    timer.reset()
    sound.buttonPress()
  })

  buttonIncrease.addEventListener("click", function() {
    controls.reset()
    timer.increaseMinutes()
    timer.reset()
  })

  buttonDecrease.addEventListener("click", function() {
    controls.reset()
    timer.decreaseMinutes()
    timer.reset() 
  })

  soundOffForest.addEventListener("click", function(event) {
    if (event.target != volumeControlForestOff) {
      cards.reset()
      cards.playForest()
      sound.bgAudioPause()
      sound.playForestSound()
      sound.setVolume(volumeControlForestOff.value)
    }
  })

  soundOffRain.addEventListener("click", function(event) {
    if (event.target != volumeControlRainOff) {
      cards.reset()
      cards.playRain()
      sound.bgAudioPause()
      sound.playRainSound()
      sound.setVolume(volumeControlRainOff.value)
    }
  })

  soundOffCoffeeShop.addEventListener("click", function(event) {
    if (event.target != volumeControlCoffeeShopOff) {
    cards.reset()
    cards.playCoffeeShop()
    sound.bgAudioPause()
    sound.playCoffeeShopSound()
    sound.setVolume(volumeControlCoffeeShopOff.value)
    }
  })

  soundOffFireplace.addEventListener("click", function(event) {
    if (event.target != volumeControlFireplaceOff) {
      cards.reset()
      cards.playFireplace()
      sound.bgAudioPause()
      sound.playFireplaceSound()
      sound.setVolume(volumeControlFireplaceOff.value)
  }
  })

  soundOnForest.addEventListener("click", function(event) {
    if (event.target != volumeControlForestOn) {
      cards.reset()
      sound.bgAudioPause()}
  })

  soundOnRain.addEventListener("click", function(event) {
    if (event.target != volumeControlRainOn) {
      cards.reset()
      sound.bgAudioPause()}
  })

  soundOnCoffeeShop.addEventListener("click", function(event) {
    if (event.target != volumeControlCoffeeShopOn) {
      cards.reset()
      sound.bgAudioPause()}
  })

  soundOnFireplace.addEventListener("click", function(event) {
    if (event.target != volumeControlFireplaceOn) {
      cards.reset()
      sound.bgAudioPause()}
  })

  buttonLightMode.addEventListener("click", function() {
    mode.darkModeOn()
  })

  buttonDarkMode.addEventListener("click", function() {
    mode.lightModeOn()
  })

  volumeControlForestOn.onchange = function() { 
    sound.setVolume(volumeControlForestOn.value) 
    volumeControlForestOff.value = volumeControlForestOn.value
  }

  volumeControlForestOff.oninput = function() { 
    volumeControlForestOn.value = volumeControlForestOff.value
  }

  volumeControlRainOn.onchange = function() { 
    sound.setVolume(volumeControlRainOn.value) 
    volumeControlRainOff.value = volumeControlRainOn.value
  }

  volumeControlRainOff.oninput = function() { 
    volumeControlRainOn.value = volumeControlRainOff.value
  }

  volumeControlCoffeeShopOn.onchange = function() { 
    sound.setVolume(volumeControlCoffeeShopOn.value) 
    volumeControlCoffeeShopOff.value = volumeControlCoffeeShopOn.value
  }

  volumeControlCoffeeShopOff.oninput = function() { 
    volumeControlCoffeeShopOn.value = volumeControlCoffeeShopOff.value
  }

  volumeControlFireplaceOn.onchange = function() { 
    sound.setVolume(volumeControlFireplaceOn.value) 
    volumeControlFireplaceOff.value = volumeControlFireplaceOn.value
  }

  volumeControlFireplaceOff.oninput = function() { 
    volumeControlFireplaceOn.value = volumeControlFireplaceOff.value
  }
}