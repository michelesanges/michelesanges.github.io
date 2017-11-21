---
layout: page
title:  "Hotel"
thumbnail-path: https://goo.gl/dDg3H3
short-description: this is the short description
images:
  - image_path: https://goo.gl/ZM8PWF
  - image_path: https://goo.gl/VP5XEi
  - image_path: https://goo.gl/YK2SBj
---
<!--<div >
 {% for image in page.images %}
    <img src="{{ image.image_path }}" alt="{{ image.title}}"/>
    <p>
  {% endfor %}
</div>-->

{% for image in page.images %}
<div class="collection">
	<img src="{{ image.image_path }}" alt="{{ image.title}}"/>
	<p>
</div>
{% endfor %}
