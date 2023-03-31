"use strict";

let codAirports = [
	{ cod: "ABC", airport: "Aeropuerto de Albacete, Albacete España." },
	{ cod: "AEP", airport: "Aeroparque Jorge Newbery, Buenos Aires Argentina." },
	{
		cod: "AFA",
		airport:
			"Aeropuerto Internacional Suboficial Ayudante Santiago Germano, San Rafael Argentina.",
	},
	{
		cod: "AGP",
		airport: "Aeropuerto de Málaga-Costa del Sol, Málaga, España.",
	},
	{
		cod: "AGT",
		airport: "Aeropuerto Internacional Guaraní, Ciudad del Este Paraguay.",
	},
	{
		cod: "AMS",
		airport: "Aeropuerto de Ámsterdam-Schiphol, Ámsterdam Países Bajos.",
	},
	{ cod: "ANF", airport: "Aeropuerto Andrés Sabella, Antofagasta Chile." },
	{
		cod: "AOL",
		airport:
			"Aeropuerto Internacional de Paso de los Libres, Paso de los Libres Argentina.",
	},
	{ cod: "ARI", airport: "Aeropuerto Internacional Chacalluta, Arica Chile." },
	{ cod: "ARN", airport: "Aeropuerto de Estocolmo-Arlanda, Estocolmo Suecia." },
	{
		cod: "ASU",
		airport: "Aeropuerto Internacional Silvio Pettirossi, Asunción Paraguay.",
	},
	{
		cod: "ATH",
		airport: "Aeropuerto Internacional Eleftherios Venizelos, Atenas Grecia.",
	},
	{
		cod: "AUA",
		airport: "Aeropuerto Internacional Reina Beatrix, Oranjestad Países Bajos.",
	},
	{ cod: "BBA", airport: "Aeródromo Balmaceda, Balmaceda Chile." },
	{ cod: "BCN", airport: "Aeropuerto de Barcelona-El Prat, Barcelona España." },
	{ cod: "BIN", airport: "Aeropuerto de Bamiyán, Bamiyán Afganistán." },
	{ cod: "BIO", airport: "Aeropuerto de Bilbao, Bilbao España." },
	{ cod: "BOD", airport: "Aeropuerto de Burdeos-Mérignac, Burdeos Francia." },
	{
		cod: "BOG",
		airport: "Aeropuerto Internacional El Dorado, Bogotá Colombia.",
	},
	{ cod: "BPM", airport: "Base Aérea de Bagram, Bagram Afganistán." },
	{
		cod: "BRC",
		airport:
			"Aeropuerto Internacional Teniente Luis Candelaria, San Carlos de Bariloche Argentina.",
	},
	{ cod: "BST", airport: "Aeropuerto de Bost, Lashkar Gah Afganistán." },
	{
		cod: "BUD",
		airport: "Aeropuerto de Budapest-Ferenc Liszt, Budapest Hugría.",
	},
	{
		cod: "CCC",
		airport: "Aeropuerto Internacional de Jardines del Rey, Cayo Coco Cuba.",
	},
	{ cod: "CCP", airport: "Aeropuerto Carriel Sur, Concepción Chile." },
	{
		cod: "CCS",
		airport:
			"Aeropuerto Internacional de Maiquetía Simón Bolívar, Caracas Venezuela.",
	},
	{
		cod: "CDG",
		airport: "Aeropuerto de París-Charles de Gaulle, París FRancia.",
	},
	{ cod: "CDT", airport: "Aeropuerto de Castellon, Castellon España." },
	{
		cod: "CGN",
		airport:
			"Aeropuerto Internacional de Colonia/Bonn Konrad Adenauer, Colonia Alemania.",
	},
	{
		cod: "CLO",
		airport: "Aeropuerto Internacional Bonilla Aragón, Cali Colombia.",
	},
	{ cod: "CLX", airport: "Aeropuerto Clorinda, Clorinda Argentina." },
	{
		cod: "CMN",
		airport: "Aeropuerto Internacional Mohammed V, Casablanca Marruecos.",
	},
	{
		cod: "CNQ",
		airport:
			"Aeropuerto Internacional Doctor Fernando Piragine Niveyro, Ciudad de Corrientes Argentina.",
	},
	{
		cod: "COC",
		airport: "Aeropuerto Comodoro Pierrestegui, Concordia Argentina.",
	},
	{
		cod: "COR",
		airport:
			"Aeropuerto Internacional Ing. Ambrosio Taravella, Córdoba Argentina.",
	},
	{
		cod: "CTC",
		airport:
			"Aeropuerto Coronel Felipe Varela San Fernando del Valle de Catamarca.",
	},
	{
		cod: "CUE",
		airport: "Aeropuerto Internacional Mariscal Lamar, Cuenca Ecuador.",
	},
	{
		cod: "CUU",
		airport:
			"Aeropuerto Internacional General Roberto Fierro Villalobos, Chihuahua México.",
	},
	{ cod: "CVU", airport: "Aeropuerto de Corvo, Isla de Corvo Portugal." },
	{
		cod: "CWB",
		airport: "Aeropuerto Internacional Afonso Pena, Curitiba Brasil.",
	},
	{
		cod: "DAY",
		airport:
			"Aeropuerto Internacional James M. Cox-Dayton, Dayton Estados Unidos.",
	},
	{
		cod: "DJE",
		airport: "Aeropuerto Internacional de Yerba-Zarzis, Yerba Túnez.",
	},
	{
		cod: "DME",
		airport: "Aeropuerto Internacional de Moscú-Domodédovo, Moscú Rusia.",
	},
	{ cod: "DOH", airport: "Aeropuerto Internacional Hamad, Doha Catar." },
	{
		cod: "DXB",
		airport: "Aeropuerto Internacional de Dubái, Dubái Emiratos Árabes Unidos.",
	},
	{ cod: "EDI", airport: "Aeropuerto de Edimburgo, Edimburgo Reino Unido." },
	{
		cod: "EGE",
		airport:
			"Aeropuerto Regional del Condado de Eagle, Eagle-Vail Estados Unidos.",
	},
	{ cod: "EIN", airport: "Aeropuerto de Eindhoven, Eindhoven Países Bajos." },
	{
		cod: "ENO",
		airport: "Aeropuerto Teniente Amín Ayub González, Encarnacion Paraguay.",
	},
	{
		cod: "EPA",
		airport:
			"Aeropuerto El Palomar, Área metropolitana de Buenos Aires Argentina.",
	},
	{
		cod: "ESR",
		airport: "Aeródromo Ricardo García Posada, El Salvador Chile.",
	},
	{
		cod: "EZE",
		airport: "Aeropuerto Internacional Ministro Pistarini, Ezeiza Argentina.",
	},
	{ cod: "FAO", airport: "Aeropuerto de Faro, Faro Portugal." },
	{ cod: "FBD", airport: "Aeropuerto de Fayzabad, Fayzabad Afganistán." },
	{ cod: "FCO", airport: "Aeropuerto de Roma-Fiumicino, Roma Italia." },
	{
		cod: "FDO",
		airport:
			"Aeropuerto Internacional de San Fernando, San Fernando Argentina.",
	},
	{ cod: "FLR", airport: "Aeropuerto de Florencia, Florencia Italia." },
	{ cod: "FLW", airport: "Aeropuerto de Flores, Isla de Flores Portugal." },
	{
		cod: "FMA",
		airport:
			"Aeropuerto Internacional de Formosa, Ciudad de Formosa Argentina.",
	},
	{
		cod: "FNC",
		airport: "Aeropuerto Internacional Cristiano Ronaldo, Funchal Portugal.",
	},
	{
		cod: "FOR",
		airport: "Aeropuerto Internacional Pinto Martins, Fortaleza Brasil.",
	},
	{
		cod: "FRA",
		airport: "Aeropuerto de Fráncfort del Meno, Fráncfort del Meno Alemania.",
	},
	{
		cod: "FRS",
		airport:
			"Aeropuerto Internacional Mundo Maya, Santa Elena de la Cruz Guatemala.",
	},
	{
		cod: "FTE",
		airport:
			"Aeropuerto Internacional Comandante Armando Tola, El Calafate Argentina.",
	},
	{
		cod: "GDL",
		airport:
			"Aeropuerto Internacional de Guadalajara, Guadalajara, Jalisco México.",
	},
	{
		cod: "GHU",
		airport: "Aeropuerto de Gualeguaychú, Gualeguaychú Argentina.",
	},
	{ cod: "GIB", airport: "Aeropuerto de Gibraltar, Gibraltar Reino Unido." },
	{
		cod: "GPO",
		airport: "Aeropuerto de General Pico, General Pico Argentina.",
	},
	{
		cod: "GRU",
		airport:
			"Aeropuerto Internacional de São Paulo-Guarulhos, São Paulo Brasil.",
	},
	{ cod: "GRW", airport: "Aeropuerto de Graciosa, Isla Graciosa Portugal." },
	{ cod: "GRX", airport: "Aeropuerto de Granada, Granada España." },
	{
		cod: "GUA",
		airport:
			"Aeropuerto Internacional La Aurora, Ciudad de Guatemala Guatemala.",
	},
	{
		cod: "GYE",
		airport:
			"Aeropuerto Internacional Jose Joaquin de Olmedo, Guayaquil Ecuador.",
	},
	{ cod: "HAJ", airport: "Aeropuerto de Hannover, Hannover Alemania." },
	{ cod: "HAM", airport: "Aeropuerto de Hamburgo, Hamburgo Alemania." },
	{
		cod: "HAV",
		airport: "Aeropuerto Internacional José Martí, La Habana Cuba.",
	},
	{ cod: "HBX", airport: "Aeropuerto de Hubli, Hubballi, Dharwad India." },
	{ cod: "HEA", airport: "Aeropuerto de Herat, Herat Afganistán." },
	{ cod: "HEL", airport: "Aeropuerto de Helsinki-Vantaa, Helsinki Finlandia." },
	{ cod: "HGL", airport: "Aeropuerto de Heligoland , Heligoland Alemania." },
	{ cod: "HHN", airport: "Aeropuerto de Fráncfort-Hahn, Fráncfort Alemania." },
	{
		cod: "HIR",
		airport: "Aeropuerto Internacional de Honiara, Honiara Islas Salomón.",
	},
	{
		cod: "HKG",
		airport: "Aeropuerto Internacional de Hong Kong, Hong Kong China.",
	},
	{
		cod: "HMO",
		airport:
			"Aeropuerto Internacional General Ignacio Pesqueira García, Hermosillo México.",
	},
	{ cod: "HND", airport: "Aeropuerto Internacional de Haneda, Tokio Japón." },
	{
		cod: "HNL",
		airport: "Aeropuerto Internacional de Honolulu, Honolulu Estados Unidos.",
	},
	{ cod: "HOG", airport: "Aeropuerto Internacional Frank País, Holguín Cuba." },
	{ cod: "HOR", airport: "Aeropuerto de Horta, Isla de Faial Portugal." },
	{
		cod: "HOU",
		airport: "Aeropuerto William P. Hobby, Houston Estados Unidos.",
	},
	{ cod: "IBZ", airport: "Aeropuerto de Ibiza, Ibiza España." },
	{
		cod: "ICN",
		airport:
			"Aeropuerto Internacional de Incheon, Incheon, Seúl Corea del Sur.",
	},
	{
		cod: "IGR",
		airport:
			"Aeropuerto Internacional de Puerto Iguazú, Puerto Iguazú Argentina.",
	},
	{ cod: "INV", airport: "Aeropuerto de Inverness, Inverness Reino Unido." },
	{
		cod: "IPC",
		airport: "Aeropuerto Internacional Mataveri, Isla de Pascua Chile.",
	},
	{
		cod: "IQQ",
		airport: "Aeropuerto Internacional Diego Aracena, Iquique Chile.",
	},
	{
		cod: "IRJ",
		airport:
			"Aeropuerto Capitán Vicente Almandos Almonacid, Ciudad de La Rioja Argentina.",
	},
	{
		cod: "IST",
		airport: "Aeropuerto Internacional Atatürk, Estambul Turquía.",
	},
	{ cod: "IVL", airport: "Aeropuerto de Ivalo, Ivalo Finlandia." },
	{ cod: "JAA", airport: "Aeropuerto de Jalalabad, Jalalabad Afganistán." },
	{ cod: "JER", airport: "Aeropuerto de Jersey, Saint Helier Reino Unido." },
	{
		cod: "JFK",
		airport:
			"Aeropuerto Internacional John F. Kennedy, Nueva York Estados Unidos.",
	},
	{ cod: "JKL", airport: "Aeropuerto Nacional de Kálimnos, Pothia Grecia." },
	{ cod: "JSR", airport: "Aeropuerto de Jessore, Jessore Bangladés." },
	{
		cod: "JUJ",
		airport:
			"Aeropuerto Internacional Gobernador Horacio Guzmán, San Salvador de Juju Argentina.",
	},
	{
		cod: "KBL",
		airport: " Aeropuerto Internacional de Kabul, Kabul Afganistán.",
	},
	{
		cod: "KDH",
		airport: " Aeropuerto Internacional de Kandahar, Kandahar Afganistán.",
	},
	{
		cod: "KEF",
		airport: " Aeropuerto Internacional de Keflavík, Reikiavik Islandia.",
	},
	{
		cod: "KGD",
		airport: " Aeropuerto de Kaliningrado-Jrabrovo, Kaliningrado Rusia.",
	},
	{
		cod: "LAD",
		airport: " Aeropuerto Internacional Quatro de Fevereiro, Luanda Angola.",
	},
	{
		cod: "LAS",
		airport:
			"Las Vegas, Mc Carran International Airport, Las Vegas Estados Unidos.",
	},
	{
		cod: "LAX",
		airport:
			"Aeropuerto Internacional de Los Ángeles, Los Ángeles Estados Unidos.",
	},
	{
		cod: "LCE",
		airport: " Aeropuerto Internacional Golosón, La Ceiba Honduras.",
	},
	{ cod: "LEI", airport: " Aeropuerto de Almería, Almería España." },
	{
		cod: "LEU",
		airport:
			"Aeropuerto de Andorra-La Seu, La Seu d'Urgell, Andorra la Vella España.",
	},
	{ cod: "LGG", airport: " Aeropuerto de Lieja, Lieja Bélgica." },
	{
		cod: "LGS",
		airport:
			"Aeropuerto Internacional Comodoro Ricardo Salomón, Malargüe Argentina.",
	},
	{ cod: "LGW", airport: " Aeropuerto de Gatwick, Londres Reino Unido." },
	{ cod: "LHR", airport: " Aeropuerto de Heathrow, Londres Reino Unido." },
	{
		cod: "LIM",
		airport: " Aeropuerto Internacional Jorge Chávez, Lima, Callao Perú.",
	},
	{ cod: "LIR", airport: " Guanacaste Aeropuerto, Guanacaste Costa Rica." },
	{ cod: "LIS", airport: " Aeropuerto de Portela, Lisboa Portugal." },
	{ cod: "LTN", airport: " Aeropuerto de Londres-Luton, Londres Reino Unido." },
	{
		cod: "LUQ",
		airport:
			"Aeropuerto Brigadier Mayor César Raúl Ojeda, Ciudad de San Luis Argentina.",
	},
	{
		cod: "MAD",
		airport: "Aeropuerto Adolfo Suárez Madrid-Barajas, Madrid España.",
	},
	{
		cod: "MCO",
		airport: "Orlando International Airport, Orlando Estados Unidos.",
	},
	{
		cod: "MCS",
		airport: "Aeropuerto de Monte Caseros, Monte Caseros Argentina.",
	},
	{
		cod: "MDE",
		airport:
			"Aeropuerto Internacional José María Cordova, Rionegro, Medellín Colombia.",
	},
	{
		cod: "MDQ",
		airport:
			"Aeropuerto Internacional Astor Piazzolla, Mar del Plata Argentina.",
	},
	{ cod: "MDX", airport: "Aeropuerto del Iberá, Mercedes Argentina." },
	{
		cod: "MDZ",
		airport:
			"Aeropuerto Internacional Gobernador Francisco Gabrielli, Ciudad de Mendoza Argentina.",
	},
	{ cod: "MEC", airport: "Aeropuerto de Manta, Manta Ecuador." },
	{
		cod: "MEX",
		airport: "Aeropuerto Internacional Benito Juárez, Ciudad de México México.",
	},
	{
		cod: "MFM",
		airport: "Aeropuerto Internacional de Macao, Ciudad de Macao China.",
	},
	{
		cod: "MGA",
		airport: "Aeropuerto Internacional Augusto C. Sandino, Managua Nicaragua.",
	},
	{
		cod: "MIA",
		airport: "Aeropuerto Internacional de Miami, Miami Estados Unidos.",
	},
	{
		cod: "MKC",
		airport:
			"Aeropuerto Urbano Charles B. Wheeler, Kansas City Estados Unidos.",
	},
	{ cod: "MLN", airport: "Aeropuerto de Melilla, Melilla España." },
	{
		cod: "MPN",
		airport: "Base Aérea de Monte Agradable, Isla Soledad Reino Unido.",
	},
	{
		cod: "MTY",
		airport: "Aeropuerto Internacional Mariano Escobedo, Monterrey México.",
	},
	{
		cod: "MUC",
		airport:
			"Aeropuerto Internacional de Múnich-Franz Josef Strauss, Munich Alemania.",
	},
	{
		cod: "MVD",
		airport: "Aeropuerto Internacional de Carrasco, Montevideo Uruguay.",
	},
	{ cod: "MXP", airport: "Aeropuerto de Milán-Malpensa, Milán Italia." },
	{
		cod: "MZR",
		airport: "Aeropuerto de Mazar-e Sarif, Mazar-e Sarif Afganistán.",
	},
	{ cod: "NAP", airport: "Aeropuerto de Nápoles-Capodichino, Nápoles Italia." },
	{ cod: "NLK", airport: "Aeropuerto de la Isla Norfolk, Kingston Australia." },
	{
		cod: "NLU",
		airport:
			"Aeropuerto Internacional Felipe Ángeles, Ciudad de México México.",
	},
	{
		cod: "OPO",
		airport: "Aeropuerto de Francisco Sá Carneiro, Oporto Portugal.",
	},
	{
		cod: "ORA",
		airport: "Aero Club Orán, San Ramón de la Nueva Orán Argentina.",
	},
	{
		cod: "ORD",
		airport: "Aeropuerto Internacional Chicago-O'Hare, Chicago Estados Unidos.",
	},
	{ cod: "ORK", airport: "Aeropuerto de Cork Cork Irlanda." },
	{ cod: "ORY", airport: "Aeropuerto de París-Orly, París Francia." },
	{
		cod: "OYA",
		airport: "Aeropuerto Dr. Diego Nicolás Díaz Colodrero, Goya Argentina.",
	},
	{
		cod: "PBR",
		airport:
			"Aeropuerto de Puerto Barrios “Aeropuerto Internacional La Tierra de Dios”, Puerto Barrios Guatemala.",
	},
	{
		cod: "PDL",
		airport: "Aeropuerto João Paulo II, Isla de São Miguel Portugal.",
	},
	{
		cod: "PDP",
		airport:
			"Aeropuerto Internacional de Punta del Este, Maldonado y Punta del Este Uruguay.",
	},
	{
		cod: "PHL",
		airport:
			"Aeropuerto Internacional de Filadelfia, Filadelfia Estados Unidos.",
	},
	{ cod: "PIX", airport: "Aeropuerto de Pico, Isla del Pico Portugal." },
	{
		cod: "PJC",
		airport: "Aeropuerto Doctor Fuster, Pedro Juan Caballero Paraguay.",
	},
	{ cod: "PNA", airport: "Aeropuerto de Pamplona, Noáin España." },
	{
		cod: "PRA",
		airport: "Aeropuerto General Justo José de Urquiza, Paraná Argentina.",
	},
	{
		cod: "PRQ",
		airport:
			"Aeropuerto de Presidencia Roque Sáenz Peña, Presidencia Roque Sáenz Peña Argentina.",
	},
	{
		cod: "PSY",
		airport:
			"Aeropuerto de Puerto Argentino/Stanley, Puerto Argentino/Stanley Reino Unido.",
	},
	{
		cod: "PTY",
		airport: "Aeropuerto Internacional de Tocumen, Ciudad de Panamá Panamá.",
	},
	{
		cod: "PUJ",
		airport:
			"Aeropuerto Internacional de Punta Cana, Punta Cana República Dominicana.",
	},
	{
		cod: "PUQ",
		airport:
			"Aeropuerto Internacional Presidente Carlos Ibáñez del Campo, Punta Arenas Chile.",
	},
	{
		cod: "PXO",
		airport: "Aeropuerto de Porto Santo, Isla de Porto Santo Portugal.",
	},
	{
		cod: "QGY",
		airport: "Aeropuerto Internacional de Györ-Pér, Györ Hungría.",
	},
	{ cod: "QRC", airport: "Aeródromo de la Independencia, Rancagua Chile." },
	{ cod: "QSA", airport: "Aeropuerto de Sabadell, Sabadell España." },
	{
		cod: "RAK",
		airport: "Aeropuerto de Marrakech-Menara, Marrakech Marruecos.",
	},
	{ cod: "RBA", airport: "Aeropuerto de Rabat-Salé, Rabat Marruecos." },
	{
		cod: "RES",
		airport:
			"Aeropuerto Internacional de Resistencia, Ciudad de Resistencia Argentina.",
	},
	{ cod: "REU", airport: "Aeropuerto de Reus, Reus, Tarragona España." },
	{
		cod: "RGA",
		airport:
			"Aeropuerto Internacional Gob. Ramón Trejo Noel, Río Grande Argentina.",
	},
	{
		cod: "RHD",
		airport:
			"Aeropuerto Internacional Termas de Río Hondo, Termas de Río Hondo Argentina.",
	},
	{
		cod: "RLO",
		airport: "Aeropuerto Internacional Valle del Conlara, Merlo Argentina.",
	},
	{
		cod: "RMU",
		airport:
			"Aeropuerto Internacional de la Región de Murcia, Región de Murcia España.",
	},
	{
		cod: "ROS",
		airport: "Aeropuerto Internacional Rosario, Rosario Argentina.",
	},
	{ cod: "RRG", airport: "Aeropuerto Sir Gaëtan Duval, Rodrigues Mauricio." },
	{
		cod: "RSA",
		airport: "Aeropuerto de Santa Rosa, Ciudad de Santa Rosa Argentina.",
	},
	{
		cod: "RUH",
		airport: "Aeropuerto Internacional Rey Khalid, Riad Arabia Saudita.",
	},
	{
		cod: "SAL",
		airport:
			"Aeropuerto Internacional de El Salvador San Óscar Arnulfo Romero y Galdámez, San Salvador El Salvador.",
	},
	{
		cod: "SAP",
		airport:
			"Aeropuerto Internacional Ramon Villeda Morales, San Pedro Sula Honduras.",
	},
	{ cod: "SBZ", airport: "Aeropuerto Internacional de Sibiu, Sibiu Rumania." },
	{
		cod: "SCL",
		airport:
			"Aeropuerto Internacional Arturo Merino Benítez, Santiago de Chile Chile.",
	},
	{
		cod: "SCU",
		airport:
			"Aeropuerto Internacional Antonio Maceo y Grajales, Santiago de Cuba Cuba.",
	},
	{
		cod: "SDE",
		airport:
			"Aeropuerto Vicecomodoro Ángel de la Paz Aragonés, Ciudad de Santiago del Estero Argentina.",
	},
	{
		cod: "SDQ",
		airport:
			"Aeropuerto Internacional José Francisco Peña Gómez, Santo Domingo República Dominicana.",
	},
	{
		cod: "SFM",
		airport:
			"Aeropuerto Internacional de Sacramento, Sacramento Estados Unidos.",
	},
	{ cod: "SFN", airport: "Aeropuerto de Sauce Viejo, Santa Fe Argentina." },
	{
		cod: "SIN",
		airport: "Aeropuerto Internacional de Singapur-Changi, Singapur Singapur.",
	},
	{
		cod: "SJO",
		airport: "Aeropuerto Internacional Juan Santamaría, San José Costa Rica.",
	},
	{
		cod: "SJZ",
		airport: "Aeropuerto de São Jorge, Isla de São Jorge Portugal.",
	},
	{
		cod: "SKG",
		airport: "Aeropuerto Internacional Macedonia, Tesalónica Grecia.",
	},
	{
		cod: "SLA",
		airport:
			"Aeropuerto Internacional de Salta Martín Miguel de Güemes, Ciudad de Salta Argentina.",
	},
	{
		cod: "SMA",
		airport: "Aeropuerto de Santa Maria, Isla de Santa Maria Portugal.",
	},
	{
		cod: "SNU",
		airport: "Aeropuerto Internacional Abel Santamaría, Santa Clara Cuba.",
	},
	{
		cod: "SUF",
		airport: "Aeropuerto Internacional de Lamezia Terme, Lamezia Terme Italia.",
	},
	{
		cod: "SVO",
		airport: "Aeropuerto Internacional de Moscú-Sheremétievo, Moscú Rusia.",
	},
	{ cod: "SVQ", airport: "Aeropuerto de Sevilla, Sevilla España." },
	{ cod: "SXB", airport: "Aeropuerto de Estrasburgo, Estrasburgo Francia." },
	{
		cod: "SYD",
		airport: "Aeropuerto Internacional Kingsford Smith, Sídney Australia.",
	},
	{ cod: "TER", airport: "Aeropuerto de Lajes, Isla Terceira Portugal." },
	{ cod: "TFN", airport: "Aeropuerto de Tenerife Norte, Tenerife España." },
	{ cod: "TFS", airport: "Aeropuerto de Tenerife Sur, Tenerife España." },
	{ cod: "TGU", airport: "Aeropuerto de Toncontín, Tegucigalpa Honduras." },
	{ cod: "THF", airport: "Aeropuerto de Berlín-Tempelhof, Berlín Alemania." },
	{ cod: "TLS", airport: "Aeropuerto de Toulouse Blagnac, Toulouse Francia." },
	{
		cod: "TLV",
		airport: "Aeropuerto Internacional Ben Gurión, Tel Aviv Israel.",
	},
	{
		cod: "TPE",
		airport: "Aeropuerto Internacional de Taiwán Taoyuan, Taipéi Taiwán.",
	},
	{
		cod: "TRS",
		airport: "Aeropuerto de Trieste - Friuli Venezia Giulia, Trieste Italia.",
	},
	{
		cod: "TSE",
		airport: "Aeropuerto Internacional de Astaná, Astaná Kazajistán.",
	},
	{
		cod: "TTG",
		airport: "Aeropuerto General Enrique Mosconi/Tartagal, Tartagal Argentina.",
	},
	{ cod: "TUR", airport: "Aeropuerto de Turku, Turku Finlandia." },
	{
		cod: "UIO",
		airport: "Aeropuerto Internacional Mariscal Sucre, Tababela Ecuador.",
	},
	{
		cod: "USH",
		airport: "Aeropuerto Internacional Malvinas Argentinas, Ushuaia Argentina.",
	},
	{
		cod: "UZU",
		airport: "Aeropuerto de Curuzú Cuatiá, Curuzú Cuatiá Argentina.",
	},
	{ cod: "VCP", airport: "Aeropuerto de Viracopos, Sao Paulo Brasil." },
	{ cod: "VDC", airport: "Aeropuerto de Vitoria da Conquista, Bahia Brasil." },
	{ cod: "VDM", airport: "Aeropuerto Gobernador Castello, Viedma Argentina." },
	{ cod: "VGO", airport: "Aeropuerto de Vigo, Vigo España." },
	{ cod: "VIE", airport: "Aeropuerto de Viena-Schwechat, Viena Austria." },
	{
		cod: "VKO",
		airport: "Aeropuerto Internacional de Moscú-Vnúkovo, Moscú Rusia.",
	},
	{ cod: "VLC", airport: "Aeropuerto de Valencia, Manises España." },
	{ cod: "VLL", airport: "Aeropuerto de Villanubla, Valladolid España." },
	{
		cod: "VME",
		airport: "Aeropuerto de Villa Reynolds, Villa Mercedes Argentina.",
	},
	{
		cod: "VVI",
		airport:
			"Aeropuerto Internacional Viru Viru, Santa Cruz de la Sierra Bolivia.",
	},
	{
		cod: "WLG",
		airport:
			"Aeropuerto Internacional de Wellington, Wellington Nueva Zelanda.",
	},
	{
		cod: "XPL",
		airport: "Aeropuerto Internacional de Comayagua, Comayagua Honduras.",
	},
	{ cod: "XRY", airport: "Aeropuerto de Jerez, Jerez España." },
	{ cod: "YFB", airport: "Aeropuerto de Iqaluit, Iqaluit Canadá." },
	{
		cod: "YHU",
		airport: "Aeropuerto de Montreal-Saint Hubert, Montreal Canadá.",
	},
	{
		cod: "YHZ",
		airport: "Aeropuerto Internacional de Halifax-Stanfield, Halifax Canadá.",
	},
	{ cod: "YOW", airport: "Aeropuerto Internacional de Ottawa, Ottawa Canadá." },
	{
		cod: "YQB",
		airport: "Aeropuerto Internacional Jean-Lesage de Quebec, Quebec Canadá.",
	},
	{ cod: "YRB", airport: "Aeropuerto de Resolute Bay, Resolute Canadá." },
	{
		cod: "YUL",
		airport:
			"Aeropuerto Internacional Pierre Elliott Trudeau, Montreal Canadá.",
	},
	{ cod: "YVM", airport: "Aeropuerto de Qikiqtarjuaq, Qikiqtarjuaq Canadá." },
	{
		cod: "YVR",
		airport: "Aeropuerto Internacional de Vancouver, Vancouver Canadá.",
	},
	{
		cod: "YWG",
		airport:
			"Aeropuerto Internacional James Armstrong Richardson, Winnipeg Canadá.",
	},
	{ cod: "YYY", airport: "Aeropuerto de Mont-Joli, Mont-Joli Canadá." },
	{
		cod: "YYZ",
		airport: "Aeropuerto Internacional Toronto Pearson, Toronto Canadá.",
	},
	{ cod: "ZAG", airport: "Aeropuerto de Zagreb-Pleso, Zagreb Croacia." },
	{ cod: "ZAZ", airport: "Aeropuerto de Zaragoza, Zaragoza España." },
];

// export { codAirports };

// ############################################
// ############ CONCLUSIÓN ####################

let input1 = document.getElementById("originToolTip");

input1.addEventListener("keyup", (event) => {
	console.log(event);
	// Caturo el evento
	// Me falta confirmar los datos entre event y codAirports.cod
	if (event.target.value.length === 0) {
		// Reservo un espacio en el DOM
		let domOriginLi = event.createDocumentFragment();
		// Si es true con el for mostrarlos
		// for (let i = 0; i < codAirports.length; i++) {
		for (let f of codAirports) {
			// Imprimo los cód de los airports como string para imprimir en interfaz
			let h = codAirports[i].cod + " " + codAirports[i].airport;
			console.log(h);
			// Hasta aquí imprime bien pero todos.
			// Pienso que quizas un filter me vendría bien...
			// Debo agregar en el ul cada li.
			let plusLi = document.createElement("li");
			plusLi.innerHTML = `${h}`;
			// Permitir el evento click sobre el seleccionado
			plusLi.addEventListener("click", (plusLiEvent) => {
				// Almaceno el texto de lo que seleccioné
				let capturePlusE = plusLiEvent.target.textContent;
				// enfoco
				input1.select();
				// selecciono
				input1.select();
			});
			// Imprimir el seleccionado en el input
			domOriginLi.appenChild(plusLi);
			// Repetir para cada input
		}
	} else {
		// Reservo un espacio en el DOM
		let domOriginLi1 = event.createDocumentFragment();
		// Debo pensar como desarrollarlo...
		// Debo agregar en el ul cada li.
		let plusLi1 = document.createElement("li");
		// Guardo la variable del mensaje que quiero mostrar
		let indicate = "Datos no válidos";
		// Agrego
		plusLi1.innerHTML = `${indicate}`;
		// Imprimo
		domOriginLi1.appenChild(plusLi1);
	}
});

// ########################################################
// ########## CON EL H ME IMPRIME TODOS ###################

// function inputAirOrigin(e) {
// 	window.setInterval(() => {
// 		if (e.key == codAirports[i].cod) {
// 			// la condición de que si ese array devuelto cumple con:
// 			if (e.target.value.length >= 1) {
// 				let ulDestinationToolTip = document.querySelector(
// 					"#destinationToolTip"
// 				);
// 				let h = codAirports[i].cod + " " + codAirports[i].airport;
// 				// Creo un Li para agregar los resultados
// 				let autocompLi = document.createElement("li");
// 				autocompLi.innerHTML = `${h}`;
// 				// Agrego
// 				ulDestinationToolTip.append(autocompLi);
// 			}
// 			console.log(e);
// 		}
// 	});
// }

// Llamo los inputs
// let autocompleteOriginAirport = document.getElementById("#origin");
// let autocompleteDestinationAirport = document.getElementById("#destination");

// // Me traigo los tools
// let ul1OriginToolTip = document.getElementById("#originToolTip");
// let ul2DestinationToolTip = document.getElementById("#destinationToolTip");

// // Listener para la búsqueda
// inputOriginAirport.addEventListener("keydown", originIntroHandlers);
// inputDestinationAirport.addEventListener("keydown", destinationIntroHandlers);

//#### Con esto estoy imprimiendo los datos del cod y airport####//
// codAirports[i].cod + " " + codAirports[i].airport;

// #######################
// #############################

// {
/* <ul id="originToolTip"> // aquí se deben imprimir
	<li></li> */
// }
// let autocompleteOriginAirport = document.getElementById("#origin");

// autocompleteOriginAirport.addEventListener("keydown", function (e) {
// 	// let airportO = document
// 	e.preventDefault();
// 	autocompleteOriginAirport.children;
// });

// for (let i = 0; i < codAirports.length; i++) {
// 	// Imprimo los cód de los airports como string para imprimir en interfaz
// 	let h = codAirports[i].cod + " " + codAirports[i].airport;
// 	console.log(h);
// 	// Hasta aquí imprime bien pero todos.
// }
// ##############################
// ##########################

// async function originIntroHandlers(e) {
// if (codAirports.cod === e.key) {
// 	let autocompleteLi = document.createElement("li");
// 	autocompleteLi.innerHTML =
// `${codAirports[i].cod}` + " " + `${codAirports[i].airport}`;

// ulDestinationToolTip.style.display = "block";
// ulDestinationToolTip.innerHTML = "";
// let newLi = document.createElement("li");
// newLi.innerHTML = {codAirports[i].cod + " " + codAirports[i].airport};
// ulDestinationToolTip.append(newLi);
// 	}
// }

// Con esto me devuelve los objetos ordenados (aunque lo implemento por seguir un orden porque no es necesario, ya están ordenados)
// let sortedcodAirports = codAirports.airport.sort();

// Le indico que si cumple la condición de lo capturado en el evento
// if (eventocapturado === codAirports.cod) {
// }

// // Lo referencio donde aparecerán
// let input = document.querySelector("input");
// // console.log(input);

// // En este caso debemos ejecutar la función Keyup
// input.addEventListener("keyup", (e) => {
// 	for (let i of sortedcodAirports) {
// 		if (key.length < 3) {
// 			console.log(sortedcodAirports[i]);
// 		}
// 	}
// });

// ####################################
// ##########################################
// ##############################################

// `https://test.api.amadeus.com/v1/reference-data/locations?subType=AIRPORT&keyword=${searchString}`;

// ######################################################################################
// ############### PROBÉ LLAMANDO ESTA FUNCIÓN PERO NO DEVUELVE NADA ####################
// ######################################################################################
// function autocomplete(inp, codAirports) {
// 	// La función toma dos argumentos, el texto y el array donde cogerá los elementos
// 	var currentFocus;
// 	// Ejecutamos la función cuando alguien escribe
// 	inp.addEventListener("input", function (e) {
// 		var a,
// 			b,
// 			i,
// 			val = this.value;
// 		// Cerramos cualquier lista que haya en el value del li
// 		closeAllLists();
// 		if (!val) {
// 			return false;
// 		}
// 		currentFocus = -1;
// 		// Creamos un div con que contengan los items values
// 		a = document.createElement("DIV");
// 		a.setAttribute("id", this.id + "autocomplete-list");
// 		a.setAttribute("class", "autocomplete-items");
// 		// Agregamos con la append un hijo para el autocompletado
// 		this.parentNode.appendChild(a);
// 		// Buscamos el item en el array ####
// 		for (i = 0; i < codAirports.length; i++) {
// 			// Checkeamos si las letras corresponden con los values
// 			if (
// 				codAirports[i].substr(0, val.length).toUpperCase() == val.toUpperCase()
// 			) {
// 				// Creamos un DIV que para ir match los elementos
// 				b = document.createElement("DIV");
// 				// Se hacen las letras negrita.
// 				b.innerHTML =
// 					"<strong>" + codAirports[i].substr(0, val.length) + "</strong>";
// 				b.innerHTML += codAirports[i].substr(val.length);
// 				// Agregamos un input donde se agregará los datos evaluados.
// 				b.innerHTML += "<input type='hidden' value='" + codAirports[i] + "'>";
// 				// Se ejecuta la función para cuando se hace click en el DIV
// 				b.addEventListener("click", function (e) {
// 					// Insertamos el value para el autocompletado del texto
// 					inp.value = this.getElementsByTagName("input")[0].value;
// 					/// Cerramos cualquier lista que  pueda estarse ejecutando
// 					// para el autocompletado
// 					closeAllLists();
// 				});
// 				a.appendChild(b);
// 			}
// 		}
// 	});
// 	// Ejecutamos la función del Keyboard
// 	inp.addEventListener("keydown", function (e) {
// 		var x = document.getElementById(this.id + "autocomplete-list");
// 		if (x) x = x.getElementsByTagName("div");
// 		if (e.keyCode == 40) {
// 			// Si se descarga la Keys se aumenta el focus
// 			currentFocus++;
// 			// Se hace el ítem más visible
// 			addActive(x);
// 		} else if (e.keyCode == 38) {
// 			//up
// 			// En caso contrario se decrese el focus
// 			currentFocus--;
// 			// Se hace le ítem más visible
// 			addActive(x);
// 		} else if (e.keyCode == 13) {
// 			// Si el enter está presionado aplicamos el preventDefault
// 			e.preventDefault();
// 			if (currentFocus > -1) {
// 				// Simulamos un click en el ítem
// 				if (x) x[currentFocus].click();
// 			}
// 		}
// 	});
// 	function addActive(x) {
// 		// La función de clasificar se activa
// 		if (!x) return false;
// 		// Se remueven todo los "active" de todas las clases
// 		removeActive(x);
// 		if (currentFocus >= x.length) currentFocus = 0;
// 		if (currentFocus < 0) currentFocus = x.length - 1;
// 		// Se agrega la class "autocomplete-active":
// 		x[currentFocus].classList.add("autocomplete-active");
// 	}
// 	function removeActive(x) {
// 		// Función para remover la clase "active"  ###### Preguntar acá
// 		for (var i = 0; i < x.length; i++) {
// 			x[i].classList.remove("autocomplete-active");
// 		}
// 	}
// 	function closeAllLists(elmnt) {
// 		// Se cierran todos los autocompletados excepto el que está
// 		// pasando los argumentos
// 		var x = document.getElementsByClassName("autocomplete-items");
// 		for (var i = 0; i < x.length; i++) {
// 			if (elmnt != x[i] && elmnt != inp) {
// 				x[i].parentNode.removeChild(x[i]);
// 			}
// 		}
// 	}
// 	// Se ejecuta la función cada vez que se hace click en el documento
// 	document.addEventListener("click", function (e) {
// 		closeAllLists(e.target);
// 	});
// }
