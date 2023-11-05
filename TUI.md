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
<script type="text/javascript" src="./libgif.js"></script>
<img src="./TUI_demo.gif" rel:animated_src="./TUI_demo.gif" rel:auto_play="1" rel:rubbable="1" />

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

