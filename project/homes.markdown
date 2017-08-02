---
layout: post
title:  "Homes"
bigimg: https://goo.gl/BwaT7i
images:
  - image_path: https://goo.gl/Qdh2q8
    title: Apple Pie
  - image_path: https://goo.gl/BwaT7i
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
