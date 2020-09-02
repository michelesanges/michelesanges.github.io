	// elenco tracce
	var track_filename = new Array();
	
	// file name, nome traccia, colore traccia, flag traccia visibile, marker start, marker stop	
	track_filename[0] = new Array();
	track_filename[0][0] = ['./dataset/tracks/2013-09-05 - tour_eroica.geojson',
				'05-08 SETTEMBRE 2013<br>SULLE STRADE BIANCHE DELL\'EROICA',
				'05-09-2013 - Siena - Montalcino', 
				"rgb(2, 136, 209)", true, null, null];
 	track_filename[0][1] = ['./dataset/tracks/2013-09-06 - tour_eroica.geojson',
				'05-08 SETTEMBRE 2013<br>SULLE STRADE BIANCHE DELL\'EROICA',
				'06-09-2013 - Montalcino - Lucignano D\'Arbia', 
				"rgb(244, 180, 0)", true, null, null];
 	track_filename[0][2] = ['./dataset/tracks/2013-09-07 - tour_eroica.geojson',
				'05-08 SETTEMBRE 2013<br>SULLE STRADE BIANCHE DELL\'EROICA',
				'07-09-2013 - Lucignano D\'Arbia - Radda in Chianti', 
				"rgb(166, 27, 74)", true, null, null];
 	track_filename[0][3] = ['./dataset/tracks/2013-09-08 - tour_eroica.geojson',
				'05-08 SETTEMBRE 2013<br>SULLE STRADE BIANCHE DELL\'EROICA',
				'08-09-2013 - Radda in Chianti - Siena', 
				"rgb(205, 220, 57)", true, null, null];
                
	track_filename[1] = new Array();
	track_filename[1][0] = ['./dataset/tracks/2013-10-26 - massaciuccoli_lucca.geojson',
				'26 OTTOBRE 2013<br>LAGO MASSACIUCCOLI - LUCCA',
				'26-10-2013 - Lago Massaciuccoli - Lucca',
				"rgb(166, 27, 74)", true, null, null];

	track_filename[2] = new Array();
	track_filename[2][0] = ['./dataset/tracks/2015-05-30 - tour_isola_delba.geojson',
				'30 MAGGIO - 02 GIUGNO 2015<br>TOUR DELL\'ISOLA D\'ELBA',
				'30-05-2015 - Primo giorno',
				"rgb(2, 136, 209)", true, null, null];
	track_filename[2][1] = ['./dataset/tracks/2015-05-31 - tour_isola_delba.geojson',
				'30 MAGGIO - 02 GIUGNO 2015<br>TOUR DELL\'ISOLA D\'ELBA',
				'31-05-2015 - Secondo giorno',
				"rgb(244, 180, 0)", true, null, null];
	track_filename[2][2] = ['./dataset/tracks/2015-06-01 - tour_isola_delba.geojson',
				'30 MAGGIO - 02 GIUGNO 2015<br>TOUR DELL\'ISOLA D\'ELBA',
				'01-06-2015 - Terzo giorno',
				"rgb(166, 27, 74)", true, null, null];
	track_filename[2][3] = ['./dataset/tracks/2015-06-02 - tour_isola_delba.geojson',
				'30 MAGGIO - 02 GIUGNO 2015<br>TOUR DELL\'ISOLA D\'ELBA',
				'02-06-2015 - Quarto giorno',
				"rgb(205, 220, 57)", true, null, null];
				
	track_filename[3] = new Array();
	track_filename[3][0] = ['./dataset/tracks/2015-09-16 - tour_umbria.geojson',
				'16-20  SETTEMBRE 2015<br>TOUR DELL\'UMBRIA',
				'16-09-2015 - Perugia - Citta\' di Castello',
				"rgb(2, 136, 209)", true, null, null];
	track_filename[3][1] = ['./dataset/tracks/2015-09-17 - tour_umbria.geojson', 
				'16-20  SETTEMBRE 2015<br>TOUR DELL\'UMBRIA',
				'17-09-2015 - Citta\' di Castello - Gubbio',
				"rgb(244, 180, 0)", true, null, null];
	track_filename[3][2] = ['./dataset/tracks/2015-09-18 - tour_umbria.geojson', 
				'16-20  SETTEMBRE 2015<br>TOUR DELL\'UMBRIA',
				'18-09-2015 - Gubbio - Assisi',
				"rgb(166, 27, 74)", true, null, null];
	track_filename[3][3] = ['./dataset/tracks/2015-09-19 - tour_umbria.geojson', 
				'16-20  SETTEMBRE 2015<br>TOUR DELL\'UMBRIA',
				'19-09-2015 - Assisi - Spoleto',
				"rgb(205, 220, 57)", true, null, null];
	track_filename[3][4] = ['./dataset/tracks/2015-09-20 - tour_umbria.geojson', 
				'16-20  SETTEMBRE 2015 - TOUR DELL\'UMBRIA',
				'20-09-2015 - Spoleto - S. Maria degli Angeli',
				"rgb(0, 255, 255)", true, null, null];

	track_filename[4] = new Array();
	track_filename[4][0] = ['./dataset/tracks/2016-04-16 - tour_valli_comacchio.geojson',
				'16 APRILE 2016<br>VALLI DI COMACCHIO',
				'16-04-2016 - Valli di Comacchio',
				"rgb(166, 27, 74)", true, null, null];
	
	track_filename[5] = new Array();
	track_filename[5][0] = ['./dataset/tracks/2016-05-21 - bologna-casalborsetti.geojson',
				'21-22 MAGGIO 2016<br>BOLOGNA - CASALBORSETTI UNDER THE MOONLIGHT',
				'21-05-2016 - Bologna - Campotto',
				"rgb(2, 136, 209)", true, null, null];
	track_filename[5][1] = ['./dataset/tracks/2016-05-22 - bologna-casalborsetti.geojson',
				'21-22 MAGGIO 2016<br>BOLOGNA - CASALBORSETTI UNDER THE MOONLIGHT',
				'22-05-2016 - Campotto - Casalborsetti',
				"rgb(244, 180, 0)", true, null, null];

	track_filename[6] = new Array();
	track_filename[6][0] = ['./dataset/tracks/2016-06-02 - la via del polleggio.geojson',
				'02-05 GIUGNO 2016<br>LA VIA DEL POLLEGGIO',
				'02-06-2016 - Mestre - Treviso',
				"rgb(2, 136, 209)", true, null, null];
	track_filename[6][1] = ['./dataset/tracks/2016-06-03 - la via del polleggio.geojson', 
				'02-05 GIUGNO 2016<br>LA VIA DEL POLLEGGIO',
				'03-06-2016 - Treviso - Bassano del Grappa',
				"rgb(244, 180, 0)", true, null, null];
	track_filename[6][2] = ['./dataset/tracks/2016-06-04 - la via del polleggio.geojson', 
				'02-05 GIUGNO 2016<br>LA VIA DEL POLLEGGIO',
				'04-06-2016 - Bassano del Grappa - Padova',
				"rgb(166, 27, 74)", true, null, null];
	track_filename[6][3] = ['./dataset/tracks/2016-06-05 - la via del polleggio.geojson', 
				'02-05 GIUGNO 2016<br>LA VIA DEL POLLEGGIO',
				'05-06-2016 - Padova - Monselice',
				"rgb(205, 220, 57)", true, null, null];

	track_filename[7] = new Array();
	track_filename[7][0] = ['./dataset/tracks/2016-08-08 - campocecina.geojson',
				'08 AGOSTO 2016<br>CAMPOCECINA',
				'08-08-2016 - Campocecina',
				"rgb(166, 27, 74)", true, null, null];

	track_filename[8] = new Array();
	track_filename[8][0] = ['./dataset/tracks/2016-08-15 - equi terme_completa.geojson',
				'15 AGOSTO 2016<br>EQUI TERME',
				'15-08-2016 - Equi Terme',
				"rgb(166, 27, 74)", true, null, null];

	track_filename[9] = new Array();
	track_filename[9][0] = ['./dataset/tracks/2017-04-01 - pontremoli_castelnuovomagra_ricostruita.geojson',
				'01 APRILE 2017<br>PONTREMOLI - CASTELNUOVO MAGRA',
				'01-04-2017 - Pontremoli - Castelnuovo Magra',
				"rgb(166, 27, 74)", true, null, null];

	track_filename[10] = new Array();
	track_filename[10][0] = ['./dataset/tracks/2017-04-08 - viareggio - lucca.geojson',
				'08 APRILE 2017<br>VIAREGGIO - LUCCA LUNGO IL FIUME SERCHIO',
				'08-04-2017 - Viareggio - Lucca lungo il fiume Serchio',
				"rgb(166, 27, 74)", true, null, null];

	track_filename[11] = new Array();
	track_filename[11][0] = ['./dataset/tracks/2017-04-17 - aulla - virgoletta - villafranca - castelnuovo magra - ricostruita.geojson',
				'17 APRILE 2017<br>AULLA - VIRGOLETTA - VILLAFRANCA - CASTELNUOVO MAGRA',
				'17-04-2017 - Aulla - Virgoletta - Villafranca - Castelnuovo Magra',
				"rgb(166, 27, 74)", true, null, null];

	track_filename[12] = new Array();
	track_filename[12][0] = ['./dataset/tracks/2017-05-27 - viareggio - livorno.geojson',
				'27 MAGGIO 2017<br>VIAREGGIO - LIVORNO',
				'27-05-2017 - Viareggio - Livorno',
				"rgb(166, 27, 74)", true, null, null];

	track_filename[13] = new Array();
	track_filename[13][0] = ['./dataset/tracks/2017-06-02 - passo resia - merano - ricostruita.geojson',
				'02-04 GIUGNO 2017<br>SULLE TRACCE DELLA VIA CLAUDIA AUGUSTA',
				'02-06-2017 - Passo Resia - Merano',
				"rgb(2, 136, 209)", true, null, null];
	track_filename[13][1] = ['./dataset/tracks/2017-06-03 - merano - trento.geojson', 
				'02-04 GIUGNO 2017<br>SULLE TRACCE DELLA VIA CLAUDIA AUGUSTA',
				'03-06-2017 - Merano - Trento',
				"rgb(244, 180, 0)", true, null, null];
	track_filename[13][2] = ['./dataset/tracks/2017-06-04 - lago di caldonazzo - bassano del grappa - ricostruita.geojson', 
				'02-04 GIUGNO 2017<br>SULLE TRACCE DELLA VIA CLAUDIA AUGUSTA',
				'04-06-2017 - Lago di Caldonazzo - Bassano del Grappa',
				"rgb(166, 27, 74)", true, null, null];

	track_filename[14] = new Array();
	track_filename[14][0] = ['./dataset/tracks/2017-08-07 - castelnuovo magra - fosdinovo - fivizzano -passo del cerreto - collagna.geojson',
				'07-08 AGOSTO 2017<br>DUE GIORNI SU E GIÙ PER L\'APPENNINO TOSCO EMILIANO',
				'07-08-2017 - Castelnuovo Magra - Fosdinovo - Fivizzano - Passo del Cerreto - Collagna',
				"rgb(2, 136, 209)", true, null, null];
	track_filename[14][1] = ['./dataset/tracks/2017-08-08 - collagna - passo dello scalucchia - passo del lagastrello - comano - castelnuovo magra.geojson', 
				'DUE GIORNI SU E GIÙ PER L\'APPENNINO TOSCO EMILIANO',
				'08-08-2017 - Collagna - Passo dello Scalucchia - Passo del Lagastrello - Comano - Castelnuovo Magra',
				"rgb(244, 180, 0)", true, null, null];

	track_filename[15] = new Array();
	track_filename[15][0] = ['./dataset/tracks/2018-06-03 - colonnata.geojson',
				'03 GIUGNO 2018<br>COLONNATA',
				'03-06-2018 - Colonnata',
				"rgb(166, 27, 74)", true, null, null];

	track_filename[16] = new Array();
	track_filename[16][0] = ['./dataset/tracks/2018-08-06 - castelnuovo magra-passo-del-vestito-castenuovo-garfagnana.geojson',
				'06-07 AGOSTO 2018<br>GIRO DEI QUATTRO LAGHI',
				'06-08-2018 - Castelnuovo Magra - Passo del Vestito - Castelnuovo Garfagnana',
				"rgb(2, 136, 209)", true, null, null];
	track_filename[16][1] = ['./dataset/tracks/2018-08-07 - castelnuovo garfagnana - vagli di sotto - gramolazzo - aulla - sarzana.geojson',
				'06-07 AGOSTO 2018<br>GIRO DEI QUATTRO LAGHI',
				'07-08-2018 - Castelnuovo Garfagnana - Vagli di sotto - Gramolazzo - Aulla - Sarzana',
				"rgb(244, 180, 0)", true, null, null];
				
	track_filename[17] = new Array();
	track_filename[17][0] = ['./dataset/tracks/2018-08-15 - ugliancaldo.geojson',
				'15 AGOSTO 2018<br>UGLIANCALDO',
				'15-08-2018 - Ugliancaldo',
				"rgb(166, 27, 74)", true, null, null];

	track_filename[18] = new Array();
	track_filename[18][0] = ['./dataset/tracks/2018-09-29 - san-salvatore-monferrato-cella-monte - ricostruita.geojson',
				'29 - 30 SETTEMBRE 2018<br>LA MONSTERRATO - STRADE BIANCHE DEL MONFERRATO',
				'29-09-2018 - San Salvatore Monferrato - Cella Monte',
				"rgb(2, 136, 209)", true, null, null];
	track_filename[18][1] = ['./dataset/tracks/2018-09-30 - cella monte-san-salvatore-monferrato - ricostruita.geojson',
				'29 - 30 SETTEMBRE 2018<br>LA MONSTERRATO - STRADE BIANCHE DEL MONFERRATO',
				'30-09-2018 - Cella Monte - San Salvatore Monferrato',
				"rgb(244, 180, 0)", true, null, null];

	track_filename[19] = new Array();
	track_filename[19][0] = ['./dataset/tracks/2019-04-20 - pasqua con chi vuoi - sentiero della bonifica e ciclabile del lago trasimeno.geojson',
				'20 - 21 APRILE 2019<br>PASQUA CON CHI VUOI - SENTIERO DELLA BONIFICA E CICLABILE DEL LAGO TRASIMENO',
				'20-04-2019 - Arezzo - Montebuono di Magione (PG)',
				"rgb(2, 136, 209)", true, null, null];
	track_filename[19][1] = ['./dataset/tracks/2019-04-21 - pasqua con chi vuoi - sentiero della bonifica e ciclabile del lago trasimeno.geojson',
				'20 - 21 APRILE 2019<br>PASQUA CON CHI VUOI - SENTIERO DELLA BONIFICA E CICLABILE DEL LAGO TRASIMENO',
				'21-04-2019 - Montebuono di Magione (PG) - Arezzo',
				"rgb(244, 180, 0)", true, null, null];

	track_filename[20] = new Array();
	track_filename[20][0] = ['./dataset/tracks/2019-06-27 - tour del casentino - camaldoli.geojson',
				'27 - 30 GIUGNO 2019<br>TOUR DEL CASENTINO',
				'27-06-2019 - Camaldoli',
				"rgb(2, 136, 209)", true, null, null];
	track_filename[20][1] = ['./dataset/tracks/2019-06-28 - tour del casentino - la verna.geojson',
				'27 - 30 GIUGNO 2019<br>TOUR DEL CASENTINO',
				'28-06-2019 - La Verna',
				"rgb(244, 180, 0)", true, null, null];
	track_filename[20][2] = ['./dataset/tracks/2019-06-29 - tour del casentino - passo della consuma - vallombrosa.geojson',
				'27 - 30 GIUGNO 2019<br>TOUR DEL CASENTINO',
				'29-06-2019 - Passo della Consuma',
				"rgb(166, 27, 74)", true, null, null];
	track_filename[20][3] = ['./dataset/tracks/2019-06-30 - tour del casentino - badia prataglia.geojson',
				'27 - 30 GIUGNO 2019<br>TOUR DEL CASENTINO',
				'30-06-2019 - Badia Prataglia',
				"rgb(205, 220, 57)", true, null, null];
                
	track_filename[21] = new Array();
	track_filename[21][0] = ['./dataset/tracks/2019-09-15 - zeri - levanto.geojson',
				'15 - 16 SETTEMBRE 2019<br>ZERI - LEVANTO',
				'15-09-2019 - Castelnuovo Magra - Noce di Zeri',
				"rgb(2, 136, 209)", true, null, null];
	track_filename[21][1] = ['./dataset/tracks/2019-09-16 - zeri - levanto ricostruita.geojson',
				'15 - 16 SETTEMBRE 2019<br>ZERI - LEVANTO',
				'16-09-2019 - Noce di Zeri - Levanto',
				"rgb(244, 180, 0)", true, null, null];

	track_filename[22] = new Array();
	track_filename[22][0] = ['./dataset/tracks/2020-02-09 - la-spezia-volastra-telegrafo-campiglia.geojson',
				'09 FEBBRAIO 2020<br>LA SPEZIA - VOLASTRA - COLLE DEL TELEGRAFO - CAMPIGLIA',
				'09-02-2020 - La Spezia - Volastra - Colle del Telegrafo - Campiglia',
				"rgb(166, 27, 74)", true, null, null];
                
	track_filename[23] = new Array();
	track_filename[23][0] = ['./dataset/tracks/2020-05-17 - la spezia - caste - campiglia.geojson',
				'17 MAGGIO 2020<br>LA SPEZIA - CASTE - COLLE DEL TELEGRAFO - CAMPIGLIA',
				'17-05-2020 - La Spezia - Casté - Colle del Telegrafo - Campiglia',
				"rgb(166, 27, 74)", true, null, null];
       
	track_filename[24] = new Array();
	track_filename[24][0] = ['./dataset/tracks/2020-06-02 - campocecina.geojson',
				'02 GIUGNO 2020<br>CAMPOCECINA',
				'02-06-2020 - Campocecina',
				"rgb(166, 27, 74)", true, null, null];

                
	track_filename[25] = new Array();
	track_filename[25][0] = ['./dataset/tracks/2020-06-21 - prati_di_logarghena.geojson',
				'21 GIUGNO 2020<br>PRATI DI LOGARGHENA',
				'21-06-2020 - Prati di Logarghena',
				"rgb(166, 27, 74)", true, null, null];
                
	track_filename[26] = new Array();
	track_filename[26][0] = ['./dataset/tracks/2020-07-21 - quella volta che decisi di tornare a casa da bolzano in bicicletta - bolzano - rovereto.geojson',
				'21-26 LUGLIO 2020 - QUELLA VOLTA CHE DECISI DI TORNARE A CASA DA BOLZANO IN BICICLETTA',
				'21/07/2020 - Bolzano - Rovereto',
				"rgb(2, 136, 209)", true, null, null];
	track_filename[26][1] = ['./dataset/tracks/2020-07-22 - quella volta che decisi di tornare a casa da bolzano in bicicletta - rovereto - governolo.geojson',
				'21-26 LUGLIO 2020 - QUELLA VOLTA CHE DECISI DI TORNARE A CASA DA BOLZANO IN BICICLETTA',
				'22/07/2020 - Rovereto - Governolo (Mantova)',
				"rgb(244, 180, 0)", true, null, null];                
	track_filename[26][2] = ['./dataset/tracks/2020-07-23 - quella volta che decisi di tornare a casa da bolzano in bicicletta - governolo - ferrara.geojson',
				'21-26 LUGLIO 2020 - QUELLA VOLTA CHE DECISI DI TORNARE A CASA DA BOLZANO IN BICICLETTA',
				'23/07/2020 - Governolo (Mantova) - Ferrara',
				"rgb(166, 27, 74)", true, null, null];                
	track_filename[26][3] = ['./dataset/tracks/2020-07-24 - quella volta che decisi di tornare a casa da bolzano in bicicletta - ferrara - bologna.geojson',
				'21-26 LUGLIO 2020 - QUELLA VOLTA CHE DECISI DI TORNARE A CASA DA BOLZANO IN BICICLETTA',
				'24/07/2020 - Ferrara - Bologna',
				"rgb(205, 220, 57)", true, null, null];                
	track_filename[26][4] = ['./dataset/tracks/2020-07-25 - quella volta che decisi di tornare a casa da bolzano in bicicletta - bologna - castelnuovo ne monti.geojson',
				'21-26 LUGLIO 2020 - QUELLA VOLTA CHE DECISI DI TORNARE A CASA DA BOLZANO IN BICICLETTA',
				'25/07/2020 - Bologna - Castelnuovo ne Monti',
				"rgb(0, 255, 255)", true, null, null];                
	track_filename[26][5] = ['./dataset/tracks/2020-07-26 - quella volta che decisi di tornare a casa da bolzano in bicicletta - castelnuovo ne monti - castelnuovo magra.geojson',
				'21-26 LUGLIO 2020 - QUELLA VOLTA CHE DECISI DI TORNARE A CASA DA BOLZANO IN BICICLETTA',
				'26/07/2020 - Castelnuovo ne Monti - Castelnuovo Magra',
				"rgb(44, 180, 44)", true, null, null];                



                
/*	track_filename[27] = new Array();
	track_filename[27][0] = ['./dataset/tracks/todo - raspa 2018 def1.geojson',
				'RASPAZOLLE',
				'Raspazolle 1',
				"rgb(2, 136, 209)", true, null, null];
	track_filename[27][1] = ['./dataset/tracks/todo - raspa 2018 def2.geojson',
				'RASPAZOLLE',
				'Raspazolle 2',
				"rgb(244, 180, 0)", true, null, null];  */              
                 
                
	track_filename[27] = new Array();
	track_filename[27][0] = ['./dataset/tracks/todo - Lagastrello - Berceto - Passo cento croci.geojson',
				'Lagastrello - Berceto - Passo cento',
				'Lagastrello - Berceto - Passo cento',
				"rgb(2, 136, 209)", true, null, null];
               
// 	track_filename[101] = new Array();
// 	track_filename[101][0] = ['./dataset/tracks/todo - orecchiella.geojson',
// 				'Lucca - Riserva orecchiella',
// 				'Lucca - Riserva orecchiella',
// 				"rgb(2, 136, 209)", true, null, null];
	

               
                
