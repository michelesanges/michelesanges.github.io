---
layout: post
title:  "Stream"
images:
  - image_path: https://goo.gl/UVSM6m
<!--    title: Apple Pie-->
  - image_path: https://goo.gl/pnc4Zt
<!--     title: Birthday Cake -->
  - image_path: https://goo.gl/rQr7fr
  - image_path: https://goo.gl/GLHxPx
  - image_path: https://goo.gl/J2rbPs
  - image_path: https://goo.gl/tYB2Q7
  - image_path: https://goo.gl/mcmRAa
---
<center>
<ul class="photo-gallery">
  {% for image in page.images %}
    <img src="{{ image.image_path }}" alt="{{ image.title}}"/>
<!--    <p>-->
  {% endfor %}
</ul>
</center>
