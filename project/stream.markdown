---
layout: post
title:  "Stream"
images:
  - image_path: https://goo.gl/LrpPf4
    title: Apple Pie
  - image_path: https://goo.gl/pnc4Zt
    title: Birthday Cake
---
<center>
<ul class="photo-gallery">
  {% for image in page.images %}
    <img src="{{ image.image_path }}" alt="{{ image.title}}"/>
    <p>
  {% endfor %}
</ul>
</center>
