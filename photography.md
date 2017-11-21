---
layout: page
title: Photography
---
    <ul>
{% for photocollection in site.photocollections %}
  <div class="photocollection">
<!--     <h2><a href="{{ photocollection.url }}">{{ photocollection.title }}</a></h2> -->

    <li> <h2><a href="{{ photocollection.url }}">{{ photocollection.title }}</a></h2>
        <p>{{ photocollection.short-description }}</p>
    </li>
  </div>
 
{% endfor %} 
    </ul>
