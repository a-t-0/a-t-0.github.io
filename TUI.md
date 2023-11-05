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

First you see the original `example.py` file with incomplete function documentation for `def multiply_or_add()`. Then the TUI is called, and 2 LLM messages are inspected.

- First the delta diff of the message docstring without the `x` argument is shown.
- Next, the delta diff of the message with both function arguments is shown, and applied.

Afterwards the updated file with the applied documentation suggestion is shown.
