---
layout: post
title:  "Hotel"
<!-- category: blog2 -->
<!-- image_path: https://goo.gl/dDg3H3 -->
thumbnail-path: https://goo.gl/dDg3H3
short-description: this is the short description
<!--bigimg: https://goo.gl/dDg3H3-->
images:
  - image_path: https://goo.gl/ZM8PWF
  - image_path: https://goo.gl/VP5XEi
  - image_path: https://goo.gl/YK2SBj
---
<div >
<center>
  {% for image in page.images %}
    <img src="{{ image.image_path }}" alt="{{ image.title}}"/>

<!--    <div style="background-image: url(https://goo.gl/dDg3H3);"> 
        <img src="{{ image.image_path }}" alt="{{ image.title}}"/> 
    </div> -->
    
<!--  <table style="background-image:url('image.image_path')"><tr><td></td></tr></table> -->
     <p>
  {% endfor %}
</center>
</div>

