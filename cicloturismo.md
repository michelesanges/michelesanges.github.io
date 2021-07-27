---
layout: page
title: Cicloturismo
subtitle: Look mum, no hands! 
bigimg: 
- "https://cutt.ly/dvdGreo"  : "Montemarcello"   
- "https://cutt.ly/Fv7eMVM" : "Bonassola"   
- "https://cutt.ly/Rv7eDCK"  : "Bonassola"  
---
<head>
<meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0, width=device-width, user-scalable=no">
</head>

<body>
    <div id="miniature"></div>

<script type="text/javascript" src="cicloturismo_photo_array.js"></script>
<script type="text/javascript" src="cicloturismo_track_array.js"></script>

<script>
    var html_cmd = "";

    
    for (var i = track_filename.length - 1; i >=0 ; i--)
    {   
        // ricerca la prima immagine del tour, saltando i video
        j=0;
        while (image_array[i][j].includes("youtu"))
        {
            j++;
        }
    
        html_cmd+="<div class='square bg' style='background-image: url(" + image_array[i][j] + ")'>"
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

