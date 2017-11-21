---
layout: page
title: Photography
---
{% for photocollection in site.photocollections %}
<!--  <div class="photocollection">
    <h2><a href="{{ photocollection.url }}">{{ photocollection.title }}</a></h2>
  </div>-->
 
    <li>
        <img src="{{ photocollection.thumbnail-path }}" alt="{{ photocollection.title }}"/>
        <a href="{{ photocollection.url }}">{{ photocollection.title }}</a>
        <p>{{ photocollection.short-description }}</p>
    </li>
{% endfor %} 
