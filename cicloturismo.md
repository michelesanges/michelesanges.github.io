---
layout: page
title: Cicloturismo
subtitle: Look mum, no hands!
bigimg: https://cutt.ly/zyTv5qx 
---
<head>

<style>
a:link {
  color: inherit;
  background-color: transparent;
  text-decoration: none;
}
a:visited {
  color: inherit;
  background-color: transparent;
  text-decoration: none;
}
a:hover {
  color: inherit;
  background-color: transparent;
  text-decoration: underline;
}
a:active {
  color: inherit;
  background-color: transparent;
  text-decoration: underline;
}
</style>
</head>

<body>
    <div id="miniature"></div>

<script type="text/javascript" src="photo_array.js">  </script>
<script type="text/javascript" src="track_array.js">  </script>
<!--

<script>
    var html_cmd;
    
    html_cmd= "<font size='2'><table class='example-table' style='width:100%' border=0>";
    for (var i = track_filename.length - 3; i >=0 ; i--)
    {        
        if (i % 3 == 0)
        {
            html_cmd += "<tr>"
        }
    
        html_cmd += "<td align='center'>"
        if (image_array[i].length != 0 && !image_array[i][0].includes("youtu"))
        {
            html_cmd += "<a href='./tracks.html?map_index=" + i + "'><img src='" 
            html_cmd+= image_array[i][0] + "' width=250 height=auto title='" + track_filename[i][0][1] + "'></a>"
            html_cmd += "<figcaption><b>" + track_filename[i][0][1] + "</b></figcaption>";
        }
        else
        {
            html_cmd += "<a href='./tracks.html?map_index=" + i + "'><img src='https://michelesanges.github.io/img/bike_start.png'" 
            html_cmd +=  " width=200 height=auto title='" + track_filename[i][0][1] + "'></a>"
            html_cmd += "<figcaption><b>" + track_filename[i][0][1] + "</b></figcaption>";
        }
        html_cmd += "</td>"
        
        if (i % 3 == 1)
        {
            html_cmd += "</tr>"
        }           
    }
    html_cmd+="</table>"
    
    document.getElementById("miniature").innerHTML=html_cmd;
</script>
-->


<script>
    var html_cmd = "";
    
    for (var i = track_filename.length - 3; i >=0 ; i--)
    {   
        html_cmd+="<div class='square bg' style='background-image: url(" + image_array[i][0] + "'>"
        html_cmd+="<div class='content'>"
        html_cmd+="<div class='table'>"
        html_cmd+="<div class='table-cell'>"
        html_cmd+= "<a href='./tracks.html?map_index=" + i + "'>" + track_filename[i][0][1] + "</a>";
        html_cmd+="</div>"
        html_cmd+="</div>"
        html_cmd+="</div>"
        html_cmd+="</div>"
    }
    
    document.getElementById("miniature").innerHTML=html_cmd;
    
    console.log(i + html_cmd + "\n");
</script>

 
    

<!-- END OF LAYOUT, following juts for the demo -->
