---
layout: page
title: Photography
subtitle: Collections
bigimg: https://goo.gl/rPDrJQ
---
<h2><a href="http://www.vogue.it/photovogue/portfolio/?id=149678" target="_blank">PHOTOVOGUE</a></h2>
  <p>Porfolio sulla piattaforma fotografica di Vogue Italia</p>
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
