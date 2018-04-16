---
layout: page
title: Fotografia
subtitle: Collezioni
bigimg: https://goo.gl/rPDrJQ
---
<h2><a href="http://www.vogue.it/photovogue/portfolio/?id=149678" target="_blank">PHOTOVOGUE</a></h2>
  <p>Porfolio sulla piattaforma fotografica di Vogue Italia</p>
  <hr>
{% for photocollection in site.photocollections %}
  <div class="photocollection">
   <table>
   <tr>
   <td><img src="{{ photocollection.thumbnail-path}}" width="150"/></td>
   <td>
    <h2><a href="{{ photocollection.url }}">{{ photocollection.title }}
<!--     <img src="{{ photocollection.thumbnail-path}}" width="150"/> -->
    </a></h2>
    <p>{{ photocollection.short-description }}</p>
    <hr>
    </td>
    </table>
  </div> 
{% endfor %}
