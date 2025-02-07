---
layout: page
title: DRAWINGS
subtitle: Projects
<!-- bigimg: https://images.vogue.it/Photovogue/0a38ac30-11d3-11eb-b581-2fe907d89330_large.jpg -->
---
<!--
<h2><a href="https://www.vogue.com/photovogue/photographers/149678 target="_blank">PHOTOVOGUE</a></h2>
  <p>Portfolio sulla piattaforma Vogue Italia</p>
  <hr>
{% for photocollection in site.photocollections %}
  <div class="photocollection">
    <h2><a href="{{ photocollection.url }}">{{ photocollection.title }}
    </a></h2>
    <p>{{ photocollection.short-description }} {{ photocollection.images[0].image_path }}</p>
    <hr>
  </div> 
{% endfor %}
-->
<head>
<meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0, width=device-width, user-scalable=no">
<!--
<style>
a:link {
  color: white;
  background-color: black;
  text-decoration: none;
}
a:visited {
  color: white;
  background-color: black;
  text-decoration: none;
}
a:hover {
  color: white;
  background-color: black;
  text-decoration: none;
}
a:active {
  color: white;
  background-color: black;
  text-decoration: none;
}
</style>
-->

</head>

<body>
 <div id="photocollection"></div>
 
 <script>
   var html_cmd = "";

    {% for photocollection in site.drawings %}
        html_cmd+="<div class='square bg' style='background-image: url(" + "{{ photocollection.images[0].image_path }}" + ")'>";
        html_cmd+="<div class='content'>"
        html_cmd+="<div class='table'>"
        html_cmd+="<div class='table-cell'>"
        html_cmd+= "<a href='{{ photocollection.url }}' style='color:white; background-color:black'>" + "{{ photocollection.title }}" + "</a>";
        html_cmd+="</div>"
        html_cmd+="</div>"
        html_cmd+="</div>"
        html_cmd+="</div>"
//         console.log(html_cmd);
    {% endfor %}

    document.getElementById("photocollection").innerHTML=html_cmd;
</script>
</body>
