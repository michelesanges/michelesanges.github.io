---
layout: page
title: Photography
---
{% for photocollection in site.photocollections %}
    <div class="photocollection">
<!-- 	<ul> -->
		<li> <h2><a href="{{ photocollection.url }}">{{ photocollection.title }}</a></h2>
			<p>{{ photocollection.short-description }}</p>
		</li>
<!-- 	</ul> -->
    </div> 
{% endfor %} 
