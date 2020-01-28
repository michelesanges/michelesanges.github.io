---
layout: page
title:  "MEETING RAFFAELE"
subtitle: Fotografia - Serie
thumbnail-path: https://cutt.ly/kw7I4W1
short-description: this is the short description
images:
  - image_path: https://cutt.ly/kw7I4W1
  - image_path: https://cutt.ly/Nw7I49b
  - image_path: https://cutt.ly/Ow7I7sl
  - image_path: https://cutt.ly/sw7I7WY
  - image_path: https://cutt.ly/nw7I70s
  - image_path: https://cutt.ly/sw7I5ag
  - image_path: https://cutt.ly/gw7I6AL
  - image_path: https://cutt.ly/Pw7I5UV
  - image_path: https://cutt.ly/xw7I6rS
  - image_path: https://cutt.ly/Hw7I68S
---
<center>
{% for image in page.images %}
  <div class="collection">
	<img src="{{ image.image_path }}" alt="{{ image.title}}"/>
	<p></p>
  </div>
{% endfor %}
</center>
