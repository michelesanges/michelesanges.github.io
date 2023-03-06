	// elenco tracce
	var image_array = new Array();
	var image_caption = new Array();
 	var index = 0;
    
    // 16 APRILE 2016 - VALLI DI COMACCHIO
	image_array[index] = ['https://cutt.ly/sfYVrdu', 'https://cutt.ly/qfYVyKG', 'https://cutt.ly/0fYVotk', 'https://cutt.ly/YfYVpM4', 'https://cutt.ly/IfYVhUp', 'https://cutt.ly/tfYVjS3', 'https://cutt.ly/xfYVlYt',
	  'https://cutt.ly/4fYVzyW', 'https://cutt.ly/EfYVxfu', 'https://cutt.ly/afYVxVR', 'https://cutt.ly/jfYVvwF', 
      'https://cutt.ly/1vdPiCh', 'https://cutt.ly/RvdPh8j', 'https://cutt.ly/LvdPvNt', 'https://cutt.ly/SvdPU5S', 'https://cutt.ly/QvdPGuE', 
	 ];       
    image_caption[index] ="";

    index += 1; // 03 GIUGNO 2018 - COLONNATA
	image_array[index] = ['https://cutt.ly/JcK9xyy', 'https://cutt.ly/7vk5XWY', 'https://cutt.ly/kvk6uvt', 'https://cutt.ly/3vlwkTc', 
    'https://cutt.ly/TvlwZd8', 'https://cutt.ly/Zvlw3sX', 'https://cutt.ly/evley44', 'https://cutt.ly/MvlesBc', 'https://cutt.ly/Svleluq', 'https://cutt.ly/TvlebCm'
    ];
    image_caption[index] ="";
    
    index += 1; // 15 AGOSTO 2018 - UGLIANCALDO
	image_array[index] = ['https://cutt.ly/nvk7qXV', 'https://cutt.ly/Mvk7kdH', 'https://cutt.ly/nvk7b8I', 'https://cutt.ly/vvk7Ox0', 
    'https://cutt.ly/5vk7Cyw', 'https://cutt.ly/Cvk5qua'];    
    image_caption[index] ="";
         
    index += 1; // 09 FEBBRAIO 2020 - LA SPEZIA - VOLASTRA - COLLE DEL TELEGRAFO - CAMPIGLIA
    image_array[index] = ['https://cutt.ly/3rHIb6g', 'https://cutt.ly/BrHIPNy', 'https://cutt.ly/arHIOWh',  'https://cutt.ly/HrHIJrM',
        'https://cutt.ly/xrHILQy', 'https://cutt.ly/NrHIX3j', 'https://cutt.ly/HrHIBMJ', 'https://cutt.ly/jrHIMbv', 'https://www.youtube.com/embed/9XbbfOGx4zg'
    ];
    image_caption[index] ="";
          
    index += 1; // 02 GIUGNO 2020 - CAMPOCECINA
	image_array[index] = ['https://cutt.ly/TyCKw4w', 'https://cutt.ly/ayCKrFe', 'https://cutt.ly/ryCKtpz', 'https://cutt.ly/4yCKyEp', 'https://cutt.ly/MyCKsNk', 
        'https://cutt.ly/qyCKitt',  'https://cutt.ly/RyCKgOW', 'https://cutt.ly/DyCKpjd', 'https://cutt.ly/oyCKaGo'
    ];
    image_caption[index] ="";
        
    index += 1; // 21 GIUGNO 2020 - PRATI DI LOGARGHENA
 	image_array[index] = ['https://cutt.ly/au1w2nA', 'https://cutt.ly/ru1ebeh', 'https://cutt.ly/0u1rkQH', 'https://cutt.ly/Du1rRUg', 'https://cutt.ly/Tu1rJAl', 
        'https://cutt.ly/fu1r807', 'https://cutt.ly/lu1tpqw', 'https://cutt.ly/Xu1tcLP', 'https://cutt.ly/Du1t9rd', 'https://www.youtube.com/embed/05kGWEmdv30'
    ];
    image_caption[index] ="";

    index += 1; // 07 GENNAIO 2022 - S. ANNA DI STAZZEMA
 	image_array[index] = ['https://cutt.ly/oPG1Htl', 'https://cutt.ly/1PG19Ha', 'https://cutt.ly/LPG0rpx', 'https://cutt.ly/1PG6EWc', 'https://cutt.ly/tPG6Gf3', 'https://cutt.ly/vPK6rQV',
    'https://cutt.ly/NPLw2wP', 'https://cutt.ly/XPLehJr', 'https://cutt.ly/7PLeblp', 'https://cutt.ly/VPLeT1o'];
    image_caption[index] =['<a href = "https://www.google.com/maps?q=loc:43.975082, 10.273971" target="_blank" rel="noopener noreferrer">S. Anna di Stazzema - Ingresso al paese</a>',
    '<a href = "https://www.google.com/maps?q=loc:43.973962629474116, 10.273910291663173" target="_blank" rel="noopener noreferrer">S. Anna di Stazzema - Chiesa di S. Anna</a>', 
    '<a href = "https://www.google.com/maps?q=loc:43.973962629474116, 10.273910291663173" target="_blank" rel="noopener noreferrer">S. Anna di Stazzema - Piazza della chiesa</a>', 
    '<a href = "https://www.google.com/maps?q=loc:43.973962629474116, 10.273910291663173" target="_blank" rel="noopener noreferrer">S. Anna di Stazzema - Interno della chiesa</a>', 
    '<a href = "https://www.google.com/maps?q=loc:43.972788403659884, 10.270184726889699" target="_blank" rel="noopener noreferrer">S. Anna di Stazzema - Indicazioni per Ossario</a>',
    '<a href = "https://www.google.com/maps?q=loc:43.971668,10.272704" target="_blank" rel="noopener noreferrer">S. Anna di Stazzema - Sacrario</a>', 
    '<a href = "https://www.google.com/maps?q=loc:43.971668,10.272704" target="_blank" rel="noopener noreferrer">S. Anna di Stazzema - Sacrario</a>', 
    '<a href = "https://www.google.com/maps?q=loc:43.971668,10.272704" target="_blank" rel="noopener noreferrer">S. Anna di Stazzema - Sacrario</a>', 
    '<a href = "https://www.google.com/maps?q=loc:43.971668,10.272704" target="_blank" rel="noopener noreferrer">S. Anna di Stazzema - Sacrario</a>', 
    '<a href = "https://www.google.com/maps?q=loc:43.971668,10.272704" target="_blank" rel="noopener noreferrer">S. Anna di Stazzema - Sacrario</a>',   
    ];

    index += 1; // 16 GENNAIO 2022 - PISA - CALCI - LUCCA
 	image_array[index] = ['https://cutt.ly/FPLgNSZ', 'https://cutt.ly/TPZI43F', 'https://cutt.ly/WPZOiAg', 'https://cutt.ly/rPZOIHo', 'https://cutt.ly/NPZPr5u', 'https://cutt.ly/WPZPQXS'
    ];
    image_caption[index] =['Viareggio - Lungomare', 'Viareggio - Lungomare', 'Pisa - Piazza dei Miracoli',
    '<a href = "https://www.google.com/maps?q=loc:43.721867,10.522616" target="_blank" rel="noopener noreferrer">Calci - Certosa</a>',   
    '<a href = "https://www.google.com/maps?q=loc:43.839278,10.504397" target="_blank" rel="noopener noreferrer">Lucca</a>',   
     '<a href = "https://www.google.com/maps?q=loc:43.957274,10.231999" target="_blank" rel="noopener noreferrer">Pietrasanta</a>'   
    ];

    index += 1; // 30 GENNAIO 2022 - PORTOFINO
 	image_array[index] = ['https://cutt.ly/ZPB2azK', 'https://cutt.ly/WPB3YRM', 'https://cutt.ly/rPB35UV', 'https://cutt.ly/VPB8JsJ', 'https://cutt.ly/pPB4tLy',
    'https://cutt.ly/JPB4nmO', 'https://cutt.ly/ePB4C14', 'https://cutt.ly/wPB48jT', 'https://cutt.ly/FPB7nQo'
    ];
    image_caption[index] =[
     '<a href = "https://www.google.com/maps?q=loc:44.248086,9.58757" target="_blank" rel="noopener noreferrer">Deiva Marina - Fontana Coppi</a>', 
     '<a href = "https://www.google.com/maps?q=loc:44.249628,9.568867" target="_blank" rel="noopener noreferrer">Passo del Bracco</a>',   
     '<a href = "https://www.google.com/maps?q=loc:44.253582,9.536364" target="_blank" rel="noopener noreferrer">Deiva Marina</a>',   
     '<a href = "https://www.google.com/maps?q=loc:44.268743,9.392096" target="_blank" rel="noopener noreferrer">Sestri Levante - Baia del Silenzio</a>',   
     '<a href = "https://www.google.com/maps?q=loc:44.268743,9.392096" target="_blank" rel="noopener noreferrer">Sestri Levante - Baia del Silenzio</a>',   
     '<a href = "https://www.google.com/maps?q=loc:44.302404,9.210427" target="_blank" rel="noopener noreferrer">Portofino</a>',   
     '<a href = "https://www.google.com/maps?q=loc:44.302404,9.210427" target="_blank" rel="noopener noreferrer">Portofino</a>',   
     '<a href = "https://www.google.com/maps?q=loc:44.336699,9.216704" target="_blank" rel="noopener noreferrer">S. Margherita Ligure</a>',
     'Somewhere over the Rainbow'
    ];

    index += 1; // 31 OTTOBRE GIUGNO 2022 - QUELLA VOLTA CHE MISI A DURA PROVA I MIEI CINQUANTADUE ANNI
 	image_array[index] = ['https://cutt.ly/wNAFRmM', 'https://cutt.ly/RNAFNO8', 'https://cutt.ly/zNAGg4v', 'https://cutt.ly/lNAGSI0', 'https://cutt.ly/lNAG0OP', 'https://cutt.ly/mNAHoof', 'https://cutt.ly/iNAHWHa', 'https://cutt.ly/4NAHOQN', 'https://cutt.ly/bNAHLl1', 'https://cutt.ly/SNAH2t5', 'https://cutt.ly/uNAJqqi'];
    image_caption[index] =['Piazza Bad Kissingen - Marina di Massa', 'Viale dei Tigli - Viareggio', 'Piazza dei Miracoli - Pisa', 'Indicazioni per Fucecchio', 'Lungo la ciclopista dell`Arno', 'Ponte Vecchio - Firenze', 'Ponte Vecchio - Firenze', 'Ponte Vecchio - Firenze', 'Ponte Vecchio - Firenze', 'Montecatini Terme', 'Lucca'];

    index += 1; // 04 MARZO 2023 - PONTE DEL DIAVOLO - BORGO A MOZZANO
    image_array[index] = ['https://cutt.ly/28PpTAX', 'https://cutt.ly/P8PpLkc', 'https://cutt.ly/f8PTyL7', 'https://cutt.ly/m8PHfbt', 'https://cutt.ly/K8PHE4L', 'https://cutt.ly/b8PJtv6',
    'https://cutt.ly/u8PJ1Iz', 'https://www.youtube.com/embed/jFco2Gpwr0U'];
    image_caption[index] =[
     '<a href = "https://www.google.com/maps?q=loc:44.147083026093696, 10.024737733940285" target="_blank" rel="noopener noreferrer">Fosdinovo</a>',
     '<a href = "https://www.google.com/maps?q=loc:44.19151200545809, 10.053493942288885" target="_blank" rel="noopener noreferrer">Ceserano</a>',
     '<a href = "https://www.google.com/maps?q=loc:44.192099, 10.2262583" target="_blank" rel="noopener noreferrer">Sermezzana (LU)</a>',
     '<a href = "https://www.google.com/maps?q=loc:44.200319905617164, 10.23167179318026" target="_blank" rel="noopener noreferrer">Passo dei Carpinelli - Minucciano (LU)</a>',
     '<a href = "https://www.google.com/maps?q=loc:44.186646046494076, 10.29298655391009" target="_blank" rel="noopener noreferrer">Piazza al Serchio (LU)</a>',
     '<a href = "https://www.google.com/maps?q=loc:43.98579338938619, 10.551717398084278" target="_blank" rel="noopener noreferrer">Ponte del Diavolo - Borgo a Mozzano (LU)</a>',
     '<a href = "https://www.google.com/maps?q=loc:43.98532443787785, 10.552531410352657" target="_blank" rel="noopener noreferrer">Ponte del Diavolo - Borgo a Mozzano (LU)</a>',
     'Clip'
];
