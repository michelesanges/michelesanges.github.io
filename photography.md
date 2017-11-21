---
layout: page
title: Photography
---
{% for photocollection in site.photocollections %}
    <div class="photocollection">
		<li> <h2><a href="{{ photocollection.url }}">{{ photocollection.title }}</a></h2>
			<p>{{ photocollection.short-description }}</p>
		</li>
    </div> 
{% endfor %} 
