// gif-controls.js
document.addEventListener("keyup", function(event) {
    var video = document.getElementById("gif-video");
    if (event.keyCode === 32) { // Spacebar keycode is 32
      if (video.paused) {
        video.play();
      } else {
        video.pause();
      }
    }
  });