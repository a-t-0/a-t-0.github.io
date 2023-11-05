---
title: TUI
layout: template
filename: TUI.md
--- 
<html lang="en">
  <body>
    {% include nav.html %}
    </body>
</html>

# Terminal User Interface - Demo
Below is a demo of the user interface that enables developers to quickly process, filter and apply the suggestions by the LLM for an entire codebase.

![alt-text-1](TUI_demo.gif "TUI")

Additional gif with controls:

<script src="gif-controls.js"></script>

<video controls id="gif-video">
  <source src="TUI_demo.gif" type="video/gif">
  Your browser does not support the video tag.
  <script src="gif-controls.js"></script>
</video>

<script src="gif-controls.js"></script>

again
<html>
  <body>
  <video controls id="gif-video">
  <source src="TUI_demo.gif" type="video/gif">
  Your browser does not support the video tag.
  <script src="gif-controls.js"></script>
</video>
  <script>
  var video = document.getElementById("gif-video");

  document.body.addEventListener("keyup", function(event) {
    if (event.keyCode === 32) { // Spacebar keycode is 32
      if (video.paused) {
        video.play();
      } else {
        video.pause();
      }
    }
  });
</script>

  </body>
</html>