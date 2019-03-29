---
layout: page
title:  "FLORA"
subtitle: Fotografia - Serie
thumbnail-path: https://goo.gl/A7YR4h
short-description: this is the short description
images:
  - image_path: https://goo.gl/7JUybY
  - image_path: https://goo.gl/tXV6Uo
  - image_path: https://goo.gl/arjTKp
  - image_path: https://goo.gl/kGc82p
  - image_path: https://goo.gl/4SXEjH
  - image_path: https://goo.gl/HwqRhu
  - image_path: https://goo.gl/kmzmdF
---
<center>
{% for image in page.images %}
  <div class="collection">
	<img src="{{ image.image_path }}" alt="{{ image.title}}"/>
	<p></p>
  </div>
{% endfor %}
</center>
