---
layout: page
title: PICS
subtitle: Projects
<!-- bigimg: https://images.vogue.it/Photovogue/0a38ac30-11d3-11eb-b581-2fe907d89330_large.jpg -->
---
<!--
<h2><a href="https://www.vogue.com/photovogue/photographers/149678 target="_blank">PHOTOVOGUE</a></h2>
  <p>Portfolio sulla piattaforma Vogue Italia</p>
  <hr>
{% for picscollection in site.picscollections %}
  <div class="picscollection">
    <h2><a href="{{ picscollection.url }}">{{ picscollection.title }}
    </a></h2>
    <p>{{ picscollection.short-description }} {{ picscollection.images[0].image_path }}</p>
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
 <div id="picscollection"></div>
 
 <script>
    var html_cmd = "";

    {% for picscollection in site.pics %}
        html_cmd+="<div class='square bg' style='background-image: url(" + "{{ picscollection.images[0].image_path }}" + ")'>";
        html_cmd+="<div class='content'>"
        html_cmd+="<div class='table'>"
        html_cmd+="<div class='table-cell'>"
        html_cmd+= "<a href='{{ picscollection.url }}' style='color:white; background-color:black'>" + "{{ picscollection.title }}" + "</a>";
        html_cmd+="</div>"
        html_cmd+="</div>"
        html_cmd+="</div>"
        html_cmd+="</div>"
//         console.log(html_cmd);
    {% endfor %}

        html_cmd+="<div class='square bg' style='background-image: url(" + "https://images.vogue.it/Photovogue/0a38ac30-11d3-11eb-b581-2fe907d89330_large.jpg" + ")'>";
        html_cmd+="<div class='content'>"
        html_cmd+="<div class='table'>"
        html_cmd+="<div class='table-cell'>"
        html_cmd+= "<a href='https://www.vogue.com/photovogue/photographers/149678' target='_blank' style='color:white; background-color:black'>" + "PORTFOLIO SULLA PIATTAFORMA VOGUE ITALIA" + "</a>";
        html_cmd+="</div>"
        html_cmd+="</div>"
        html_cmd+="</div>"
        html_cmd+="</div>"
    document.getElementById("picscollection").innerHTML=html_cmd;
</script>
</body>
