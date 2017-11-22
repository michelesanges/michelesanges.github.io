---
layout: page
title: Photography
subtitle: Collections
bigimg: https://goo.gl/rPDrJQ
---
<h2><a href="http://www.vogue.it/photovogue/portfolio/?id=149678" target="_blank">PhotoVogue</a></h2>
  <p><i>Porfolio sulla piattaforma fotografica di Vogue Italia</i></p>
  <hr>
{% for photocollection in site.photocollections %}
  <div class="photocollection">
    <h2><a href="{{ photocollection.url }}">{{ photocollection.title }}
<!--     <img src="{{ photocollection.thumbnail-path}}" width="150"/> -->
    </a></h2>
    <p>{{ photocollection.short-description }}</p>
    <hr>
  </div> 
{% endfor %}
