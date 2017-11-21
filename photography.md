---
layout: page
title: Photo
---
{% for cookie in site.photocollections %}
  <div class="cookie">
    <h2><a href="{{ cookie.url }}">{{ cookie.title }}</a></h2>
  </div>
{% endfor %} 
