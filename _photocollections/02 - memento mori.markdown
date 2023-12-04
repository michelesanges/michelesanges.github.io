---
layout: page
title:  "MEMENTO MORI"
subtitle: Photography - Projects
thumbnail-path: https://cutt.ly/uwPdYu3E
short-description: this is the short description
images:
  - image_path: https://cutt.ly/uwPdYu3E
  - image_path: https://cutt.ly/TwPdYLX2
---
<center>
{% for image in page.images %}
  <div class="collection">
	<img src="{{ image.image_path }}" alt="{{ image.title}}"/>
	<p></p>
  </div>
{% endfor %}
</center>
