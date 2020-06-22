---
layout: page
title: Cicloturismo
subtitle: Look mum, no hands!
bigimg: https://cutt.ly/zyTv5qx 
---
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
</style>-->
</head>

<body>
    <div id="miniature"></div>

<script type="text/javascript" src="photo_array.js">  </script>
<script type="text/javascript" src="track_array.js">  </script>

<script>
    var html_cmd = "";
    
    for (var i = track_filename.length - 2; i >=0 ; i--)
    {   
        html_cmd+="<div class='square bg' style='background-image: url(" + image_array[i][0] + ")'>"
        html_cmd+="<div class='content'>"
        html_cmd+="<div class='table'>"
        html_cmd+="<div class='table-cell'>"
        html_cmd+= "<a href='./tracks.html?map_index=" + i + "' style='color:white; background-color:black'>" + track_filename[i][0][1] + "</a>";
        html_cmd+="</div>"
        html_cmd+="</div>"
        html_cmd+="</div>"
        html_cmd+="</div>"
    }
    
    document.getElementById("miniature").innerHTML=html_cmd;
</script>
</body>
 
    

<!-- END OF LAYOUT, following juts for the demo -->
