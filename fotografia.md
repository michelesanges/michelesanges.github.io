---
layout: page
title: Fotografia 
subtitle: Serie
bigimg: https://goo.gl/rPDrJQ
---
<h2><a href="http://www.vogue.it/photovogue/portfolio/?id=149678" target="_blank">PHOTOVOGUE</a></h2>
  <p>Portfolio sulla piattaforma Vogue Italia</p>
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
