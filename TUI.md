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



Another retry.
<script type="text/javascript" src="./libgif.js"></script>
<img src="./TUI_demo_preview.gif" rel:animated_src="./TUI_demo.gif"
 width="360" height="360" rel:auto_play="1" rel:rubbable="1" />

<script type="text/javascript">
    $$('img').each(function (img_tag) {
        if (/.*\.gif/.test(img_tag.src)) {
            var rub = new SuperGif({ gif: img_tag } );
            rub.load(function(){
                console.log('oh hey, now the gif is loaded');
            });
        }
    });
</script>

