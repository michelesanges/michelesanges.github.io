---
layout: page
title:  "MADRE NATURA"
subtitle: Photos - Projects
thumbnail-path: https://cutt.ly/kw7I4W1
short-description: this is the short description
images:
  - image_path: https://cutt.ly/PwI5V91U
  - image_path: https://cutt.ly/3wI5BpHb
  - image_path: https://cutt.ly/twI5Bbzn
---
<center>
{% for image in page.images %}
  <div class="collection">
	<img src="{{ image.image_path }}" alt="{{ image.title}}"/>
	<p></p>
  </div>
{% endfor %}
</center>
