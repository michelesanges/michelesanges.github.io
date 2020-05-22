---
layout: page
title: Cicloturismo
subtitle: Il termine traccia denota solitamente un segno, un'orma o una scia, ma possiede diversi altri significati.
bigimg: https://cutt.ly/zyTv5qx 
---
<body>
    <div id="miniature"></div>
</body>
<h4>
<script type="text/javascript" src="photo_array.js">  </script>
<script type="text/javascript" src="track_array.js">  </script>
    
<script>

    var html_cmd;
    html_cmd= "";
    for (var i = track_filename.length - 1; i >=0 ; i--)
    {
            html_cmd += "<td style='text-align:center'>"
            
//             html_cmd += "<a href='./tracks.html?map_index=" + i + "'><img src='" + image_array[i][0] + "' width=200 height=auto \
//             title='" + track_filename[i][0][1] + "'></a>"
            
//             html_cmd +="<p margin-bottom: 3cm;>"
            if (image_array[i].length != 0 && !image_array[i][0].includes("youtu"))
            {
                html_cmd += "<a href='./tracks.html?map_index=" + i + "'><img src='" 
                html_cmd+= image_array[i][0] + "' width=200 height=auto title='" + track_filename[i][0][1] + "'></a>"
                html_cmd += "<figcaption><b>" + track_filename[i][0][1] + "</b></figcaption>";
            }
            else
            {
                html_cmd += "<a href='./tracks.html?map_index=" + i + "'><img src='https://michelesanges.github.io/img/bike_start.png'" 
                html_cmd+=  " width=200 height=auto title='" + track_filename[i][0][1] + "'></a>"
                html_cmd += "<figcaption><b>" + track_filename[i][0][1] + "</b></figcaption>";
           }
            
            html_cmd +="<br><br>"
    }

    document.getElementById("miniature").innerHTML=html_cmd;
</script>

<!--- <a href="./tracks.html?map_index=23">[2020-05-17] - La Spezia - Casté - Colle del Telegrafo - Campiglia</a><hr>
- <a href="./tracks.html?map_index=22">[2020-02-09] - La Spezia - Volastra - Colle del Telegrafo - Campiglia</a><hr>
- <a href="./tracks.html?map_index=21">[2019-09-15] - Zeri - Levanto</a><hr>
- <a href="./tracks.html?map_index=20">[2019-06-27] - Tour del Casentino</a><hr>
- <a href="./tracks.html?map_index=19">[2019-04-20] - Pasqua con chi vuoi - Sentiero della Bonifica e ciclabile del lago Trasimeno </a><hr>
- <a href="./tracks.html?map_index=18">[2018-09-29] - La Monsterrato - Strade bianche del Monferrato</a><hr>
- <a href="./tracks.html?map_index=17">[2018-08-15] - Ugliancaldo</a><hr>
- <a href="./tracks.html?map_index=16">[2018-08-06] - Giro dei quattro laghi</a><hr>
- <a href="./tracks.html?map_index=15">[2018-06-03] - Colonnata</a><hr>
- <a href="./tracks.html?map_index=14">[2017-08-07] - Due giorni su e giù per l'Appennino tosco emiliano</a><hr>
- <a href="./tracks.html?map_index=13">[2017-06-02] - Sulle tracce della Via Claudia Augusta</a><hr>
- <a href="./tracks.html?map_index=12">[2017-05-27] - Viareggio - Livorno</a><hr>
- <a href="./tracks.html?map_index=11">[2017-04-17] - Aulla - Amola - Virgoletta - Villafranca - Castelnuovo Magra</a><hr>
- <a href="./tracks.html?map_index=10">[2017-04-08] - Viareggio - Lucca, lungo il fiume Serchio</a><hr>
- <a href="./tracks.html?map_index=9">[2017-04-01] - Pontremoli - Castelnuovo Magra</a><hr>
- <a href="./tracks.html?map_index=8">[2016-08-15] - Castelnuovo Magra - Fosdinovo - Equi Terme - Aulla</a><hr>
- <a href="./tracks.html?map_index=7">[2016-08-08] - Campocecina</a><hr>
- <a href="./tracks.html?map_index=6">[2016-06-02] - La via del polleggio</a><hr>
- <a href="./tracks.html?map_index=5">[2016-05-21] - Bologna - Casalborsetti under the moonlight</a><hr>
- <a href="./tracks.html?map_index=4">[2016-04-16] - Valli di Comacchio</a><hr>
- <a href="./tracks.html?map_index=3">[2015-09-16] - Tour dell'Umbria</a><hr>
- <a href="./tracks.html?map_index=2">[2015-05-30] - Tour dell'Isola d'Elba</a><hr>
- <a href="./tracks.html?map_index=1">[2013-10-26] - Lago Massaciuccoli - Lucca</a><hr>
- <a href="./tracks.html?map_index=0">[2013-09-05] - Sulle strade bianche dell'Eroica</a><hr>-->

</h4>

