---
layout: page
title: Photography
---
{% for photocollection in site.photocollections %}
  <div class="photocollection">
<!--     <h2><a href="{{ photocollection.url }}">{{ photocollection.title }}</a></h2> -->
    <li> <h2><a href="{{ photocollection.url }}">{{ photocollection.title }}</a></h2>
<!--        <img src="{{ photocollection.thumbnail-path }}" alt="{{ photocollection.title }}" width="200"/>-->
        <p>{{ photocollection.short-description }}</p>
    </li>
  </div>
 
{% endfor %} 
