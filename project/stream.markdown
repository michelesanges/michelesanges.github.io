---
layout: post
title:  "Stream"
<!--bigimg: https://goo.gl/dDg3H3-->
images:
  - image_path: https://goo.gl/dDg3H3
    title: Apple Pie
  - image_path: https://goo.gl/GLn6p8
    title: Birthday Cake 
  - image_path: https://goo.gl/CG8VgZ
  - image_path: https://goo.gl/jpSxHB
  - image_path: https://goo.gl/c6RT7k
---
<ul class="photo-gallery">
<center>
  {% for image in page.images %}
<div style="width:100%;">
    <div style="margin-left:25px;">
    <img src="{{ image.image_path }}" alt="{{ image.title}}"/>

<!--    <div style="background-image: url(https://goo.gl/dDg3H3);"> 
        <img src="{{ image.image_path }}" alt="{{ image.title}}"/> 
    </div> -->
    
<!--  <table style="background-image:url('image.image_path')"><tr><td></td></tr></table> -->
     <p>
    </div>
</div>
{% endfor %}
</center>
</ul>

