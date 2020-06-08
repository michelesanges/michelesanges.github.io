---
layout: page
title: Cicloturismo
subtitle: Il termine traccia denota solitamente un segno, un'orma o una scia, ma possiede diversi altri significati.
bigimg: https://cutt.ly/zyTv5qx 
---
<head>
<style> table.example-table { border-spacing: 50px; border-collapse: separate; } </style>


<!--<style>
table {
  border-collapse: collapse;
}

table, td, th {
  border: 3px solid black;
  horizontal-align: middle;;
}
</style>-->
</head>

<body>
    <div id="miniature"></div>
</body>
<script type="text/javascript" src="photo_array.js">  </script>
<script type="text/javascript" src="track_array.js">  </script>
    
<script>
    var html_cmd;
    
    html_cmd= "<font size='2'><table class='example-table' style='width:100%' border=0>";
    for (var i = track_filename.length - 3; i >=0 ; i--)
    {
//         console.log("i % 3="+ i%3)
        
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


