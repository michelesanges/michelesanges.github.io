	// elenco tracce
	var track_filename = new Array();
    var track_description = new Array();
	var track_file_gpx = new Array();
	var track_spotify_playlist = new Array();
 	var index = 0;
	
	// file name, nome traccia, colore traccia, flag traccia visibile, marker start, marker stop	
    track_description[index] = "";
    track_file_gpx[index] = "";
    track_spotify_playlist[index] = "";
	track_filename[index] = new Array();
	track_filename[index][0] = ['./dataset/tracks/2013-09-05 - tour_eroica.geojson',
				'05-08 SETTEMBRE 2013<br>SULLE STRADE BIANCHE DELL\'EROICA',
				'05-09-2013 - Siena - Montalcino', 
				"rgb(2, 136, 209)", true, null, null];
 	track_filename[index][1] = ['./dataset/tracks/2013-09-06 - tour_eroica.geojson',
				'05-08 SETTEMBRE 2013<br>SULLE STRADE BIANCHE DELL\'EROICA',
				'06-09-2013 - Montalcino - Lucignano D\'Arbia', 
				"rgb(244, 180, 0)", true, null, null];
 	track_filename[index][2] = ['./dataset/tracks/2013-09-07 - tour_eroica.geojson',
				'05-08 SETTEMBRE 2013<br>SULLE STRADE BIANCHE DELL\'EROICA',
				'07-09-2013 - Lucignano D\'Arbia - Radda in Chianti', 
				"rgb(166, 27, 74)", true, null, null];
 	track_filename[index][3] = ['./dataset/tracks/2013-09-08 - tour_eroica.geojson',
				'05-08 SETTEMBRE 2013<br>SULLE STRADE BIANCHE DELL\'EROICA',
				'08-09-2013 - Radda in Chianti - Siena', 
				"rgb(205, 220, 57)", true, null, null];

                
    index += 1;
    track_description[index] = "";
    track_file_gpx[index] = "";
    track_spotify_playlist[index] = "";
	track_filename[index] = new Array();
	track_filename[index][0] = ['./dataset/tracks/2015-05-30 - tour_isola_delba.geojson',
				'30 MAGGIO - 02 GIUGNO 2015<br>TOUR DELL\'ISOLA D\'ELBA',
				'30-05-2015 - Primo giorno',
				"rgb(2, 136, 209)", true, null, null];
	track_filename[index][1] = ['./dataset/tracks/2015-05-31 - tour_isola_delba.geojson',
				'30 MAGGIO - 02 GIUGNO 2015<br>TOUR DELL\'ISOLA D\'ELBA',
				'31-05-2015 - Secondo giorno',
				"rgb(244, 180, 0)", true, null, null];
	track_filename[index][2] = ['./dataset/tracks/2015-06-01 - tour_isola_delba.geojson',
				'30 MAGGIO - 02 GIUGNO 2015<br>TOUR DELL\'ISOLA D\'ELBA',
				'01-06-2015 - Terzo giorno',
				"rgb(166, 27, 74)", true, null, null];
	track_filename[index][3] = ['./dataset/tracks/2015-06-02 - tour_isola_delba.geojson',
				'30 MAGGIO - 02 GIUGNO 2015<br>TOUR DELL\'ISOLA D\'ELBA',
				'02-06-2015 - Quarto giorno',
				"rgb(205, 220, 57)", true, null, null];


    index += 1;
    track_description[index] = "";
    track_file_gpx[index] = "";
    track_spotify_playlist[index] = "";
	track_filename[index] = new Array();
	track_filename[index][0] = ['./dataset/tracks/2015-09-16 - tour_umbria.geojson',
				'16-20  SETTEMBRE 2015<br>TOUR DELL\'UMBRIA',
				'16-09-2015 - Perugia - Citta\' di Castello',
				"rgb(2, 136, 209)", true, null, null];
	track_filename[index][1] = ['./dataset/tracks/2015-09-17 - tour_umbria.geojson', 
				'16-20  SETTEMBRE 2015<br>TOUR DELL\'UMBRIA',
				'17-09-2015 - Citta\' di Castello - Gubbio',
				"rgb(244, 180, 0)", true, null, null];
	track_filename[index][2] = ['./dataset/tracks/2015-09-18 - tour_umbria.geojson', 
				'16-20  SETTEMBRE 2015<br>TOUR DELL\'UMBRIA',
				'18-09-2015 - Gubbio - Assisi',
				"rgb(166, 27, 74)", true, null, null];
	track_filename[index][3] = ['./dataset/tracks/2015-09-19 - tour_umbria.geojson', 
				'16-20  SETTEMBRE 2015<br>TOUR DELL\'UMBRIA',
				'19-09-2015 - Assisi - Spoleto',
				"rgb(205, 220, 57)", true, null, null];
	track_filename[index][4] = ['./dataset/tracks/2015-09-20 - tour_umbria.geojson', 
				'16-20  SETTEMBRE 2015 - TOUR DELL\'UMBRIA',
				'20-09-2015 - Spoleto - S. Maria degli Angeli',
				"rgb(0, 255, 255)", true, null, null];

                
    index += 1;
    track_description[index] = "";
    track_file_gpx[index] = "";
    track_spotify_playlist[index] = "";
	track_filename[index] = new Array();
	track_filename[index][0] = ['./dataset/tracks/2016-05-21 - bologna-casalborsetti.geojson',
				'21-22 MAGGIO 2016<br>BOLOGNA - CASALBORSETTI UNDER THE MOONLIGHT',
				'21-05-2016 - Bologna - Campotto',
				"rgb(2, 136, 209)", true, null, null];
	track_filename[index][1] = ['./dataset/tracks/2016-05-22 - bologna-casalborsetti.geojson',
				'21-22 MAGGIO 2016<br>BOLOGNA - CASALBORSETTI UNDER THE MOONLIGHT',
				'22-05-2016 - Campotto - Casalborsetti',
				"rgb(244, 180, 0)", true, null, null];


    index += 1;
    track_description[index] = "";
    track_file_gpx[index] = "";
    track_spotify_playlist[index] = "";
	track_filename[index] = new Array();
	track_filename[index][0] = ['./dataset/tracks/2016-06-02 - la via del polleggio.geojson',
				'02-05 GIUGNO 2016<br>LA VIA DEL POLLEGGIO',
				'02-06-2016 - Mestre - Treviso',
				"rgb(2, 136, 209)", true, null, null];
	track_filename[index][1] = ['./dataset/tracks/2016-06-03 - la via del polleggio.geojson', 
				'02-05 GIUGNO 2016<br>LA VIA DEL POLLEGGIO',
				'03-06-2016 - Treviso - Bassano del Grappa',
				"rgb(244, 180, 0)", true, null, null];
	track_filename[index][2] = ['./dataset/tracks/2016-06-04 - la via del polleggio.geojson', 
				'02-05 GIUGNO 2016<br>LA VIA DEL POLLEGGIO',
				'04-06-2016 - Bassano del Grappa - Padova',
				"rgb(166, 27, 74)", true, null, null];
	track_filename[index][3] = ['./dataset/tracks/2016-06-05 - la via del polleggio.geojson', 
				'02-05 GIUGNO 2016<br>LA VIA DEL POLLEGGIO',
				'05-06-2016 - Padova - Monselice',
				"rgb(205, 220, 57)", true, null, null];

 
    index += 1;
    track_description[index] = "";
    track_file_gpx[index] = "";
    track_spotify_playlist[index] = "";
	track_filename[index] = new Array();
	track_filename[index][0] = ['./dataset/tracks/2017-06-02 - passo resia - merano - ricostruita.geojson',
				'02-04 GIUGNO 2017<br>SULLE TRACCE DELLA VIA CLAUDIA AUGUSTA',
				'02-06-2017 - Passo Resia - Merano',
				"rgb(2, 136, 209)", true, null, null];
	track_filename[index][1] = ['./dataset/tracks/2017-06-03 - merano - trento.geojson', 
				'02-04 GIUGNO 2017<br>SULLE TRACCE DELLA VIA CLAUDIA AUGUSTA',
				'03-06-2017 - Merano - Trento',
				"rgb(244, 180, 0)", true, null, null];
	track_filename[index][2] = ['./dataset/tracks/2017-06-04 - lago di caldonazzo - bassano del grappa - ricostruita.geojson', 
				'02-04 GIUGNO 2017<br>SULLE TRACCE DELLA VIA CLAUDIA AUGUSTA',
				'04-06-2017 - Lago di Caldonazzo - Bassano del Grappa',
				"rgb(166, 27, 74)", true, null, null];


    index += 1;
    track_description[index] = "";
    track_file_gpx[index] = "";
    track_spotify_playlist[index] = "";
	track_filename[index] = new Array();
	track_filename[index][0] = ['./dataset/tracks/2017-08-07 - castelnuovo magra - fosdinovo - fivizzano -passo del cerreto - collagna.geojson',
				'07-08 AGOSTO 2017<br>DUE GIORNI SU E GIÙ PER L\'APPENNINO TOSCO EMILIANO',
				'07-08-2017 - Castelnuovo Magra - Fosdinovo - Fivizzano - Passo del Cerreto - Collagna',
				"rgb(2, 136, 209)", true, null, null];
	track_filename[index][1] = ['./dataset/tracks/2017-08-08 - collagna - passo dello scalucchia - passo del lagastrello - comano - castelnuovo magra.geojson', 
				'DUE GIORNI SU E GIÙ PER L\'APPENNINO TOSCO EMILIANO',
				'08-08-2017 - Collagna - Passo dello Scalucchia - Passo del Lagastrello - Comano - Castelnuovo Magra',
				"rgb(244, 180, 0)", true, null, null];


    index += 1;
    track_description[index] = "";
    track_file_gpx[index] = "";
    track_spotify_playlist[index] = "";
	track_filename[index] = new Array();
	track_filename[index][0] = ['./dataset/tracks/2018-08-06 - castelnuovo magra-passo-del-vestito-castenuovo-garfagnana.geojson',
				'06-07 AGOSTO 2018<br>GIRO DEI QUATTRO LAGHI',
				'06-08-2018 - Castelnuovo Magra - Passo del Vestito - Castelnuovo Garfagnana',
				"rgb(2, 136, 209)", true, null, null];
	track_filename[index][1] = ['./dataset/tracks/2018-08-07 - castelnuovo garfagnana - vagli di sotto - gramolazzo - aulla - sarzana.geojson',
				'06-07 AGOSTO 2018<br>GIRO DEI QUATTRO LAGHI',
				'07-08-2018 - Castelnuovo Garfagnana - Vagli di sotto - Gramolazzo - Aulla - Sarzana',
				"rgb(244, 180, 0)", true, null, null];


    index += 1;
    track_description[index] = "";
    track_file_gpx[index] = "";
    track_spotify_playlist[index] = "";
	track_filename[index] = new Array();
	track_filename[index][0] = ['./dataset/tracks/2018-09-29 - san-salvatore-monferrato-cella-monte - ricostruita.geojson',
				'29 - 30 SETTEMBRE 2018<br>LA MONSTERRATO - STRADE BIANCHE DEL MONFERRATO',
				'29-09-2018 - San Salvatore Monferrato - Cella Monte',
				"rgb(2, 136, 209)", true, null, null];
	track_filename[index][1] = ['./dataset/tracks/2018-09-30 - cella monte-san-salvatore-monferrato - ricostruita.geojson',
				'29 - 30 SETTEMBRE 2018<br>LA MONSTERRATO - STRADE BIANCHE DEL MONFERRATO',
				'30-09-2018 - Cella Monte - San Salvatore Monferrato',
				"rgb(244, 180, 0)", true, null, null];


    index += 1;
    track_description[index] = "";
    track_file_gpx[index] = "";
    track_spotify_playlist[index] = "";
	track_filename[index] = new Array();
	track_filename[index][0] = ['./dataset/tracks/2019-04-20 - pasqua con chi vuoi - sentiero della bonifica e ciclabile del lago trasimeno.geojson',
				'20 - 21 APRILE 2019<br>PASQUA CON CHI VUOI - SENTIERO DELLA BONIFICA E CICLABILE DEL LAGO TRASIMENO',
				'20-04-2019 - Arezzo - Montebuono di Magione (PG)',
				"rgb(2, 136, 209)", true, null, null];
	track_filename[index][1] = ['./dataset/tracks/2019-04-21 - pasqua con chi vuoi - sentiero della bonifica e ciclabile del lago trasimeno.geojson',
				'20 - 21 APRILE 2019<br>PASQUA CON CHI VUOI - SENTIERO DELLA BONIFICA E CICLABILE DEL LAGO TRASIMENO',
				'21-04-2019 - Montebuono di Magione (PG) - Arezzo',
				"rgb(244, 180, 0)", true, null, null];


    index += 1;
    track_description[index] = "";
    track_file_gpx[index] = "";
    track_spotify_playlist[index] = "";
	track_filename[index] = new Array();
	track_filename[index][0] = ['./dataset/tracks/2019-06-27 - tour del casentino - camaldoli.geojson',
				'27 - 30 GIUGNO 2019<br>TOUR DEL CASENTINO',
				'27-06-2019 - Camaldoli',
				"rgb(2, 136, 209)", true, null, null];
	track_filename[index][1] = ['./dataset/tracks/2019-06-28 - tour del casentino - la verna.geojson',
				'27 - 30 GIUGNO 2019<br>TOUR DEL CASENTINO',
				'28-06-2019 - La Verna',
				"rgb(244, 180, 0)", true, null, null];
	track_filename[index][2] = ['./dataset/tracks/2019-06-29 - tour del casentino - passo della consuma - vallombrosa.geojson',
				'27 - 30 GIUGNO 2019<br>TOUR DEL CASENTINO',
				'29-06-2019 - Passo della Consuma',
				"rgb(166, 27, 74)", true, null, null];
	track_filename[index][3] = ['./dataset/tracks/2019-06-30 - tour del casentino - badia prataglia.geojson',
				'27 - 30 GIUGNO 2019<br>TOUR DEL CASENTINO',
				'30-06-2019 - Badia Prataglia',
				"rgb(205, 220, 57)", true, null, null];
                

    index += 1;
    track_description[index] = "";
    track_file_gpx[index] = "";
    track_spotify_playlist[index] = "";
	track_filename[index] = new Array();
	track_filename[index][0] = ['./dataset/tracks/2019-09-15 - zeri - levanto.geojson',
				'15 - 16 SETTEMBRE 2019<br>ZERI - LEVANTO',
				'15-09-2019 - Castelnuovo Magra - Noce di Zeri',
				"rgb(2, 136, 209)", true, null, null];
	track_filename[index][1] = ['./dataset/tracks/2019-09-16 - zeri - levanto ricostruita.geojson',
				'15 - 16 SETTEMBRE 2019<br>ZERI - LEVANTO',
				'16-09-2019 - Noce di Zeri - Levanto',
				"rgb(244, 180, 0)", true, null, null];


    index += 1;
    track_description[index] = "";
    track_file_gpx[index] = "https://drive.google.com/file/d/1BctLIBqFkBRAxftwCsDN3zbI00UaDeCZ/view?usp=sharing";
    track_spotify_playlist[index] = "";
    track_filename[index] = new Array();
	track_filename[index][0] = ['./dataset/tracks/2020-07-21 - quella volta che decisi di tornare a casa da bolzano in bicicletta - bolzano - rovereto.geojson',
				'21-26 LUGLIO 2020<br>QUELLA VOLTA CHE DECISI DI TORNARE A CASA DA BOLZANO IN BICICLETTA',
				'21/07/2020 - Bolzano - Rovereto',
				"rgb(2, 136, 209)", true, null, null];
	track_filename[index][1] = ['./dataset/tracks/2020-07-22 - quella volta che decisi di tornare a casa da bolzano in bicicletta - rovereto - governolo.geojson',
				'21-26 LUGLIO 2020<br>QUELLA VOLTA CHE DECISI DI TORNARE A CASA DA BOLZANO IN BICICLETTA',
				'22/07/2020 - Rovereto - Governolo (Mantova)',
				"rgb(244, 180, 0)", true, null, null];                
	track_filename[index][2] = ['./dataset/tracks/2020-07-23 - quella volta che decisi di tornare a casa da bolzano in bicicletta - governolo - ferrara.geojson',
				'21-26 LUGLIO 2020<br>QUELLA VOLTA CHE DECISI DI TORNARE A CASA DA BOLZANO IN BICICLETTA',
				'23/07/2020 - Governolo (Mantova) - Ferrara',
				"rgb(166, 27, 74)", true, null, null];                
	track_filename[index][3] = ['./dataset/tracks/2020-07-24 - quella volta che decisi di tornare a casa da bolzano in bicicletta - ferrara - bologna.geojson',
				'21-26 LUGLIO 2020<br>QUELLA VOLTA CHE DECISI DI TORNARE A CASA DA BOLZANO IN BICICLETTA',
				'24/07/2020 - Ferrara - Bologna',
				"rgb(205, 220, 57)", true, null, null];                
	track_filename[index][4] = ['./dataset/tracks/2020-07-25 - quella volta che decisi di tornare a casa da bolzano in bicicletta - bologna - castelnuovo ne monti.geojson',
				'21-26 LUGLIO 2020 - QUELLA VOLTA CHE DECISI DI TORNARE A CASA DA BOLZANO IN BICICLETTA',
				'25/07/2020 - Bologna - Castelnuovo ne Monti',
				"rgb(0, 255, 255)", true, null, null];                
	track_filename[index][5] = ['./dataset/tracks/2020-07-26 - quella volta che decisi di tornare a casa da bolzano in bicicletta - castelnuovo ne monti - castelnuovo magra.geojson',
				'21-26 LUGLIO 2020<br>QUELLA VOLTA CHE DECISI DI TORNARE A CASA DA BOLZANO IN BICICLETTA',
				'26/07/2020 - Castelnuovo ne Monti - Castelnuovo Magra',
				"rgb(44, 180, 44)", true, null, null];                


    index += 1;
    track_description[index] = "Il paesaggio vitivinicolo del Piemonte - dice Wikipedia - è un sito patrimonio dell'umanità che comprende una serie di località situate nelle aree del Basso Piemonte: le Langhe, il Roero e il Monferrato.<br>Sono andato a controllare.";
    track_file_gpx[index] = "https://drive.google.com/file/d/113seyLWCFQA-EHbLWGpagMRLKyCLnpqt/view?usp=sharing";
    track_spotify_playlist[index] = "";
	track_filename[index] = new Array();
	track_filename[index][0] = ['./dataset/tracks/2020-09-13 - tour divino.geojson',
				'13-16 SETTEMBRE 2020<br>TOUR diVino',
				'13/09/2020 - San Salvatore Monferrato - Acqui Terme',
				"rgb(2, 136, 209)", true, null, null];
	track_filename[index][1] = ['./dataset/tracks/2020-09-14 - tour divino.geojson',
				'13-16 SETTEMBRE 2020<br>TOUR diVino',
				'14/09/2020 - Acqui Terme - Alba',
				"rgb(244, 180, 0)", true, null, null];
 	track_filename[index][2] = ['./dataset/tracks/2020-09-15 - tour divino.geojson',
				'13-16 SETTEMBRE 2020<br>TOUR diVino',
				'15/09/2020 - Alba - Monesiglio',
				"rgb(166, 27, 74)", true, null, null];
 	track_filename[index][3] = ['./dataset/tracks/2020-09-16 - tour divino.geojson',
				'13-16 SETTEMBRE 2020<br>TOUR diVino',
				'16/09/2020 - Monesiglio - San Salvatore Monferrato',
				"rgb(205, 220, 57)", true, null, null];


    index += 1;
    track_description[index] = "Tra le colline e la costa toscana: Lajatico, Bolgheri e costa degli etruschi";
    track_file_gpx[index] = "https://drive.google.com/file/d/11aZD1rp3vmVkiVU7Alg3oyZrTsCQLJSt/view?usp=sharing";
    track_spotify_playlist[index] = "";
	track_filename[index] = new Array();
	track_filename[index][0] = ['./dataset/tracks/2021-06-03 - bolgheri e costa degli etruschi.geojson',
				'03-04 GIUGNO 2021<br>TRA LE COLLINE E LA COSTA TOSCANA: LAJATICO, BOLGHERI E COSTA DEGLI ETRUSCHI',
				'03/06/2021 - Lajatico - Bolgheri',
				"rgb(2, 136, 209)", true, null, null];
	track_filename[index][1] = ['./dataset/tracks/2021-06-04 - bolgheri e costa degli etruschi.geojson',
				'03-04 GIUGNO 2021<br>TRA LE COLLINE E LA COSTA TOSCANA: LAJATICO, BOLGHERI E COSTA DEGLI ETRUSCHI',
				'04/06/2021 - Bolgheri - Costa  degli etruschi',
				"rgb(244, 180, 0)", true, null, null];
                
                
    index += 1;
    track_description[index] = "Bivacco al Parco dei Cento Laghi, nell'Appennino parmense, per provare la tenda.";
    track_file_gpx[index] = "https://drive.google.com/file/d/1Fzq9RTMw1fN0MKBAIxMevZrTRmejy74-/view?usp=sharing";
    track_spotify_playlist[index] = "";
	track_filename[index] = new Array();
	track_filename[index][0] = ['./dataset/tracks/2021-07-23 - bivacco al parco dei cento laghi.geojson',
				'23-24 LUGLIO 2021<br>BIVACCO AL PARCO DEI CENTO LAGHI',
				'23/07/2021 - Casa - Passo del Lagastrello - Passo della Colla - Rifugio Lagoni',
				"rgb(2, 136, 209)", true, null, null];
	track_filename[index][1] = ['./dataset/tracks/2021-07-24 - bivacco al parco dei cento laghi.geojson',
				'23-24 LUGLIO 2021<br>BIVACCO AL PARCO DEI CENTO LAGHI',
				'24/07/2021 - Lagdei - Passo del Silara - Berceto - Passo della Cisa - Casa',
				"rgb(244, 180, 0)", true, null, null];
               
              
    index += 1;
    track_description[index] = "Da Lecce a Perugia, seguendo prima la costa adriatica e poi il percorso dell'Italy Coast to Coast.";
    track_file_gpx[index] = "https://drive.google.com/file/d/1hnTFD47Ep4BoxOswHJLn-QjPfqVamIVu/view?usp=sharing";
    track_spotify_playlist[index] = "";
	track_filename[index] = new Array();
	track_filename[index][0] = ['./dataset/tracks/2021-08-23 - ciclovia adriatica.geojson',
				'23-29 AGOSTO 2021<br>VIAGGIO ALLA RICERCA DELLA CICLOVIA ADRIATICA',
				'23/08/2021 - San Cataldo - Monopoli',
				"rgb(2, 136, 209)", true, null, null];
	track_filename[index][1] = ['./dataset/tracks/2021-08-24 - ciclovia adriatica.geojson',
				'23-29 AGOSTO 2021<br>VIAGGIO ALLA RICERCA DELLA CICLOVIA ADRIATICA',
				'24/08/2021 - Monopoli - Manfredonia',
				"rgb(244, 180, 0)", true, null, null];
	track_filename[index][2] = ['./dataset/tracks/2021-08-25 - ciclovia adriatica.geojson',
				'23-29 AGOSTO 2021<br>VIAGGIO ALLA RICERCA DELLA CICLOVIA ADRIATICA',
				'25/08/2021 - Manfredonia - Vasto',
				"rgb(166, 27, 74)", true, null, null];                
	track_filename[index][3] = ['./dataset/tracks/2021-08-26 - ciclovia adriatica.geojson',
				'23-29 AGOSTO 2021<br>VIAGGIO ALLA RICERCA DELLA CICLOVIA ADRIATICA',
				'26/08/2021 - Vasto - Alba adriatica',
				"rgb(205, 220, 57)", true, null, null];                
	track_filename[index][4] = ['./dataset/tracks/2021-08-27 - ciclovia adriatica.geojson',
				'23-29 AGOSTO 2021<br>VIAGGIO ALLA RICERCA DELLA CICLOVIA ADRIATICA',
				'27/08/2021 - Alba adriatica - Filottrano',
				"rgb(0, 255, 255)", true, null, null];                
	track_filename[index][5] = ['./dataset/tracks/2021-08-28 - ciclovia adriatica.geojson',
				'23-29 AGOSTO 2021<br>VIAGGIO ALLA RICERCA DELLA CICLOVIA ADRIATICA',
				'28/08/2021 - Filottrano - Spindoli',
				"rgb(44, 180, 44)", true, null, null];                
	track_filename[index][6] = ['./dataset/tracks/2021-08-29 - ciclovia adriatica.geojson',
				'23-29 AGOSTO 2021<br>VIAGGIO ALLA RICERCA DELLA CICLOVIA ADRIATICA',
				'29/08/2021 - Spindoli - Perugia',
				"rgb(255, 33, 180)", true, null, null];                


    index += 1;
    track_description[index] = "Corso Giambone, angolo Corso Unione Sovietica: è qui che ho vissuto i primi dieci anni della mia vita. Sbircio attraverso i vetri del portone del condominio in cui ho abitato. Mi piacerebbe entrare, attraversare l'androne per uscire dalla parte opposta, nel cortile interno in cui giocavo. Vorrei salire al primo piano e visitare l'appartamento. Ricordo esattamente il motivo della carta da parati di camera mia e di mia sorella. Chissà come sarà adesso. Svolto l'angolo. Percorro questo corridoio che conduce al portone del condominio in cui abitarono i miei nonni. Anche qui vorrei suonare il campanello, chiedere di entrare e affacciarmi dal balcone per osservare il viale dall'alto. Vorrei entrare nella pasticceria di mio nonno, di cui è rimasta solo l'insegna. E poi, la chiesa in cui ho fatto la prima comunione - credo pure l'ultima - e la mia scuola elementare. Sono trascorsi quarantadue anni.";
    track_file_gpx[index] = "https://drive.google.com/file/d/1mjRKG1STxQZsIdGm_xB8npgfoS1xjFVv/view?usp=sharing";
    track_spotify_playlist[index] = "";
	track_filename[index] = new Array();
	track_filename[index][0] = ['./dataset/tracks/2022-05-18 - torino - primo giorno.geojson',
				'18-21 MAGGIO 2022<br>VIAGGIO NEL TEMPO',
				'18/05/2022 - Castelnuovo Magra (SP) - Fraconalto (AL)',
				"rgb(2, 136, 209)", true, null, null];
	track_filename[index][1] = ['./dataset/tracks/2022-05-19 - torino - secondo giorno.geojson',
				'18-21 MAGGIO 2022<br>VIAGGIO NEL TEMPO',
				'19/05/2022 - Fraconalto (AL) - Torino (TO)',
				"rgb(244, 180, 0)", true, null, null];
	track_filename[index][2] = ['./dataset/tracks/2022-05-20 - torino - terzo giorno.geojson',
				'18-21 MAGGIO 2022<br>VIAGGIO NEL TEMPO',
				'20/05/2022 - Visita alla città sul percorso AbbracciaTO, la circle line ciclistica di Torino',
				"rgb(166, 27, 74)", true, null, null];
	track_filename[index][3] = ['./dataset/tracks/2022-05-21 - torino - quarto giorno.geojson',
				'18-21 MAGGIO 2022<br>VIAGGIO NEL TEMPO',
				'21/05/2022 - Colle della Maddalena - Basilica di Superga',
				"rgb(205, 220, 57)", true, null, null];


    index += 1;
    track_description[index] = ""
    track_file_gpx[index] = "https://drive.google.com/file/d/15BFaENY0TtgY55levJI7VckBwtA1thFL/view?usp=sharing";
    track_spotify_playlist[index] = "";
    track_filename[index] = new Array();
	track_filename[index][0] = ['./dataset/tracks/2022-06-04 - parma - bologna.geojson',
				'04-05 GIUGNO 2022<br>UNA COSA DIVERTENTE CHE NON FARÒ MAI PIÙ (MA POSSO RIPENSARCI)',
				'04/06/2022 - Castelnuovo Magra (SP) - Parma (PR)',
				"rgb(2, 136, 209)", true, null, null];
	track_filename[index][1] = ['./dataset/tracks/2022-06-05 - parma - bologna.geojson',
				'04-05 GIUGNO 2022<br>UNA COSA DIVERTENTE CHE NON FARÒ MAI PIÙ (MA POSSO RIPENSARCI)',
				'05/06/2022 - Bologna (BO) - Castelnuovo Magra (SP)',
				"rgb(244, 180, 0)", true, null, null];


    index += 1;
    track_description[index] = ""
    track_file_gpx[index] = "https://drive.google.com/file/d/1K6nsCtodgvvTYe213yIdI0WlrY0gb7Af/view?usp=sharing";
    track_spotify_playlist[index] = "";
    track_filename[index] = new Array();
	track_filename[index][0] = ['./dataset/tracks/2022-07-10 - bolzano - venezia.geojson',
				'10-13 LUGLIO 2022<br>BOLZANO - VENEZIA',
				'10/07/2022 - Bolzano (BZ) - Dobbiaco (BZ)',
				"rgb(2, 136, 209)", true, null, null];
	track_filename[index][1] = ['./dataset/tracks/2022-07-11 - bolzano - venezia.geojson',
				'10-13 LUGLIO 2022<br>BOLZANO - VENEZIA',
				'11/07/2022 - Dobbiaco (BZ) - Villach (CARINZIA)',
				"rgb(244, 180, 0)", true, null, null];
	track_filename[index][2] = ['./dataset/tracks/2022-07-12 - bolzano - venezia.geojson',
				'10-13 LUGLIO 2022<br>BOLZANO - VENEZIA',
				'12/07/2022 - Villach (CARINZIA) - Grado (GO)',
				"rgb(166, 27, 74)", true, null, null];
	track_filename[index][3] = ['./dataset/tracks/2022-07-13 - bolzano - venezia.geojson',
				'10-13 LUGLIO 2022<br>BOLZANO - VENEZIA',
				'13/07/2022 - Grado (GO) - Venezia (VE)',
				"rgb(205, 220, 57)", true, null, null];


    index += 1;
    track_description[index] = "Lungo la costa che fu abitata dagli etruschi, tra terrazze con pavimenti a scacchiera, passando per chiese sconsacrate prive del tetto in cui giovani americani convolano a nozze, fino alla piazza in cui si confrontano diciassette storiche contrade."
    track_file_gpx[index] = "https://drive.google.com/file/d/1avWkOVYdTAFxXA1gkWd2eUzhyNrgEJpp/view?usp=sharing";
    track_spotify_playlist[index] = "";
    track_filename[index] = new Array();
	track_filename[index][0] = ['./dataset/tracks/2023-05-05 - populonia - siena.geojson',
				'05-06 MAGGIO 2023<br>COSTA DEGLI ETRUSCHI - SIENA',
				'05/05/2023 - Castelnuovo Magra (SP) - Populonia (LI)',
				"rgb(2, 136, 209)", true, null, null];
	track_filename[index][1] = ['./dataset/tracks/2023-05-06 - populonia - siena.geojson',
				'05-06 MAGGIO 2023<br>COSTA DEGLI ETRUSCHI - SIENA',
				'06/05/2023 - Populonia (LI) - Siena (SI)',
				"rgb(244, 180, 0)", true, null, null];


    index += 1;
    track_description[index] = "Lunedì sera. Mi trovo a Norcia e decido di riavviare il telefono. Nella storia dell'umanità, mai sbaglio più grosso fu commesso. Il telefono non riparte e non dà segni di vita.<br>\
	Un forte vento di tempesta si alza dalle montagne circostanti e un fragore di tuoni rimbomba nella vallata.	<p> \
	Martedì mattina. Chiedo in prestito un telefono e, come un carcerato, effettuo l'unica chiamata a mia disposizione. Sconfortato, proseguo il viaggio secondo i piani, seguendo la terza e ultima traccia preventivamente caricata sul GPS della bicicletta. <br>\
	Lascio Norcia e salgo lentamente verso Castelluccio. Incontro un solo altro ciclista, cicloviaggiatore, con il quale scambio due parole. Raggiunto il punto più elevato, a circa millecinquecento metri di altitudine, mi fermo. Duecento metri sotto di me, alla mia destra, si mostra in tutta la sua maestosità il Pian Grande di Castelluccio, una enorme distesa di vegetazione e fiori, dalle tonalità pastello, immersa nel parco dei Monti Sibillini. Uno spettacolo emozionante, amplificato dall'avere raggiunto questo luogo in bicicletta. <br>\
	Mi ricordo che non potrò fare neppure una fotografia di quello che sto vedendo.<br>\
	Un forte vento di tempesta si alza dalle montagne circostanti e un fragore di tuoni rimbomba nella vallata.	<p> \
	La strada inizia a scendere. La percorro a velocità bassissima, con i freni tirati, continuando ad osservare il paesaggio sotto di me. Giunto all'altezza dell'altopiano, mi si presenta davanti un lungo rettilineo. A circa metà rettilineo, sulla destra, un ranch con gruppi di cavalli al pascolo. Sulla sinistra, una rappresentazione dell'Italia realizzata con soli alberi. <br>\
	Mentre mangio un panino al chiosco, osservo sopra di me Castelluccio di Norcia o quello che ne rimane. Ancora un tratto in salita e lo raggiungo. E' un paese completamente devastato dal terremoto. La zona interna del paese, protetta da transenne, non è raggiungibile. Non riesco neppure ad immaginare cosa possano avere provato gli abitanti il giorno del terremoto. Pochi i turisti presenti nella piazzetta di accesso al paese, dove i commercianti hanno spostato le loro attività.<p> \
	Riparto. Tutto intorno, i campi fioriti di Pian Perduto, di una bellezza che toglie il fiato. Entro nelle Marche e giungo molto velocemente a Visso, anch'esso ancora con evidenti danni del terremoto.<br>\
Il resto della giornata sarà un saliscendi di strade che mi porteranno fino a Foligno, città dal traffico sostenuto e che mi è parsa avere solo strade a senso unico. Grazie alle preziose indicazioni dei passanti, raggiungo la stazione percorrendo tutta la città in contromano.<p> \
Castelluccio di Norcia è probabilmente il più bel posto che io abbia raggiunto in bicicletta e certamente l'unico di cui non disponga di neppure una fotografia.<br>\
Un forte vento di tempesta si alza dalle montagne circostanti, eccetera, eccetera."
    track_file_gpx[index] = "https://drive.google.com/file/d/1q6oywtmp5uz5dgovZ_S1SUUTvZ92cVxh/view?usp=sharing";
    track_spotify_playlist[index] = "";
    track_filename[index] = new Array();
	track_filename[index][0] = ['./dataset/tracks/2023-06-18 - capalbio - norcia - foligno.geojson',
				'18-20 GIUGNO 2023<br>VADO A CASTELLUCCIO DI NORCIA A VEDERE LA FIORITURA',
				'18/06/2023 - Capalbio (GR) - Narni (TR)',
				"rgb(2, 136, 209)", true, null, null];
	track_filename[index][1] = ['./dataset/tracks/2023-06-19 - capalbio - norcia - foligno.geojson',
				'18-20 GIUGNO 2023<br>VADO A CASTELLUCCIO DI NORCIA A VEDERE LA FIORITURA',
				'19/06/2023 - Narni (TR) - Norcia (PG)',
				"rgb(44, 180, 0)", true, null, null];
	track_filename[index][2] = ['./dataset/tracks/2023-06-20 - capalbio - norcia - foligno.geojson',
				'18-20 GIUGNO 2023<br>VADO A CASTELLUCCIO DI NORCIA A VEDERE LA FIORITURA',
				'20/06/2023 - Norcia (PG) - Castelluccio di Norcia (PG) - Foligno (PG)',
				"rgb(166, 27, 74)", true, null, null];


	index += 1;
    track_description[index] = ""
    track_file_gpx[index] = "https://drive.google.com/file/d/1t0i-01CMv3VrytaZpooQMH_Cla_9Gu4H/view?usp=sharing";
    track_spotify_playlist[index] = "https://open.spotify.com/embed/playlist/4roRJg5M6ZEIJ3ODn6GNhm?utm_source=generator";
    track_filename[index] = new Array();
	track_filename[index][0] = ['./dataset/tracks/2023-07-07 - le vent nous portera.geojson',
				'07-13 LUGLIO 2023<br>LE VENT NOUS PORTERA - TORINO - PARIGI',
				'07/07/2023 - Torino - Aosta',
				"rgb(2, 136, 209)", true, null, null];
	track_filename[index][1] = ['./dataset/tracks/2023-07-08 - le vent nous portera.geojson',
				'07-13 LUGLIO 2023<br>LE VENT NOUS PORTERA - TORINO - PARIGI',
				'08/07/2023 - Aosta - Villeneuve (Cantone Vaud - Svizzera)',
				"rgb(44, 180, 0)", true, null, null];
	track_filename[index][2] = ['./dataset/tracks/2023-07-09 - le vent nous portera.geojson',
				'07-13 LUGLIO 2023<br>LE VENT NOUS PORTERA - TORINO - PARIGI',
				'09/07/2023 - Villeneuve (Cantone Vaud - Svizzera) - Arbois (Borgogna - Franca contea - Francia)',
				"rgb(166, 27, 74)", true, null, null];
	track_filename[index][3] = ['./dataset/tracks/2023-07-10 - le vent nous portera.geojson',
				'07-13 LUGLIO 2023<br>LE VENT NOUS PORTERA - TORINO - PARIGI',
				'10/07/2023 - Arbois (Borgogna - Franca contea - Francia) - Tonnerre (Borgogna - Franca contea - Francia)',
				"rgb(205, 220, 57)", true, null, null];
	track_filename[index][4] = ['./dataset/tracks/2023-07-11 - le vent nous portera.geojson',
				'07-13 LUGLIO 2023<br>LE VENT NOUS PORTERA - TORINO - PARIGI',
				'11/07/2023 - Tonnerre (Borgogna - Franca contea - Francia) - Parigi (Île-de-France - Francia)',
				"rgb(0, 255, 255)", true, null, null];
	track_filename[index][5] = ['./dataset/tracks/2023-07-12 - le vent nous portera.geojson',
				'07-13 LUGLIO 2023<br>LE VENT NOUS PORTERA - TORINO - PARIGI',
				'12/07/2023 - Giro a Parigi (Île-de-France - Francia)',
				"rgb(44, 180, 44)", true, null, null];
	track_filename[index][6] = ['./dataset/tracks/2023-07-13 - le vent nous portera.geojson',
				'07-13 LUGLIO 2023<br>LE VENT NOUS PORTERA - TORINO - PARIGI',
				'13/07/2023 - Giro a Parigi (Île-de-France - Francia)',
				"rgb(255, 33, 180)", true, null, null];


	index += 1;
    track_description[index] = ""
    track_file_gpx[index] = "https://drive.google.com/file/d/13UODG4fZoq8g4ajh5YkPxfNQz7TIIAXq/view?usp=sharing";
    track_spotify_playlist[index] = "";
    track_filename[index] = new Array();
	track_filename[index][0] = ['./dataset/tracks/2023-09-24 - sardegna.geojson',
				'24-29 SETTEMBRE 2023<br>ALL`INCROCIO DEI VENTI: DA OLBIA A CAGLIARI LUNGO LA COSTA OCCIDENTALE DELLA SARDEGNA',
				'24/09/2023 - Olbia (SS) - Vignola Mare (SS)',
				"rgb(2, 136, 209)", true, null, null];
	track_filename[index][1] = ['./dataset/tracks/2023-09-25 - sardegna.geojson',
				'24-29 SETTEMBRE 2023<br>ALL`INCROCIO DEI VENTI: DA OLBIA A CAGLIARI LUNGO LA COSTA OCCIDENTALE DELLA SARDEGNA',
				'25/09/2023 - Vignola Mare (SS) - Alghero (SS)',
				"rgb(44, 180, 0)", true, null, null];
	track_filename[index][2] = ['./dataset/tracks/2023-09-26 - sardegna.geojson',
				'24-29 SETTEMBRE 2023<br>ALL`INCROCIO DEI VENTI: DA OLBIA A CAGLIARI LUNGO LA COSTA OCCIDENTALE DELLA SARDEGNA',
				'26/09/2023 - Alghero (SS) - Is Arenas (OR)',
				"rgb(166, 27, 74)", true, null, null];
	track_filename[index][3] = ['./dataset/tracks/2023-09-27 - sardegna.geojson',
				'24-29 SETTEMBRE 2023<br>ALL`INCROCIO DEI VENTI: DA OLBIA A CAGLIARI LUNGO LA COSTA OCCIDENTALE DELLA SARDEGNA',
				'27/09/2023 - Is Arenas (OR) - Portixeddu (SU)',
				"rgb(205, 220, 57)", true, null, null];
	track_filename[index][4] = ['./dataset/tracks/2023-09-28 - sardegna.geojson',
				'24-29 SETTEMBRE 2023<br>ALL`INCROCIO DEI VENTI: DA OLBIA A CAGLIARI LUNGO LA COSTA OCCIDENTALE DELLA SARDEGNA',
				'28/09/2023 - Portixeddu (SU) - Sant`Antico (SU)',
				"rgb(0, 255, 255)", true, null, null];
	track_filename[index][5] = ['./dataset/tracks/2023-09-29 - sardegna.geojson',
				'24-29 SETTEMBRE 2023<br>ALL`INCROCIO DEI VENTI: DA OLBIA A CAGLIARI LUNGO LA COSTA OCCIDENTALE DELLA SARDEGNA',
				'29/09/2023 - Sant`Antico (SU) - Cagliari (CA)',
				"rgb(255, 33, 180)", true, null, null];

