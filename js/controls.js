export default function Controls({
  buttonPlay,
  buttonPause
}) {

  function play() {
    buttonPlay.classList.add("hide")
    buttonPause.classList.remove("hide")
  }

  function reset() {
    buttonPlay.classList.remove("hide")
    buttonPause.classList.add("hide")
  }

  return {
    play,
    reset
  }
}