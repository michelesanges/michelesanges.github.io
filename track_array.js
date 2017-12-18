	// elenco tracce
	var track_filename = new Array();
	// file name, nome traccia, colore traccia, flag traccia visibile, marker start, marker stop
	track_filename[0] = ['http://michelesanges.github.io/dataset/tracks/2017-08-07 - tour masochista.geojson', "[2017-08-07] - Due giorni su e giù per l'Appennino tosco emiliano", "rgb(190, 40, 180)", true, null, null];	
	track_filename[1] = ['http://michelesanges.github.io/dataset/tracks/2017-06-04 - lago di caldonazzo - bassano del grappa - ricostruita.geojson', 
				'[2017-06-04] - SULLE TRACCE DELLA VIA CLAUDIA AUGUSTA - Lago di Caldonazzo - Bassano del Grappa', 
				"rgb(0, 255, 20)", true, null, null];
	track_filename[2] = ['http://michelesanges.github.io/dataset/tracks/2017-06-03 - merano - trento.geojson',
				'[2017-06-03] - SULLE TRACCE DELLA VIA CLAUDIA AUGUSTA - Merano - Trento',
				"rgb(50, 200, 40)", true, null, null];
	track_filename[3] = ['http://michelesanges.github.io/dataset/tracks/2017-06-02 - passo resia - merano - ricostruita.geojson', 
				'[2017-06-02] - SULLE TRACCE DELLA VIA CLAUDIA AUGUSTA - Passo Resia - Merano', 
				"rgb(100, 150, 60)", true, null, null];
	track_filename[4] = ['http://michelesanges.github.io/dataset/tracks/2017-05-27 - viareggio - livorno.geojson', 
				'[2017-05-27] - Viareggio - Livorno', 
				"rgb(150, 100, 80)", true, null, null];
	track_filename[5] = ['http://michelesanges.github.io/dataset/tracks/2017-04-17 - aulla - virgoletta - villafranca - castelnuovo magra - ricostruita.geojson', 
				'[2017-04-17] - Aulla - Villafranca - Castelnuovo magra', 
				"rgb(200, 50, 100)", true, null, null];
	track_filename[6] = ['http://michelesanges.github.io/dataset/tracks/2017-04-08 - viareggio - lucca.geojson', 
				'[2017-04-08] - Viareggio - Lucca',
				"rgb(250, 0, 120)", true, null, null];	
	track_filename[7] = ['http://michelesanges.github.io/dataset/tracks/2017-04-01 - pontremoli_castelnuovomagra_ricostruita.geojson',
				'[2017-04-01] - Pontremoli - Castelnuovo Magra',
				"rgb(230, 20, 140)", true, null, null];
	track_filename[8] = ['http://michelesanges.github.io/dataset/tracks/2016-08-15 - equi terme_completa.geojson', 
				'[2016-08-15] - Equi Terme',
				"rgb(210, 30, 160)", true, null, null];
	track_filename[9] = ['http://michelesanges.github.io/dataset/tracks/2016-08-08 - campocecina.geojson', 
				'[2016-08-08] - Campocecina',
				"rgb(210, 30, 160)", true, null, null];
	track_filename[10] = ['http://michelesanges.github.io/dataset/tracks/2016-06-02 - la via del polleggio.geojson', 
				'[2016-06-02] - LA VIA DEL POLLEGGIO - Mestre - Treviso',
				"rgb(210, 30, 160)", true, null, null];
	track_filename[11] = ['http://michelesanges.github.io/dataset/tracks/2016-06-03 - la via del polleggio.geojson', 
				'[2016-06-03] - LA VIA DEL POLLEGGIO - Treviso - Bassano del Grappa',
				"rgb(210, 30, 160)", true, null, null];
	track_filename[12] = ['http://michelesanges.github.io/dataset/tracks/2016-06-04 - la via del polleggio.geojson', 
				'[2016-06-04] - LA VIA DEL POLLEGGIO - Bassano del Grappa - Padova',
				"rgb(210, 30, 160)", true, null, null];
	track_filename[13] = ['http://michelesanges.github.io/dataset/tracks/2016-06-05 - la via del polleggio.geojson', 
				'[2016-06-05] - LA VIA DEL POLLEGGIO - Padova - Monselice',
				"rgb(210, 30, 160)", true, null, null];			
	track_filename[14] = ['http://michelesanges.github.io/dataset/tracks/2016-05-21 - bologna-casalborsetti.geojson', 
				'[2016-05-21] - BOLOGNA-MARE - Bologna - Campotto',
				"rgb(210, 30, 160)", true, null, null];
	track_filename[15] = ['http://michelesanges.github.io/dataset/tracks/2016-05-22 - bologna-casalborsetti.geojson', 
				'[2016-05-22] - BOLOGNA-MARE - Campotto - Casalborsetti',
				"rgb(210, 30, 160)", true, null, null];
	track_filename[16] = ['http://michelesanges.github.io/dataset/tracks/2016-04-16 - tour_valli_comacchio.geojson', 
				'[2016-04-16] - Valli di Comacchio',
				"rgb(210, 30, 160)", true, null, null];
	track_filename[17] = ['http://michelesanges.github.io/dataset/tracks/2015-09-16 - tour_umbria.geojson', 
				'[2015-09-16] - TOUR UMBRIA - Perugia - Città di Castello',
				"rgb(210, 30, 160)", true, null, null];
	track_filename[18] = ['http://michelesanges.github.io/dataset/tracks/2015-09-17 - tour_umbria.geojson', 
				'[2015-09-17] - TOUR UMBRIA - Città di Castello - Gubbio',
				"rgb(210, 30, 160)", true, null, null];				
	track_filename[19] = ['http://michelesanges.github.io/dataset/tracks/2015-09-18 - tour_umbria.geojson', 
				'[2015-09-18] - TOUR UMBRIA - Gubbio - Assisi',
				"rgb(210, 30, 160)", true, null, null];				
	track_filename[20] = ['http://michelesanges.github.io/dataset/tracks/2015-09-19 - tour_umbria.geojson', 
				'[2015-09-19] - TOUR UMBRIA - Assisi - Spoleto',
				"rgb(210, 30, 160)", true, null, null];				
	track_filename[21] = ['http://michelesanges.github.io/dataset/tracks/2015-09-20 - tour_umbria.geojson', 
				'[2015-09-20] - TOUR UMBRIA - Spoleto - S. Maria degli Angeli',
				"rgb(210, 30, 160)", true, null, null];		
