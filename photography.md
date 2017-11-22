---
layout: page
title: Photography
subtitle: Collections
bigimg: https://goo.gl/rPDrJQ
---
<h2><a href="http://www.vogue.it/photovogue/portfolio/?id=149678" target="_blank">PhotoVogue</a></h2>
  <p>PhotoVogue Album</p>
    <hr>
{% for photocollection in site.photocollections %}
  <div class="photocollection">
<!--    <img src="{{ photocollection.thumbnail-path}}" width="150"/><h2><a href="{{ photocollection.url }}">{{ photocollection.title }}</a></h2>
        <p>{{ photocollection.short-description }}</p>-->
    <h2><a href="{{ photocollection.url }}">{{ photocollection.title }}
    <img src="{{ photocollection.thumbnail-path}}" width="150"/>
    </a></h2>
        <p>{{ photocollection.short-description }}</p>
    <hr>
  </div> 
{% endfor %}
