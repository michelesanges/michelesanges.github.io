---
layout: page
title: LOOK MUM, NO HANDS!
subtitle: <div id="subtitle"></div>
//bigimg:
//- "https://cutt.ly/dvdGreo"  : "Montemarcello"   
//- "https://cutt.ly/Fv7eMVM" : "Bonassola"   
//- "https://cutt.ly/Rv7eDCK"  : "Bonassola"  
---
<head>
<meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0, width=device-width, user-scalable=no">
</head>

<body>
    <div id="miniature"></div>
    
<script>
	function getParameter(whichOne)
	{
		var pairs = location.search.substring(1).split('&');
		var r = "";
		var tp = new Array();

		for (var i = 0; i < pairs.length; i ++)
		{
			tp = pairs[i].split('=');

			if (whichOne == tp[0])
			{
				r = unescape(tp[1].replace(/\+/g, " "));
			}
		}

		return r;
	};
	
    type = getParameter("type").replace(/^.*[\\\/]/, ''); 
    console.log("type " + type);

    if (type=='singleday')
    {
        document.write('<script type="text/javascript" src="look_mum_singledays_photo_array.js"><\/script>');
        document.write('<script type="text/javascript" src="look_mum_singledays_track_array.js"><\/script>');
        document.getElementById("subtitle").innerHTML="Single-day tours"
    }
    else if (type=='multiday') 
    {   
        document.write('<script type="text/javascript" src="look_mum_multidays_photo_array.js"><\/script>');
        document.write('<script type="text/javascript" src="look_mum_multidays_track_array.js"><\/script>');
        document.getElementById("subtitle").innerHTML="Multi-day tours"
    }
</script>

<!-- <script type="text/javascript" src="look_mum_multidays_photo_array.js"></script> -->
<!-- <script type="text/javascript" src="look_mum_multidays_track_array.js"></script> -->

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
//         html_cmd+= "<a href='./tracks.html?map_index=" + i + "' style='color:white; background-color:black'>" + track_filename[i][0][1] + "</a>";
        html_cmd+= "<a href='./tracks.html?type=" + type +"&map_index=" + i + "' style='color:white; background-color:black'>" + track_filename[i][0][1] + "</a>";
        html_cmd+="</div>"
        html_cmd+="</div>"
        html_cmd+="</div>"
        html_cmd+="</div>"
    }
    
    document.getElementById("miniature").innerHTML=html_cmd;
</script>
</body>

