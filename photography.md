---
layout: page
title: Photography
subtitle: Collections
bigimg: https://goo.gl/rPDrJQ
---
<ul>
<li> <h2><a href="http://www.vogue.it/photovogue/portfolio/?id=149678" target="_blank">PhotoVogue</a></h2>
  <p>PhotoVogue Album</p>
</li>
{% for photocollection in site.photocollections %}
  <div class="photocollection">
<!--     <h2><a href="{{ photocollection.url }}">{{ photocollection.title }}</a></h2> -->

    <li> <h2><a href="{{ photocollection.url }}">{{ photocollection.title }}</a></h2>
        <p>{{ photocollection.short-description }}</p>
    </li>
  </div>
 
{% endfor %}
</ul>