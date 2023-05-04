
const forestSound = new Audio("assets/sounds/Forest.wav")
const rainSound = new Audio("assets/sounds/Rain.wav")
const coffeeShopSound = new Audio("assets/sounds/Coffee-shop.wav")
const fireplaceSound = new Audio("assets/sounds/Fireplace.wav")
const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")

forestSound.loop = true
rainSound.loop = true
coffeeShopSound.loop = true
fireplaceSound.loop = true

let bgAudio

export default function Sound(){

  function buttonPress() {
    buttonPressAudio.play()
  }

  function timeEnd() {
    kitchenTimer.play()
  }

  function playForestSound() {
    forestSound.play()
    bgAudio = forestSound
  }

  function playRainSound() {
    rainSound.play()
    bgAudio = rainSound
  }

  function playCoffeeShopSound() {
    coffeeShopSound.play()
    bgAudio = coffeeShopSound
  }

  function playFireplaceSound() {
    fireplaceSound.play()
    bgAudio = fireplaceSound
  }

  function bgAudioPause() {
    if (bgAudio) {
    bgAudio.pause() 
    }
  }

  function setVolume(value) {
    bgAudio.volume = value / 100
  }

  return {
    buttonPress,
    timeEnd,
    playForestSound,
    playRainSound,
    playCoffeeShopSound,
    playFireplaceSound,
    bgAudioPause,
    setVolume
  }
}
