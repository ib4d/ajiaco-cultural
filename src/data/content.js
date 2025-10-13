// New schema with subtopics.
// For brevity, we fully expand Block 1 (30 subtopics).
// Other blocks are scaffolded; you approved same density — I’ll fill them next once you confirm this works end-to-end.

export const CONTENT = [
  {
    id: "b1",
    emoji: "🗺️",
    color: "azul",
    title: "¡Conoce a Cuba! (Geografía & Patrimonio)",
    chapters: [
      {
        id: "b1c1",
        title: "La Isla y sus límites",
        summary: "Ubicación, regiones y naturaleza de Cuba.",
        subtopics: [
          {
            id: "b1c1s1",
            title: "El archipiélago y sus cayos",
            summary: "Cuba es un archipiélago con islas principales y cayos como Jardines del Rey y Canarreos.",
            quiz: [
              { type: "mc", question: "¿Qué es un cayo?", options: ["Isla pequeña de arena o coral", "Península", "Montaña"], answer: 0, difficulty: "easy" },
              { type: "tf", question: "Jardines del Rey es un conjunto de cayos.", answer: true, difficulty: "easy" },
              { type: "mc", question: "¿Qué cayo pertenece al archipiélago de los Canarreos?", options: ["Cayo Largo del Sur", "Cayo Coco", "Cayo Santa María"], answer: 0, difficulty: "hard" }
            ]
          },
          {
            id: "b1c1s2",
            title: "Regiones: Occidente, Centro y Oriente",
            summary: "La división tradicional en Occidente, Centro y Oriente ayuda a ubicar provincias y paisajes.",
            quiz: [
              { type: "mc", question: "¿En qué región está Santiago de Cuba?", options: ["Oriente", "Centro", "Occidente"], answer: 0, difficulty: "easy" },
              { type: "tf", question: "Pinar del Río se ubica en la región Oriental.", answer: false, difficulty: "easy" },
              { type: "mc", question: "¿Qué cordillera define parte del Oriente?", options: ["Sierra Maestra", "Cordillera Central", "Sierra Nevada"], answer: 0, difficulty: "hard" }
            ]
          },
          {
            id: "b1c1s3",
            title: "Sistemas montañosos",
            summary: "Guaniguanico (Occidente), Escambray (Centro) y Sierra Maestra (Oriente) moldean el relieve cubano.",
            quiz: [
              { type: "mc", question: "¿Qué sierra está en el centro del país?", options: ["Escambray", "Sierra Maestra", "Guadarrama"], answer: 0, difficulty: "easy" },
              { type: "tf", question: "El Pico Turquino es la cumbre más alta de Cuba.", answer: true, difficulty: "hard" },
              { type: "mc", question: "¿En qué sierra se encuentra el Pico Turquino?", options: ["Sierra Maestra", "Guaniguanico", "Escambray"], answer: 0, difficulty: "hard" }
            ]
          },
          {
            id: "b1c1s4",
            title: "Ríos, valles y cuevas",
            summary: "El Cauto es el río más largo; destacan el valle de Viñales y la Gran Caverna de Santo Tomás.",
            quiz: [
              { type: "mc", question: "¿Cuál es el río más largo de Cuba?", options: ["Cauto", "Almendares", "Toa"], answer: 0, difficulty: "easy" },
              { type: "tf", question: "Viñales es famoso por sus mogotes.", answer: true, difficulty: "easy" },
              { type: "mc", question: "La Gran Caverna de Santo Tomás está en…", options: ["Pinar del Río", "Granma", "Ciego de Ávila"], answer: 0, difficulty: "hard" }
            ]
          },
          {
            id: "b1c1s5",
            title: "Costas y mares que la rodean",
            summary: "Estrecho de la Florida al norte, Golfo de México al noroeste y mar Caribe al sur.",
            quiz: [
              { type: "mc", question: "¿Qué estrecho separa a Cuba de Estados Unidos?", options: ["Estrecho de la Florida", "Magallanes", "Gibraltar"], answer: 0, difficulty: "easy" },
              { type: "tf", question: "El mar Caribe baña toda la costa norte de Cuba.", answer: false, difficulty: "hard" },
              { type: "mc", question: "¿Qué golfo está al noroeste de Cuba?", options: ["Golfo de México", "Golfo de Honduras", "Golfo de Cádiz"], answer: 0, difficulty: "hard" }
            ]
          },
          {
            id: "b1c1s6",
            title: "Clima tropical y ciclones",
            summary: "Dos estaciones: lluviosa y seca. Los ciclones influyen y requieren preparación.",
            quiz: [
              { type: "tf", question: "Cuba puede ser afectada por huracanes.", answer: true, difficulty: "easy" },
              { type: "mc", question: "¿En qué periodo llueve más?", options: ["Mayo–octubre", "Noviembre–abril", "Enero–marzo"], answer: 0, difficulty: "easy" },
              { type: "mc", question: "¿Qué estructura coordina la preparación ante ciclones?", options: ["Defensa Civil", "Servicio Forestal", "Guardia Marina"], answer: 0, difficulty: "hard" }
            ]
          },
          {
            id: "b1c1s7",
            title: "Parques y áreas protegidas",
            summary: "Ciénaga de Zapata, Parque Nacional Alejandro de Humboldt (UNESCO) y Topes de Collantes son áreas claves.",
            quiz: [
              { type: "mc", question: "Sitio Ramsar en Matanzas:", options: ["Ciénaga de Zapata", "Viñales", "Guardalavaca"], answer: 0, difficulty: "easy" },
              { type: "tf", question: "El Parque Alejandro de Humboldt es Patrimonio de la Humanidad.", answer: true, difficulty: "hard" },
              { type: "mc", question: "Topes de Collantes está en la sierra…", options: ["Escambray", "Maestra", "Guaniguanico"], answer: 0, difficulty: "hard" }
            ]
          },
          {
            id: "b1c1s8",
            title: "Fauna y flora endémica",
            summary: "Tocororo (ave nacional), almiquí y palma real simbolizan la biodiversidad cubana.",
            quiz: [
              { type: "mc", question: "¿Cuál es el ave nacional de Cuba?", options: ["Tocororo", "Flamenco", "Quetzal"], answer: 0, difficulty: "easy" },
              { type: "tf", question: "El almiquí es un mamífero endémico de Cuba.", answer: true, difficulty: "easy" },
              { type: "mc", question: "Árbol nacional de Cuba:", options: ["Palma real", "Ceiba", "Araucaria"], answer: 0, difficulty: "hard" }
            ]
          },
          {
            id: "b1c1s9",
            title: "Arrecifes y ecosistemas marinos",
            summary: "Barreras de coral, praderas de seibadal y manglares protegen la costa.",
            quiz: [
              { type: "tf", question: "Los manglares ayudan a frenar el oleaje.", answer: true, difficulty: "easy" },
              { type: "mc", question: "Un riesgo actual para los corales:", options: ["Blanqueamiento", "Nieve", "Desertificación"], answer: 0, difficulty: "hard" },
              { type: "mc", question: "Zona famosa por el buceo:", options: ["Jardines de la Reina", "Altiplano", "Atacama"], answer: 0, difficulty: "hard" }
            ]
          },
          {
            id: "b1c1s10",
            title: "Fronteras marítimas y ZEE",
            summary: "La Zona Económica Exclusiva (ZEE) define derechos sobre recursos marítimos y acuerdos con vecinos.",
            quiz: [
              { type: "mc", question: "ZEE significa:", options: ["Zona Económica Exclusiva", "Zona Especial Europea", "Zona de Energía Eléctrica"], answer: 0, difficulty: "hard" },
              { type: "tf", question: "Cuba comparte límites marítimos con varios países.", answer: true, difficulty: "easy" },
              { type: "mc", question: "País con acuerdo de límites marítimos con Cuba:", options: ["México", "Perú", "Chile"], answer: 0, difficulty: "hard" }
            ]
          }
        ]
      },
      {
        id: "b1c2",
        title: "La Capital Maravilla",
        summary: "La Habana: plazas, malecón y gestión patrimonial.",
        subtopics: [
          {
            id: "b1c2s1",
            title: "Plazas de La Habana Vieja",
            summary: "Plaza de Armas, Plaza Vieja, Catedral y San Francisco reflejan el trazado colonial.",
            quiz: [
              { type: "mc", question: "Plaza frente a la Lonja del Comercio con leones y fuente:", options: ["Plaza de San Francisco", "Plaza de la Catedral", "Plaza Vieja"], answer: 0, difficulty: "hard" },
              { type: "tf", question: "La Plaza de Armas es la más antigua.", answer: true, difficulty: "easy" },
              { type: "mc", question: "La Catedral habanera es de estilo:", options: ["Barroco cubano", "Neoclásico puro", "Gótico"], answer: 0, difficulty: "hard" }
            ]
          },
          {
            id: "b1c2s2",
            title: "Malecón habanero",
            summary: "Muro costero, paseo social y símbolo urbano que bordea la costa norte.",
            quiz: [
              { type: "tf", question: "El Malecón bordea la costa norte de La Habana.", answer: true, difficulty: "easy" },
              { type: "mc", question: "Barrios conectados por el Malecón:", options: ["Centro Habana y Vedado", "Guanabacoa y Regla", "Cojímar y Alamar"], answer: 0, difficulty: "easy" },
              { type: "mc", question: "Material principal del muro:", options: ["Hormigón", "Adobe", "Madera"], answer: 0, difficulty: "hard" }
            ]
          },
          {
            id: "b1c2s3",
            title: "Castillo del Morro y La Cabaña",
            summary: "Sistema defensivo que protege la entrada de la bahía de La Habana.",
            quiz: [
              { type: "mc", question: "¿Qué fortalezas protegen la entrada de la bahía?", options: ["Morro y Cabaña", "Capitolio y Prado", "Faro y Torre Iberdrola"], answer: 0, difficulty: "easy" },
              { type: "tf", question: "La Cabaña es del siglo XVIII.", answer: true, difficulty: "hard" },
              { type: "mc", question: "Señal tradicional nocturna:", options: ["El Cañonazo de las 9", "Toque de diana", "Salva al amanecer"], answer: 0, difficulty: "hard" }
            ]
          },
          {
            id: "b1c2s4",
            title: "Capitolio y Paseo del Prado",
            summary: "Eje cívico monumental con la estatua La República y un paseo arbolado hacia el Malecón.",
            quiz: [
              { type: "mc", question: "Estatua dentro del Capitolio:", options: ["La República", "El Coloso", "La Giraldilla"], answer: 0, difficulty: "easy" },
              { type: "tf", question: "El Prado conecta el Capitolio con el Malecón.", answer: true, difficulty: "easy" },
              { type: "mc", question: "Estilo del Capitolio:", options: ["Ecléctico con cúpula", "Brutalista", "Románico"], answer: 0, difficulty: "hard" }
            ]
          },
          {
            id: "b1c2s5",
            title: "Barrios: Vedado, Miramar y Centro Habana",
            summary: "El Vedado moderno, Miramar con embajadas y Centro Habana popular forman un mosaico urbano.",
            quiz: [
              { type: "mc", question: "Zona de embajadas y avenidas arboladas:", options: ["Miramar", "Centro Habana", "Regla"], answer: 0, difficulty: "easy" },
              { type: "tf", question: "El Vedado tiene un trazado en damero amplio.", answer: true, difficulty: "easy" },
              { type: "mc", question: "Ícono moderno del Vedado:", options: ["Edificio FOCSA", "Torre Iberdrola", "One World Trade Center"], answer: 0, difficulty: "hard" }
            ]
          },
          {
            id: "b1c2s6",
            title: "Arquitecturas superpuestas",
            summary: "Capas coloniales, neoclásicas, art déco y racionalistas conviven en fachadas y portales.",
            quiz: [
              { type: "mc", question: "Edificio art déco icónico en La Habana:", options: ["Edificio Bacardí", "Palacio Real", "Alcázar de Sevilla"], answer: 0, difficulty: "hard" },
              { type: "tf", question: "Existen ejemplos racionalistas de mediados del siglo XX.", answer: true, difficulty: "hard" },
              { type: "mc", question: "Rasgo típico neoclásico:", options: ["Columnas y frontones", "Arbotantes", "Cúpulas bulbosas"], answer: 0, difficulty: "easy" }
            ]
          },
          {
            id: "b1c2s7",
            title: "Museos principales",
            summary: "Museo de la Revolución, Bellas Artes (Arte Cubano y Universal), del Ron y de la Ciudad.",
            quiz: [
              { type: "mc", question: "Sede del antiguo Palacio Presidencial:", options: ["Museo de la Revolución", "Museo Nacional de Bellas Artes", "Armería"], answer: 0, difficulty: "easy" },
              { type: "tf", question: "Bellas Artes distingue entre arte cubano y universal.", answer: true, difficulty: "easy" },
              { type: "mc", question: "Figura clave en la restauración habanera:", options: ["Eusebio Leal", "Ernesto Lecuona", "Juan Gualberto Gómez"], answer: 0, difficulty: "hard" }
            ]
          },
          {
            id: "b1c2s8",
            title: "Transporte habanero",
            summary: "Ómnibus, “almendrones”, lanchita de Regla y túnel de la bahía conectan la ciudad.",
            quiz: [
              { type: "mc", question: "Ferry hacia Regla:", options: ["Lanchita de Regla", "Chalupa de Cojímar", "Barca de Habana"], answer: 0, difficulty: "easy" },
              { type: "tf", question: "Los “almendrones” son autos clásicos.", answer: true, difficulty: "easy" },
              { type: "mc", question: "Conecta La Habana Vieja con el Este:", options: ["Túnel de la Bahía", "Puente de Bacunayagua", "Viaducto del Yayabo"], answer: 0, difficulty: "hard" }
            ]
          },
          {
            id: "b1c2s9",
            title: "Gestión patrimonial (UNESCO)",
            summary: "La Oficina del Historiador impulsó la restauración integral con fuerte función social.",
            quiz: [
              { type: "tf", question: "El centro histórico de La Habana es Patrimonio Mundial.", answer: true, difficulty: "easy" },
              { type: "mc", question: "Institución que lideró la recuperación:", options: ["Oficina del Historiador", "Ministerio de Cultura de México", "British Heritage"], answer: 0, difficulty: "hard" },
              { type: "mc", question: "Beneficio social asociado:", options: ["Vivienda y espacios culturales", "Minería", "Plantaciones de trigo"], answer: 0, difficulty: "easy" }
            ]
          },
          {
            id: "b1c2s10",
            title: "Símbolos y personajes habaneros",
            summary: "La Giraldilla, Alicia Alonso, Ignacio Piñeiro y Benny Moré son referentes culturales.",
            quiz: [
              { type: "mc", question: "Bailarina del Ballet Nacional:", options: ["Alicia Alonso", "Irene Rodríguez", "Celia Cruz"], answer: 0, difficulty: "easy" },
              { type: "tf", question: "Benny Moré fue un cantante emblemático.", answer: true, difficulty: "easy" },
              { type: "mc", question: "La Giraldilla mira hacia:", options: ["El mar / salida de la bahía", "El sur", "El este de la ciudad"], answer: 0, difficulty: "hard" }
            ]
          }
        ]
      },
      {
        id: "b1c3",
        title: "Ciudades Museo",
        summary: "Trinidad, Cienfuegos, Camagüey y otras villas con valor histórico.",
        subtopics: [
          {
            id: "b1c3s1",
            title: "Trinidad y el Valle de los Ingenios",
            summary: "Centro azucarero colonial con casas, plazas y torres; Patrimonio Mundial.",
            quiz: [
              { type: "mc", question: "Torre icónica del valle:", options: ["Manaca Iznaga", "La Giralda", "Hércules"], answer: 0, difficulty: "hard" },
              { type: "tf", question: "Trinidad es Patrimonio de la Humanidad.", answer: true, difficulty: "easy" },
              { type: "mc", question: "Provincia actual de Trinidad:", options: ["Sancti Spíritus", "Villa Clara", "Matanzas"], answer: 0, difficulty: "hard" }
            ]
          },
          {
            id: "b1c3s2",
            title: "Cienfuegos, la Perla del Sur",
            summary: "Trazado neoclásico, Parque Martí y Palacio de Valle junto a la bahía de Jagua.",
            quiz: [
              { type: "mc", question: "Estilo predominante del centro:", options: ["Neoclásico", "Románico", "Mudéjar"], answer: 0, difficulty: "easy" },
              { type: "tf", question: "El Palacio de Valle mira a la bahía de Jagua.", answer: true, difficulty: "easy" },
              { type: "mc", question: "Objeto urbano en el Parque Martí:", options: ["Arco de Triunfo", "Obelisco", "Reloj floral"], answer: 0, difficulty: "hard" }
            ]
          },
          {
            id: "b1c3s3",
            title: "Camagüey y sus tinajones",
            summary: "Calles laberínticas, plazas irregulares y tinajones para almacenar agua.",
            quiz: [
              { type: "mc", question: "Objeto tradicional para agua:", options: ["Tinajón", "Botijo", "Samovar"], answer: 0, difficulty: "easy" },
              { type: "tf", question: "Camagüey se llamó Santa María del Puerto del Príncipe.", answer: true, difficulty: "hard" },
              { type: "mc", question: "Rasgo urbano distintivo:", options: ["Plazas irregulares conectadas por calles sinuosas", "Avenidas radiales", "Ensanche haussmanniano"], answer: 0, difficulty: "hard" }
            ]
          },
          {
            id: "b1c3s4",
            title: "Santiago de Cuba y su Morro",
            summary: "Castillo de San Pedro de la Roca y bahía rodeada de montañas.",
            quiz: [
              { type: "mc", question: "Fortaleza Patrimonio Mundial:", options: ["Morro de Santiago", "San Marcos", "San Felipe"], answer: 0, difficulty: "hard" },
              { type: "tf", question: "La bahía de Santiago está rodeada de montañas.", answer: true, difficulty: "easy" },
              { type: "mc", question: "Siglo de construcción principal del Morro:", options: ["XVII", "XIV", "XIX"], answer: 0, difficulty: "hard" }
            ]
          },
          {
            id: "b1c3s5",
            title: "Baracoa, primera villa",
            summary: "Paisaje húmedo, río Toa, cacao y la histórica Cruz de la Parra.",
            quiz: [
              { type: "mc", question: "Río caudaloso cercano:", options: ["Toa", "Almendares", "Zaza"], answer: 0, difficulty: "easy" },
              { type: "tf", question: "Baracoa es la ciudad más antigua de Cuba.", answer: true, difficulty: "easy" },
              { type: "mc", question: "Producto típico baracoense:", options: ["Cacao (chorote)", "Trigo", "Avena"], answer: 0, difficulty: "hard" }
            ]
          },
          {
            id: "b1c3s6",
            title: "Remedios y las Parrandas",
            summary: "Fiesta patrimonial con carrozas y fuegos; identidad remediana.",
            quiz: [
              { type: "tf", question: "Las Parrandas son tradición de Remedios.", answer: true, difficulty: "easy" },
              { type: "mc", question: "Provincia actual:", options: ["Villa Clara", "Mayabeque", "Artemisa"], answer: 0, difficulty: "easy" },
              { type: "mc", question: "Mes típico de celebración:", options: ["Diciembre", "Abril", "Agosto"], answer: 0, difficulty: "hard" }
            ]
          },
          {
            id: "b1c3s7",
            title: "Matanzas, puentes y danzón",
            summary: "Muchos puentes sobre ríos Yumurí y San Juan; cuna del danzón.",
            quiz: [
              { type: "mc", question: "Baile nacional asociado:", options: ["Danzón", "Cueca", "Jarana"], answer: 0, difficulty: "easy" },
              { type: "tf", question: "Matanzas es conocida por sus puentes.", answer: true, difficulty: "easy" },
              { type: "mc", question: "Sede histórica del danzón en Matanzas:", options: ["Liceo Artístico-Literario", "Teatro Nacional", "Tropicana"], answer: 0, difficulty: "hard" }
            ]
          },
          {
            id: "b1c3s8",
            title: "Sancti Spíritus y el puente Yayabo",
            summary: "Centro histórico colonial y puente de piedra sobre el río Yayabo.",
            quiz: [
              { type: "mc", question: "Material del puente Yayabo:", options: ["Piedra", "Hierro", "Madera"], answer: 0, difficulty: "easy" },
              { type: "tf", question: "El puente cruza el río del mismo nombre.", answer: true, difficulty: "easy" },
              { type: "mc", question: "Época de construcción:", options: ["XIX temprano / XVIII tardío", "XX", "XVI"], answer: 0, difficulty: "hard" }
            ]
          },
          {
            id: "b1c3s9",
            title: "Gibara y el cine",
            summary: "La Villa Blanca de Holguín con festival internacional de cine.",
            quiz: [
              { type: "mc", question: "Provincia:", options: ["Holguín", "Las Tunas", "Guantánamo"], answer: 0, difficulty: "easy" },
              { type: "tf", question: "Gibara celebra un festival de cine.", answer: true, difficulty: "easy" },
              { type: "mc", question: "Apodo tradicional:", options: ["La Villa Blanca", "Ciudad Maravilla", "Muy Noble y Leal"], answer: 0, difficulty: "hard" }
            ]
          },
          {
            id: "b1c3s10",
            title: "Bayamo y el Himno",
            summary: "Tradición independentista; quema de la ciudad (1869) y canto patriótico.",
            quiz: [
              { type: "mc", question: "Autor del Himno de Bayamo:", options: ["Perucho Figueredo", "Sindo Garay", "Eliseo Grenet"], answer: 0, difficulty: "hard" },
              { type: "tf", question: "Bayamo fue incendiada por sus propios pobladores.", answer: true, difficulty: "easy" },
              { type: "mc", question: "Provincia actual:", options: ["Granma", "Holguín", "Guantánamo"], answer: 0, difficulty: "easy" }
            ]
          }
        ]
      }
    ]
  },

  // === Scaffolds (we’ll fill with 30 subtemas cada uno después de validar B1 en vivo) ===
  // --- Replace the whole Block 2 object in CONTENT[] with this ---

{
  id: "b2",
  emoji: "🍲",
  color: "rojo",
  title: "Las Raíces del Ajiaco (Historia inicial y cultura)",
  chapters: [
    {
      id: "b2c1",
      title: "Pueblos originarios",
      summary: "Presencias precolombinas y sus modos de vida.",
      subtopics: [
        { id:"b2c1s1", title:"¿Quiénes eran?", summary:"Grupos con tradiciones distintas: arcaicos (guanahatabeyes), siboneyes y taínos; vivían en cuevas o aldeas costeras.", quiz:[
          {type:"mc",question:"Grupo asociado a aldeas agrícolas:",options:["Taínos","Guanahatabeyes","Sábalos"],answer:0,difficulty:"easy"},
          {type:"tf",question:"Los siboneyes practicaban caza y recolección.",answer:true,difficulty:"easy"},
          {type:"mc",question:"Sitio típico de arte rupestre:",options:["Cuevas","Rascacielos","Pirámides"],answer:0,difficulty:"hard"},
        ]},
        { id:"b2c1s2", title:"Lenguas y cultura material", summary:"Taíno (arahuaco) aportó palabras como hamaca, canoa y batey; cerámicas y dujos.", quiz:[
          {type:"mc",question:"Palabra de origen taíno:",options:["Canoa","Tranvía","Trolebús"],answer:0,difficulty:"easy"},
          {type:"tf",question:"Un dujo es un asiento ceremonial bajo.",answer:true,difficulty:"hard"},
          {type:"mc",question:"Juego y espacio comunitario:",options:["Batey","Gimnasio","Patio romano"],answer:0,difficulty:"hard"},
        ]},
        { id:"b2c1s3", title:"Conucos y agricultura", summary:"Cultivo de yuca (casabe), maíz y ajíes; conucos en rozas.", quiz:[
          {type:"mc",question:"Pan tradicional de yuca:",options:["Casabe","Arepa de trigo","Galleta de avena"],answer:0,difficulty:"easy"},
          {type:"tf",question:"El conuco era una forma de cultivo.",answer:true,difficulty:"easy"},
          {type:"mc",question:"Técnica de limpiar terreno:",options:["Roza y quema controlada","Arado mecánico","Hidropónico"],answer:0,difficulty:"hard"},
        ]},
        { id:"b2c1s4", title:"Vivienda y arte rupestre", summary:"Bohíos de yagua y cuevas con pictografías; importancia espiritual.", quiz:[
          {type:"mc",question:"Casa tradicional de palma:",options:["Bohío","Iglú","Tepee"],answer:0,difficulty:"easy"},
          {type:"tf",question:"Existen pictografías en cuevas cubanas.",answer:true,difficulty:"easy"},
          {type:"mc",question:"Material común del bohío:",options:["Yagua/palma","Concreto armado","Acero"],answer:0,difficulty:"hard"},
        ]},
        { id:"b2c1s5", title:"Herramientas y pesca", summary:"Hachas pulidas, conchas afiladas, redes y canoas; economía ligada al mar.", quiz:[
          {type:"mc",question:"Transporte acuático temprano:",options:["Canoa","Tren","Tranvía"],answer:0,difficulty:"easy"},
          {type:"tf",question:"El mar fue clave para la subsistencia.",answer:true,difficulty:"easy"},
          {type:"mc",question:"Material de herramientas arcaicas:",options:["Piedra y concha","Acero inoxidable","Plástico"],answer:0,difficulty:"hard"},
        ]},
        { id:"b2c1s6", title:"Rituales y creencias", summary:"Cemíes (ídolos), cohoba y chamanismo; respeto por fuerzas naturales.", quiz:[
          {type:"mc",question:"Ídolo taíno:",options:["Cemí","Menorá","Tótem inuit"],answer:0,difficulty:"hard"},
          {type:"tf",question:"La cohoba se asociaba a rituales.",answer:true,difficulty:"hard"},
          {type:"mc",question:"Guía espiritual:",options:["Chamán/behíque","Rabí","Monje benedictino"],answer:0,difficulty:"hard"},
        ]},
        { id:"b2c1s7", title:"Intercambio y rutas", summary:"Contacto interinsular del Caribe; circulación de conchas, sal y cerámica.", quiz:[
          {type:"tf",question:"Existía intercambio entre islas caribeñas.",answer:true,difficulty:"easy"},
          {type:"mc",question:"Bien típico de intercambio:",options:["Conchas y sal","Petróleo crudo","Silicio"],answer:0,difficulty:"hard"},
          {type:"mc",question:"Medio de transporte:",options:["Canoa","Carro de bueyes del siglo XX","Camión"],answer:0,difficulty:"easy"},
        ]},
        { id:"b2c1s8", title:"Sitios arqueológicos", summary:"Hato Viejo, Maisí, Cuevas de Punta del Este (Isla de la Juventud).", quiz:[
          {type:"mc",question:"Complejo rupestre en Isla de la Juventud:",options:["Punta del Este","Altamira","Cuzco"],answer:0,difficulty:"hard"},
          {type:"tf",question:"En Cuba hay yacimientos con pictografías.",answer:true,difficulty:"easy"},
          {type:"mc",question:"Zona oriental con hallazgos:",options:["Maisí/Baracoa","Palermo","Mendoza"],answer:0,difficulty:"hard"},
        ]},
        { id:"b2c1s9", title:"Alimentación", summary:"Pesca, moluscos, jutía, jutía-conejo; casabe, maíz, frutas.", quiz:[
          {type:"mc",question:"Pan base de yuca:",options:["Casabe","Baguette","Arepa de trigo"],answer:0,difficulty:"easy"},
          {type:"tf",question:"Consumían moluscos y peces costeros.",answer:true,difficulty:"easy"},
          {type:"mc",question:"Roedor consumido tradicionalmente:",options:["Jutía","Capibara","Hámster"],answer:0,difficulty:"hard"},
        ]},
        { id:"b2c1s10", title:"Legado en Cuba actual", summary:"Topónimos, vocablos y técnicas agrícolas perviven en prácticas rurales.", quiz:[
          {type:"tf",question:"Palabras como ‘hamaca’ provienen de lenguas indígenas.",answer:true,difficulty:"easy"},
          {type:"mc",question:"Técnica agrícola heredada:",options:["Conuco","Hidroponía industrial","Invernadero de vidrio"],answer:0,difficulty:"hard"},
          {type:"mc",question:"Ejemplo de toponimia indígena:",options:["Guanabacoa","Bilbao","Cartagena (Colombia)"],answer:0,difficulty:"hard"},
        ]},
      ],
    },
    {
      id: "b2c2",
      title: "1492 y la colonia temprana",
      summary: "Encuentro, conquista y primeras instituciones.",
      subtopics: [
        { id:"b2c2s1", title:"Llegada de Colón (1492)", summary:"Colón nombra la isla ‘Juana’; contacto inicial con pobladores.", quiz:[
          {type:"mc",question:"Nombre que dio Colón:",options:["Juana","Cuba","Fernandina (otra isla)"],answer:0,difficulty:"easy"},
          {type:"tf",question:"El viaje de 1492 llegó primero a las Bahamas.",answer:true,difficulty:"hard"},
          {type:"mc",question:"Año del primer viaje:",options:["1492","1519","1603"],answer:0,difficulty:"easy"},
        ]},
        { id:"b2c2s2", title:"Villas fundacionales", summary:"Baracoa (1511), Bayamo, Trinidad, Sancti Spíritus, Camagüey, Santiago, La Habana.", quiz:[
          {type:"mc",question:"Primera villa:",options:["Baracoa","Bayamo","La Habana"],answer:0,difficulty:"easy"},
          {type:"tf",question:"Santiago de Cuba fue capital temprana.",answer:true,difficulty:"hard"},
          {type:"mc",question:"Fundación de La Habana (siglo):",options:["XVI","XVII","XV"],answer:0,difficulty:"hard"},
        ]},
        { id:"b2c2s3", title:"Encomienda y cabildos", summary:"Organización colonial; cabildo como ayuntamiento; trabajo indígena forzado.", quiz:[
          {type:"mc",question:"Institución municipal:",options:["Cabildo","Duma","Consejo de la UE"],answer:0,difficulty:"easy"},
          {type:"tf",question:"La encomienda implicó explotación indígena.",answer:true,difficulty:"hard"},
          {type:"mc",question:"Función del cabildo:",options:["Gobierno local","Banco central","Universidad"],answer:0,difficulty:"easy"},
        ]},
        { id:"b2c2s4", title:"Religión y misiones", summary:"Evangelización y templos; sincretismos posteriores.", quiz:[
          {type:"tf",question:"Hubo evangelización en la colonia temprana.",answer:true,difficulty:"easy"},
          {type:"mc",question:"Primeras órdenes presentes:",options:["Franciscanos/Dominicos","Jesuitas (solo tardíamente)","Benedictinos medievales"],answer:0,difficulty:"hard"},
          {type:"mc",question:"Proceso cultural resultante:",options:["Sincretismo","Aislamiento absoluto","Desindianización total"],answer:0,difficulty:"hard"},
        ]},
        { id:"b2c2s5", title:"Disminución indígena", summary:"Enfermedades, trabajo forzado y mestizaje redujeron poblaciones.", quiz:[
          {type:"mc",question:"Causa determinante de caída demográfica:",options:["Enfermedades introducidas","Erupción volcánica","Glaciación"],answer:0,difficulty:"hard"},
          {type:"tf",question:"El mestizaje también ocurrió desde temprano.",answer:true,difficulty:"easy"},
          {type:"mc",question:"Sistema laboral coercitivo:",options:["Encomienda","Contrato sindical moderno","Trabajo remoto"],answer:0,difficulty:"hard"},
        ]},
        { id:"b2c2s6", title:"Rutas marítimas y corsarios", summary:"La Habana, puerto clave; ataques de corsarios y fortificaciones.", quiz:[
          {type:"mc",question:"Puerto clave de flotas:",options:["La Habana","Veracruz (México)","Callao (Perú)"],answer:0,difficulty:"easy"},
          {type:"tf",question:"Hubo ataques de corsarios a la isla.",answer:true,difficulty:"easy"},
          {type:"mc",question:"Respuesta defensiva:",options:["Fortalezas de la bahía","Muralla china","Línea Maginot"],answer:0,difficulty:"hard"},
        ]},
        { id:"b2c2s7", title:"Esclavitud africana temprana", summary:"Llegan esclavizados desde el XVI para labores mineras y agrícolas.", quiz:[
          {type:"tf",question:"Personas esclavizadas africanas fueron traídas a Cuba.",answer:true,difficulty:"easy"},
          {type:"mc",question:"Siglo de llegada sistemática:",options:["XVI","XIV","XIX (masiva pero no la primera)"],answer:0,difficulty:"hard"},
          {type:"mc",question:"Trabajo inicial frecuente:",options:["Minería/Agricultura","Informática","Textil industrial del XX"],answer:0,difficulty:"hard"},
        ]},
        { id:"b2c2s8", title:"Ordenamiento urbano colonial", summary:"Trazado en damero, plaza mayor, iglesia y cabildo como ejes.", quiz:[
          {type:"mc",question:"Centro urbano típico:",options:["Plaza Mayor","Rotonda barroca italiana","Rascacielos"],answer:0,difficulty:"easy"},
          {type:"tf",question:"La retícula en damero fue común.",answer:true,difficulty:"easy"},
          {type:"mc",question:"Edificios institucionales esenciales:",options:["Iglesia y cabildo","Acuario y estadio","Aeropuerto"],answer:0,difficulty:"hard"},
        ]},
        { id:"b2c2s9", title:"Economía de la colonia temprana", summary:"Oro limitado, ganadería, madera, primeros ingenios azucareros.", quiz:[
          {type:"mc",question:"Actividad temprana destacada:",options:["Ganadería y madera","Automotriz","Refinerías de petróleo"],answer:0,difficulty:"hard"},
          {type:"tf",question:"El azúcar se expandió más en los siglos XVIII–XIX.",answer:true,difficulty:"hard"},
          {type:"mc",question:"Instalación productiva clave:",options:["Ingenio","Siderurgia","Fábrica de chips"],answer:0,difficulty:"easy"},
        ]},
        { id:"b2c2s10", title:"La Habana, capital estratégica", summary:"Papel logístico entre América y Europa; astilleros y comercio de flotas.", quiz:[
          {type:"mc",question:"Razón de la importancia habanera:",options:["Puerto de flotas","Mina de diamantes","Frontera terrestre"],answer:0,difficulty:"easy"},
          {type:"tf",question:"La ciudad tuvo astilleros y defensa fuerte.",answer:true,difficulty:"easy"},
          {type:"mc",question:"Elemento del sistema comercial:",options:["Flotas y galeones","Trenes de alta velocidad","Oleoductos"],answer:0,difficulty:"hard"},
        ]},
      ],
    },
    {
      id: "b2c3",
      title: "Ajiaco cultural",
      summary: "Mezcla de Europa, África y América (transculturación).",
      subtopics: [
        { id:"b2c3s1", title:"Concepto de ‘ajiaco’ (Ortiz)", summary:"Metáfora culinaria de la cultura cubana: mezcla dinámica y creativa.", quiz:[
          {type:"mc",question:"Autor del concepto:",options:["Fernando Ortiz","Alejo Carpentier","José Lezama Lima"],answer:0,difficulty:"hard"},
          {type:"tf",question:"El ‘ajiaco’ explica un proceso de mezcla cultural.",answer:true,difficulty:"easy"},
          {type:"mc",question:"Idea central:",options:["Transculturación","Monocultura","Aislamiento",],answer:0,difficulty:"hard"},
        ]},
        { id:"b2c3s2", title:"Aportes europeos", summary:"Lengua española, instituciones, urbanismo y música culta.", quiz:[
          {type:"mc",question:"Lengua predominante:",options:["Español","Francés","Portugués"],answer:0,difficulty:"easy"},
          {type:"tf",question:"La traza urbana en damero es herencia europea.",answer:true,difficulty:"easy"},
          {type:"mc",question:"Música culta aportada:",options:["Zarzuela/contradanzas","Reggae","Fado"],answer:0,difficulty:"hard"},
        ]},
        { id:"b2c3s3", title:"Aportes africanos", summary:"Ritmos, tambores batá, claves rítmicas, religiosidad yoruba y bantú.", quiz:[
          {type:"mc",question:"Tambores litúrgicos:",options:["Batá","Timpani vieneses","Taikos"],answer:0,difficulty:"hard"},
          {type:"tf",question:"La clave rítmica es base de muchos géneros cubanos.",answer:true,difficulty:"easy"},
          {type:"mc",question:"Religión afrocubana principal:",options:["Regla de Ocha/Lucumí","Shinto","Luteranismo"],answer:0,difficulty:"easy"},
        ]},
        { id:"b2c3s4", title:"Aportes indígenas", summary:"Casabe, vocablos, técnicas agrícolas y medicinales.", quiz:[
          {type:"mc",question:"Pan de yuca heredado:",options:["Casabe","Pita","Brioche"],answer:0,difficulty:"easy"},
          {type:"tf",question:"La medicina tradicional recoge saberes indígenas.",answer:true,difficulty:"hard"},
          {type:"mc",question:"Práctica agrícola heredada:",options:["Conuco","Monocultivo intensivo","Hidroponía moderna"],answer:0,difficulty:"hard"},
        ]},
        { id:"b2c3s5", title:"Música de ‘fusión’ temprana", summary:"Contradanza, danzón y son como síntesis criolla.", quiz:[
          {type:"mc",question:"Baile nacional (siglo XIX):",options:["Danzón","Polka","Sardana"],answer:0,difficulty:"easy"},
          {type:"tf",question:"El son combina herencias española y africana.",answer:true,difficulty:"easy"},
          {type:"mc",question:"Pareja de instrumentos típicos del son:",options:["Tres y bongó","Gaita y tamboril","Bandoneón y charango"],answer:0,difficulty:"hard"},
        ]},
        { id:"b2c3s6", title:"Cocina criolla", summary:"Ajiaco, congrí/moros, yuca con mojo, lechón asado; combinaciones regionales.", quiz:[
          {type:"mc",question:"Plato que da nombre a la mezcla cultural:",options:["Ajiaco","Gazpacho","Sancocho (similar pero no cubano)"],answer:0,difficulty:"easy"},
          {type:"tf",question:"El congrí/moros une arroz y frijoles.",answer:true,difficulty:"easy"},
          {type:"mc",question:"Aderezo de ajo y cítrico:",options:["Mojo","Pesto","Chimichurri argentino"],answer:0,difficulty:"hard"},
        ]},
        { id:"b2c3s7", title:"Bailes y sociabilidad", summary:"Rumba, casino (salsa cubana) y ruedas; espacios comunitarios.", quiz:[
          {type:"mc",question:"Baile social cubano en rueda:",options:["Casino","Cueca","Joropo"],answer:0,difficulty:"easy"},
          {type:"tf",question:"La rumba es una expresión afrodescendiente.",answer:true,difficulty:"easy"},
          {type:"mc",question:"Instrumento de la rumba:",options:["Tumbadoras","Gaita de boto","Sitar"],answer:0,difficulty:"hard"},
        ]},
        { id:"b2c3s8", title:"Lengua y acentos", summary:"Español de Cuba con variantes regionales; criollo haitiano en oriente.", quiz:[
          {type:"mc",question:"Lengua oficial de Cuba:",options:["Español","Guaraní","Inglés"],answer:0,difficulty:"easy"},
          {type:"tf",question:"El criollo haitiano se habla en comunidades orientales.",answer:true,difficulty:"hard"},
          {type:"mc",question:"Rasgo del habla cubana:",options:["Seseo y elisión de /s/ final","Voseo general","Aspiración de j a [h] inglesa"],answer:0,difficulty:"hard"},
        ]},
        { id:"b2c3s9", title:"Religión y sincretismo", summary:"Identificaciones entre orishas y santos (Changó/Santa Bárbara; Yemayá/Virgen de Regla).", quiz:[
          {type:"mc",question:"Changó suele sincretizar con:",options:["Santa Bárbara","San Jorge","San Isidro"],answer:0,difficulty:"hard"},
          {type:"tf",question:"Yemayá se asocia a la Virgen de Regla.",answer:true,difficulty:"easy"},
          {type:"mc",question:"Concepto de fuerza vital:",options:["Achée (àṣẹ)","Karma","Mana polinesio"],answer:0,difficulty:"hard"},
        ]},
        { id:"b2c3s10", title:"Transculturación hoy", summary:"Procesos continuos: rap cubano, jazz afrocubano, arte comunitario y patrimonio vivo.", quiz:[
          {type:"tf",question:"La mezcla cultural sigue activa en expresiones actuales.",answer:true,difficulty:"easy"},
          {type:"mc",question:"Ejemplo musical de cruce:",options:["Jazz afrocubano","Marcha militar prusiana","Hardstyle neerlandés"],answer:0,difficulty:"hard"},
          {type:"mc",question:"Espacio de cultura barrial:",options:["Proyecto comunitario","Centro de datos","Refinería"],answer:0,difficulty:"hard"},
        ]},
      ],
    },
  ],
},

{
  id: "b3",
  emoji: "🥁",
  color: "azulClaro",
  title: "El Ritmo y la Expresión (Cultura, Música y Literatura)",
  chapters: [
    // ====== Capítulo 1: Lenguas en Cuba ======
    {
      id: "b3c1",
      title: "Lenguas en Cuba",
      summary: "Español cubano, criollo haitiano y variedades regionales.",
      subtopics: [
        { id:"b3c1s1", title:"Español de Cuba: rasgos", summary:"Seseo, aspiración/elisión de /s/ final y entonación caribeña caracterizan el español cubano.", quiz:[
          {type:"mc",question:"Rasgo común del español cubano:",options:["Seseo","Voseo general","Ceceo peninsular"],answer:0,difficulty:"easy"},
          {type:"tf",question:"La /s/ final puede aspirarse o perderse.",answer:true,difficulty:"easy"},
          {type:"mc",question:"Zona dialectal a la que pertenece Cuba:",options:["Caribeña","Río de la Plata","Andina"],answer:0,difficulty:"hard"},
        ]},
        { id:"b3c1s2", title:"Regionalismos y léxico", summary:"Palabras como guagua, asere, bodega o yuma expresan identidad y cercanía social.", quiz:[
          {type:"mc",question:"Transporte urbano en Cuba:",options:["Guagua","Camello (solo histórico)","Colectivo argentino"],answer:0,difficulty:"easy"},
          {type:"tf",question:"“Asere” es un trato coloquial amistoso.",answer:true,difficulty:"easy"},
          {type:"mc",question:"‘Bodega’ en Cuba es:",options:["Tienda de racionamiento","Bodega de vino","Terminal de bus"],answer:0,difficulty:"hard"},
        ]},
        { id:"b3c1s3", title:"Criollo haitiano en el Oriente", summary:"Comunidades orientales preservan el kreyòl; convivencia con el español.", quiz:[
          {type:"tf",question:"El criollo haitiano se habla en zonas del Oriente.",answer:true,difficulty:"easy"},
          {type:"mc",question:"País de origen del kreyòl:",options:["Haití","Guatemala","Portugal"],answer:0,difficulty:"easy"},
          {type:"mc",question:"Fenómeno de convivencia de lenguas:",options:["Bilingüismo","Diglosia estricta única","Monolingüismo"],answer:0,difficulty:"hard"},
        ]},
        { id:"b3c1s4", title:"Lenguas y migraciones", summary:"Corrientes migratorias (canaria, gallega, haitiana, jamaiquina) aportaron palabras y acentos.", quiz:[
          {type:"mc",question:"Aporte léxico al español cubano clásico:",options:["Canario/gallego","Finlandés","Ruso"],answer:0,difficulty:"hard"},
          {type:"tf",question:"Hubo migración caribeña anglófona a Cuba.",answer:true,difficulty:"hard"},
          {type:"mc",question:"Lengua de algunas comunidades obreras en el oriente azucarero:",options:["Inglés creol/Jamaicano","Quechua","Alemán"],answer:0,difficulty:"hard"},
        ]},
        { id:"b3c1s5", title:"Lengua y música", summary:"Letras del son y la rumba incorporan habla popular, refranes y humor criollo.", quiz:[
          {type:"mc",question:"Género con estribillos populares:",options:["Son","Góspel luterano","Fado"],answer:0,difficulty:"easy"},
          {type:"tf",question:"La música bailable refleja el habla cotidiana.",answer:true,difficulty:"easy"},
          {type:"mc",question:"Recurso verbal cubano frecuente:",options:["Refrán y doble sentido","Hexámetro griego","Aliteración nórdica"],answer:0,difficulty:"hard"},
        ]},
        { id:"b3c1s6", title:"Topónimos y memoria", summary:"Nombres como Guanabacoa, Baraguá o Camagüey conservan raíces indígenas y coloniales.", quiz:[
          {type:"tf",question:"“Guanabacoa” tiene raíz indígena.",answer:true,difficulty:"easy"},
          {type:"mc",question:"Topónimo asociado a la Protesta histórica:",options:["Baraguá","Normandía","Yuste"],answer:0,difficulty:"hard"},
          {type:"mc",question:"Antiguo nombre de Camagüey:",options:["Puerto del Príncipe","San Cristóbal","Santa María del Mar"],answer:0,difficulty:"hard"},
        ]},
        { id:"b3c1s7", title:"Lenguaje escolar y valores", summary:"Escuela y medios difunden normas lingüísticas y educación cívica.", quiz:[
          {type:"tf",question:"La escuela promueve normas del español estándar.",answer:true,difficulty:"easy"},
          {type:"mc",question:"Herramienta para ampliar vocabulario:",options:["Lectura","Solo videojuegos","Silencio total"],answer:0,difficulty:"easy"},
          {type:"mc",question:"Valores promovidos en textos infantiles:",options:["Solidaridad","Guerra permanente","Odio étnico"],answer:0,difficulty:"hard"},
        ]},
        { id:"b3c1s8", title:"Señas y accesibilidad", summary:"La Lengua de Señas Cubana y recursos de lectura fácil amplían la inclusión.", quiz:[
          {type:"tf",question:"Existe Lengua de Señas Cubana.",answer:true,difficulty:"easy"},
          {type:"mc",question:"Recurso para comprensión:",options:["Lectura fácil","Taquigrafía antigua","Abecedario morse"],answer:0,difficulty:"hard"},
          {type:"mc",question:"Accesibilidad refuerza:",options:["Derechos e inclusión","Competencia de exclusión","Obstáculos"],answer:0,difficulty:"hard"},
        ]},
        { id:"b3c1s9", title:"Humor y cubanía", summary:"El choteo y el humor musical reafirman identidad sin perder respeto.", quiz:[
          {type:"mc",question:"Humor criollo clásico:",options:["Choteo","Sátira romana","Kabuki"],answer:0,difficulty:"hard"},
          {type:"tf",question:"El humor puede enseñar valores cívicos.",answer:true,difficulty:"easy"},
          {type:"mc",question:"Riesgo del humor sin cuidado:",options:["Ofender o estigmatizar","Fortalecer la empatía siempre","Silenciar la crítica"],answer:0,difficulty:"hard"},
        ]},
        { id:"b3c1s10", title:"Lengua en la diáspora", summary:"Comunidades cubanas mantienen español de Cuba y lo mezclan con otras lenguas.", quiz:[
          {type:"tf",question:"Hay español de Cuba en la diáspora.",answer:true,difficulty:"easy"},
          {type:"mc",question:"Fenómeno de mezcla lingüística:",options:["Code-switching","Neuma gregoriano","Isoglosa alpina"],answer:0,difficulty:"hard"},
          {type:"mc",question:"Medio que conecta con la isla:",options:["Música y redes","Solo telegramas","Papiroflexia"],answer:0,difficulty:"easy"},
        ]},
      ],
    },

    // ====== Capítulo 2: Literatura y valores ======
    {
      id: "b3c2",
      title: "Literatura y valores",
      summary: "De Martí a Guillén y Carpentier: ética, memoria y lo maravilloso.",
      subtopics: [
        { id:"b3c2s1", title:"José Martí: infancia y ética", summary:"‘La Edad de Oro’ enseña bondad, justicia y amor por la libertad.", quiz:[
          {type:"mc",question:"Obra infantil de Martí:",options:["La Edad de Oro","Rayuela","Platero y yo"],answer:0,difficulty:"easy"},
          {type:"tf",question:"Martí propone un ideal ético para niños.",answer:true,difficulty:"easy"},
          {type:"mc",question:"Valor central en Martí:",options:["Libertad","Codicia","Violencia"],answer:0,difficulty:"hard"},
        ]},
        { id:"b3c2s2", title:"Versos Sencillos", summary:"Poemas breves con imágenes claras (‘yo soy un hombre sincero…’).", quiz:[
          {type:"mc",question:"Autor de ‘Versos Sencillos’:",options:["Martí","Neruda","Bécquer"],answer:0,difficulty:"easy"},
          {type:"tf",question:"La sencillez aparente guarda profundidad ética.",answer:true,difficulty:"hard"},
          {type:"mc",question:"Color simbólico frecuente:",options:["Blanco","Púrpura imperial","Azul prusiano"],answer:0,difficulty:"hard"},
        ]},
        { id:"b3c2s3", title:"Nicolás Guillén", summary:"Poesía mulata: ritmo del son en el verso; identidad y justicia.", quiz:[
          {type:"mc",question:"Poeta del ‘poema-son’:",options:["Guillén","Darío","Vallejo"],answer:0,difficulty:"easy"},
          {type:"tf",question:"Guillén incorpora ritmos populares.",answer:true,difficulty:"easy"},
          {type:"mc",question:"Tema frecuente:",options:["Igualdad","Conquista vikinga","Montañismo alpino"],answer:0,difficulty:"hard"},
        ]},
        { id:"b3c2s4", title:"Alejo Carpentier", summary:"‘Lo real maravilloso’ revela lo extraordinario en lo americano.", quiz:[
          {type:"mc",question:"Concepto clave en Carpentier:",options:["Lo real maravilloso","Realismo mágico ruso","Surrealismo italiano"],answer:0,difficulty:"hard"},
          {type:"tf",question:"Ve lo maravilloso en la realidad americana.",answer:true,difficulty:"easy"},
          {type:"mc",question:"Género principal:",options:["Novela y ensayo","Cómic superhéroes","Odas homéricas"],answer:0,difficulty:"hard"},
        ]},
        { id:"b3c2s5", title:"La narrativa histórica", summary:"Novelas recrean épocas: esclavitud, independencia, ciudad.", quiz:[
          {type:"tf",question:"La ficción puede enseñar historia.",answer:true,difficulty:"easy"},
          {type:"mc",question:"Autor cubano de novelas históricas:",options:["Carpentier","Shakespeare","Dumas"],answer:0,difficulty:"hard"},
          {type:"mc",question:"Escenario cubano frecuente:",options:["La Habana colonial","Desierto del Sahara","Roma republicana"],answer:0,difficulty:"hard"},
        ]},
        { id:"b3c2s6", title:"Literatura infantil cubana", summary:"Cuentos y poemas promueven curiosidad y respeto.", quiz:[
          {type:"mc",question:"Función de la literatura infantil:",options:["Educar y divertir","Aislar","Desinformar"],answer:0,difficulty:"easy"},
          {type:"tf",question:"La poesía infantil puede introducir historia y ciencia.",answer:true,difficulty:"easy"},
          {type:"mc",question:"Rima frecuente en canciones infantiles:",options:["Pareada/simple","Dodecasílaba homérica","Sánscrita védica"],answer:0,difficulty:"hard"},
        ]},
        { id:"b3c2s7", title:"Revistas y bibliotecas", summary:"Espacios de lectura, clubes y cuentacuentos forman hábitos.", quiz:[
          {type:"mc",question:"Lugar idóneo para leer gratis:",options:["Biblioteca","Sólo discoteca","Aeropuerto"],answer:0,difficulty:"easy"},
          {type:"tf",question:"Talleres y clubes fomentan lectura.",answer:true,difficulty:"easy"},
          {type:"mc",question:"Actividad pública para niños:",options:["Cuentacuentos","Boxeo profesional","Subasta vinícola"],answer:0,difficulty:"hard"},
        ]},
        { id:"b3c2s8", title:"Autores de la isla y la diáspora", summary:"Obras dialogan entre Cuba y el mundo; identidad plural.", quiz:[
          {type:"tf",question:"La literatura cubana existe dentro y fuera de la isla.",answer:true,difficulty:"easy"},
          {type:"mc",question:"Tema compartido frecuente:",options:["Memoria y pertenencia","Astronomía cuántica","Minería del litio"],answer:0,difficulty:"hard"},
          {type:"mc",question:"Formato contemporáneo de difusión:",options:["Libro digital","Pergamino","Tablilla de arcilla"],answer:0,difficulty:"easy"},
        ]},
        { id:"b3c2s9", title:"La décima y la improvisación", summary:"Pícaros y poetas cantan décimas con repentismo musical.", quiz:[
          {type:"mc",question:"Estrofa tradicional:",options:["Décima","Tanka","Soneto inglés"],answer:0,difficulty:"hard"},
          {type:"tf",question:"El repentismo improvisa versos con música.",answer:true,difficulty:"easy"},
          {type:"mc",question:"Instrumento acompañante común:",options:["Guitarra/tres","Cornamusa","Guzheng"],answer:0,difficulty:"hard"},
        ]},
        { id:"b3c2s10", title:"Valores que transmite la lectura", summary:"Respeto, amistad, esfuerzo y amor por la patria sin odio.", quiz:[
          {type:"mc",question:"Valor incompatible:",options:["Discriminación","Amistad","Esfuerzo"],answer:0,difficulty:"easy"},
          {type:"tf",question:"Leer ayuda a entender a los demás.",answer:true,difficulty:"easy"},
          {type:"mc",question:"Hábito saludable:",options:["Leer en familia","Insultar","Burlar"],answer:0,difficulty:"hard"},
        ]},
      ],
    },

    // ====== Capítulo 3: Música y danza ======
    {
      id: "b3c3",
      title: "Música y danza",
      summary: "Instrumentos, géneros y baile social.",
      subtopics: [
        { id:"b3c3s1", title:"Instrumentos: tres y guitarra", summary:"El tres cubano aporta sonoridad distintiva al son y otros géneros.", quiz:[
          {type:"mc",question:"Instrumento clave del son:",options:["Tres","Banjo irlandés","Sitar"],answer:0,difficulty:"easy"},
          {type:"tf",question:"El tres es diferente a la guitarra española.",answer:true,difficulty:"hard"},
          {type:"mc",question:"Número típico de órdenes del tres:",options:["3","6 dobles como la guitarra de 12","1"],answer:0,difficulty:"hard"},
        ]},
        { id:"b3c3s2", title:"Percusión: bongó y tumbadoras", summary:"Bongó marca patrones; tumbadoras sostienen la rumba y la salsa.", quiz:[
          {type:"mc",question:"Par de tambores pequeños:",options:["Bongó","Pailas", "Darbuka"],answer:0,difficulty:"easy"},
          {type:"tf",question:"Las tumbadoras se usan en la rumba.",answer:true,difficulty:"easy"},
          {type:"mc",question:"Otro nombre de tumbadora:",options:["Congas","Djembé","Bombo"],answer:0,difficulty:"hard"},
        ]},
        { id:"b3c3s3", title:"La clave", summary:"Patrón rítmico organizador (2-3 o 3-2) presente en muchos géneros.", quiz:[
          {type:"mc",question:"Función de la ‘clave’:",options:["Organiza el ritmo","Afina instrumentos","Cambia la tonalidad"],answer:0,difficulty:"hard"},
          {type:"tf",question:"Hay variantes 2-3 y 3-2.",answer:true,difficulty:"easy"},
          {type:"mc",question:"Instrumento que marca la clave:",options:["Claves de madera","Triángulo","Maracas solas"],answer:0,difficulty:"easy"},
        ]},
        { id:"b3c3s4", title:"Danzón", summary:"Baile nacional derivado de contradanzas; elegante y cadencioso.", quiz:[
          {type:"mc",question:"Baile nacional cubano:",options:["Danzón","Cueca","Samba"],answer:0,difficulty:"easy"},
          {type:"tf",question:"El danzón proviene de contradanzas.",answer:true,difficulty:"hard"},
          {type:"mc",question:"Instrumento orquestal típico del danzón:",options:["Violín/flauta","Gaita","Oboe d'amore"],answer:0,difficulty:"hard"},
        ]},
        { id:"b3c3s5", title:"Son", summary:"Fusión hispano-africana con tres, marímbula o bajo y bongó; base de la salsa.", quiz:[
          {type:"mc",question:"Género base de la salsa:",options:["Son","Fandango","Fox-trot"],answer:0,difficulty:"easy"},
          {type:"tf",question:"El son mezcla herencias españolas y africanas.",answer:true,difficulty:"easy"},
          {type:"mc",question:"Ciudad clave en la expansión del son:",options:["Santiago de Cuba","Quito","Asunción"],answer:0,difficulty:"hard"},
        ]},
        { id:"b3c3s6", title:"Rumba", summary:"Yambú, guaguancó y columbia; canto y tambores en solares y patios.", quiz:[
          {type:"mc",question:"Variante de rumba rápida y masculina:",options:["Columbia","Vals","Jota"],answer:0,difficulty:"hard"},
          {type:"tf",question:"La rumba es afrocubana.",answer:true,difficulty:"easy"},
          {type:"mc",question:"Juego coreográfico en guaguancó:",options:["Vacunao simbólico","Zapateo aragonés","Tarantela"],answer:0,difficulty:"hard"},
        ]},
        { id:"b3c3s7", title:"Chachachá y mambo", summary:"Ritmos bailables con orquestas charangas y big bands.", quiz:[
          {type:"mc",question:"Onomatopeya del género:",options:["Cha-cha-chá","Tutankamón","Pum-pam"],answer:0,difficulty:"easy"},
          {type:"tf",question:"El mambo impulsó grandes orquestas.",answer:true,difficulty:"easy"},
          {type:"mc",question:"Formato clásico del chachachá:",options:["Charanga","Banda militar","Trío de jazz manouche"],answer:0,difficulty:"hard"},
        ]},
        { id:"b3c3s8", title:"Bolero y filin", summary:"Canción romántica, íntima; armonías de jazz en el filin.", quiz:[
          {type:"mc",question:"Subestilo con influencia jazzística:",options:["Filin","Habanera provenzal","Gregorianismo"],answer:0,difficulty:"hard"},
          {type:"tf",question:"El bolero es género romántico.",answer:true,difficulty:"easy"},
          {type:"mc",question:"Tema frecuente del bolero:",options:["Amor","Guerra naval","Minería"],answer:0,difficulty:"easy"},
        ]},
        { id:"b3c3s9", title:"Casino (salsa cubana)", summary:"Baile social en pareja y rueda; cooperación y alegría grupal.", quiz:[
          {type:"mc",question:"Rueda de…",options:["Casino","Sardana","Capoeira"],answer:0,difficulty:"easy"},
          {type:"tf",question:"El casino se baila en pareja y en grupo.",answer:true,difficulty:"easy"},
          {type:"mc",question:"Elemento esencial en rueda:",options:["Coordinación de llamadas","Salto mortal acrobático","Silencio absoluto"],answer:0,difficulty:"hard"},
        ]},
        { id:"b3c3s10", title:"Jazz afrocubano", summary:"Cruce del jazz con ritmos cubanos; improvisación y clave.", quiz:[
          {type:"tf",question:"El jazz afrocubano usa clave rítmica.",answer:true,difficulty:"hard"},
          {type:"mc",question:"Práctica musical central:",options:["Improvisación","Playback fijo","Silencio escénico"],answer:0,difficulty:"hard"},
          {type:"mc",question:"Instrumento frecuente:",options:["Piano/tumbadoras","Clavicordio medieval","Cornemusa"],answer:0,difficulty:"hard"},
        ]},
      ],
    },
  ],
},

{
  id: "b4",
  emoji: "✨",
  color: "azulClaro",
  title: "La Fuerza de los Orishas (Religión y Santería)",
  chapters: [
    // ====== Capítulo 1: Cosmovisión y sincretismo ======
    {
      id: "b4c1",
      title: "Cosmovisión y sincretismo",
      summary: "Yoruba/Lucumí en Cuba, sincretismo con el catolicismo.",
      subtopics: [
        { id:"b4c1s1", title:"¿Qué es la Regla de Ocha/Lucumí?", summary:"Religión afrocubana de origen yoruba; culto a los orishas y prácticas rituales.", quiz:[
          {type:"mc",question:"Regla de Ocha también se llama:",options:["Lucumí","Zen","Sinto"],answer:0,difficulty:"easy"},
          {type:"tf",question:"Es una tradición de raíz yoruba.",answer:true,difficulty:"easy"},
          {type:"mc",question:"Seres cultuados:",options:["Orishas","Ninfas griegas","Valkirias"],answer:0,difficulty:"hard"},
        ]},
        { id:"b4c1s2", title:"Olodumare", summary:"Principio supremo, fuente de energía y creación.", quiz:[
          {type:"tf",question:"Olodumare es el principio supremo.",answer:true,difficulty:"easy"},
          {type:"mc",question:"Función atribuida:",options:["Creador","Guardián de fronteras marítimas","Héroe épico vikingo"],answer:0,difficulty:"hard"},
          {type:"mc",question:"Relación con orishas:",options:["Orishas median la energía","No existe relación","Olodumare se identifica con un solo santo"],answer:0,difficulty:"hard"},
        ]},
        { id:"b4c1s3", title:"Achée (àṣẹ)", summary:"Fuerza vital/eficacia espiritual que hace que las cosas ocurran.", quiz:[
          {type:"mc",question:"Achée significa:",options:["Poder/energía eficaz","Castigo","Madera"],answer:0,difficulty:"hard"},
          {type:"tf",question:"El achée circula en personas y objetos rituales.",answer:true,difficulty:"easy"},
          {type:"mc",question:"Práctica para canalizarlo:",options:["Oficios/rezos","Lucha libre","Calistenia"],answer:0,difficulty:"hard"},
        ]},
        { id:"b4c1s4", title:"Sincretismo", summary:"Identificación simbólica entre orishas y santos católicos (p. ej. Changó/Santa Bárbara).", quiz:[
          {type:"mc",question:"Changó se asocia a:",options:["Santa Bárbara","San Martín","San Jorge inglés"],answer:0,difficulty:"easy"},
          {type:"tf",question:"El sincretismo fue una estrategia histórica.",answer:true,difficulty:"hard"},
          {type:"mc",question:"Yemayá se vincula a:",options:["Virgen de Regla","Virgen del Pilar (España)","Santa Teresa"],answer:0,difficulty:"hard"},
        ]},
        { id:"b4c1s5", title:"Divinidades y naturaleza", summary:"Orishas relacionan fuerzas naturales (río, mar, trueno) con valores humanos.", quiz:[
          {type:"mc",question:"Mar y maternidad:",options:["Yemayá","Oggún","Elegguá"],answer:0,difficulty:"easy"},
          {type:"tf",question:"Los orishas encarnan aspectos de la naturaleza.",answer:true,difficulty:"easy"},
          {type:"mc",question:"Trueno y justicia:",options:["Changó","Obatalá","Ochosi"],answer:0,difficulty:"hard"},
        ]},
        { id:"b4c1s6", title:"Religiosidad popular cubana", summary:"Procesiones, promesas y veneración de vírgenes y orishas.", quiz:[
          {type:"tf",question:"En Cuba coexisten prácticas católicas y afrocubanas.",answer:true,difficulty:"easy"},
          {type:"mc",question:"Santuario habanero asociado a Yemayá:",options:["Regla","Fátima","Montserrat"],answer:0,difficulty:"hard"},
          {type:"mc",question:"Expresión de devoción:",options:["Promesa/ofrenda","Solo memorización","Apuestas"],answer:0,difficulty:"hard"},
        ]},
        { id:"b4c1s7", title:"Mitos y relatos", summary:"Patakíes narran acciones de los orishas, con enseñanzas morales.", quiz:[
          {type:"mc",question:"Nombre de los relatos míticos:",options:["Patakíes","Haikus","Sagas islandesas"],answer:0,difficulty:"hard"},
          {type:"tf",question:"Los patakíes enseñan valores.",answer:true,difficulty:"easy"},
          {type:"mc",question:"Medio de transmisión:",options:["Oralidad y libros","Solo televisión","Teletexto"],answer:0,difficulty:"hard"},
        ]},
        { id:"b4c1s8", title:"Respeto y ética ritual", summary:"Ritos requieren respeto, silencio y aprendizaje con mayores.", quiz:[
          {type:"tf",question:"El respeto es esencial en ceremonias.",answer:true,difficulty:"easy"},
          {type:"mc",question:"Aprendizaje con:",options:["Mayores/ sacerdotes","Influencers","Árbitros deportivos"],answer:0,difficulty:"hard"},
          {type:"mc",question:"Espacio de ceremonia:",options:["Casa-templo/ilé","Estadio olímpico","Rascacielos"],answer:0,difficulty:"hard"},
        ]},
        { id:"b4c1s9", title:"Memoria y patrimonio", summary:"Tambores batá, cantos y objetos se preservan como patrimonio vivo.", quiz:[
          {type:"tf",question:"Los batá son patrimonio musical.",answer:true,difficulty:"easy"},
          {type:"mc",question:"Transmisión principal:",options:["Maestros a aprendices","Descarga automática","Telepatía"],answer:0,difficulty:"hard"},
          {type:"mc",question:"Tipo de patrimonio:",options:["Inmaterial (vivo)","Industrial minero","Paleontológico"],answer:0,difficulty:"hard"},
        ]},
        { id:"b4c1s10", title:"Respeto interreligioso", summary:"Convivencia y no discriminación: todas las creencias merecen respeto.", quiz:[
          {type:"mc",question:"Actitud correcta ante otras religiones:",options:["Respeto","Burlas","Imposición"],answer:0,difficulty:"easy"},
          {type:"tf",question:"La diversidad religiosa forma parte de la cultura cubana.",answer:true,difficulty:"easy"},
          {type:"mc",question:"Valor clave:",options:["Tolerancia","Intolerancia","Discriminación"],answer:0,difficulty:"hard"},
        ]},
      ],
    },

    // ====== Capítulo 2: Orishas y prácticas ======
    {
      id: "b4c2",
      title: "Orishas y prácticas",
      summary: "Deidades principales, música ritual y ofrendas.",
      subtopics: [
        { id:"b4c2s1", title:"Elegguá", summary:"Se abre el camino; guardián de las encrucijadas.", quiz:[
          {type:"mc",question:"Orisha de los caminos:",options:["Elegguá","Yemayá","Obatalá"],answer:0,difficulty:"easy"},
          {type:"tf",question:"Se le pide permiso al iniciar ritos.",answer:true,difficulty:"easy"},
          {type:"mc",question:"Símbolo frecuente:",options:["Piedra/coco", "Arpa","Armadura"],answer:0,difficulty:"hard"},
        ]},
        { id:"b4c2s2", title:"Changó", summary:"Fuego, trueno, tambor y justicia; asociado a Santa Bárbara.", quiz:[
          {type:"mc",question:"Color tradicional de Changó:",options:["Rojo y blanco","Azul marino","Verde limón"],answer:0,difficulty:"hard"},
          {type:"tf",question:"Se asocia a la justicia y al tambor.",answer:true,difficulty:"easy"},
          {type:"mc",question:"Santo católico relacionado:",options:["Santa Bárbara","San Francisco","San Roque"],answer:0,difficulty:"hard"},
        ]},
        { id:"b4c2s3", title:"Yemayá", summary:"Madre del mar; maternidad y protección.", quiz:[
          {type:"mc",question:"Ámbito de Yemayá:",options:["Mar","Montaña","Viento seco"],answer:0,difficulty:"easy"},
          {type:"tf",question:"Se la asocia a la Virgen de Regla.",answer:true,difficulty:"easy"},
          {type:"mc",question:"Color típico:",options:["Azul/ blanco","Negro total","Amarillo y morado"],answer:0,difficulty:"hard"},
        ]},
        { id:"b4c2s4", title:"Ochún", summary:"Ríos, dulzura y amor; belleza y maternidad.", quiz:[
          {type:"mc",question:"Elemento natural de Ochún:",options:["Río","Rayo","Desierto"],answer:0,difficulty:"easy"},
          {type:"tf",question:"Se vincula a la dulzura y el amor.",answer:true,difficulty:"easy"},
          {type:"mc",question:"Color asociado:",options:["Amarillo/dorado","Azul oscuro","Gris"],answer:0,difficulty:"hard"},
        ]},
        { id:"b4c2s5", title:"Obatalá", summary:"Pureza, cabeza y justicia serena; paz y armonía.", quiz:[
          {type:"mc",question:"Color de Obatalá:",options:["Blanco","Rojo","Negro"],answer:0,difficulty:"easy"},
          {type:"tf",question:"Representa paz y armonía.",answer:true,difficulty:"easy"},
          {type:"mc",question:"Ámbito simbólico:",options:["Cabeza/entendimiento","Subsuelo minero","Río subterráneo"],answer:0,difficulty:"hard"},
        ]},
        { id:"b4c2s6", title:"Oggún", summary:"Hierro, trabajo y tecnología; herrería y caminos duros.", quiz:[
          {type:"mc",question:"Material de Oggún:",options:["Hierro","Plata","Mármol"],answer:0,difficulty:"easy"},
          {type:"tf",question:"Se relaciona con el trabajo duro.",answer:true,difficulty:"easy"},
          {type:"mc",question:"Símbolo posible:",options:["Herramientas","Lira","Arpa celta"],answer:0,difficulty:"hard"},
        ]},
        { id:"b4c2s7", title:"Ochosi", summary:"Cazador, astucia y justicia exacta.", quiz:[
          {type:"mc",question:"Figura de Ochosi:",options:["Arquero/cazador","Marinero","Pastor"],answer:0,difficulty:"hard"},
          {type:"tf",question:"Se asocia a la justicia precisa.",answer:true,difficulty:"easy"},
          {type:"mc",question:"Relación con:",options:["Elegguá y Oggún","Zeus", "Isis"],answer:0,difficulty:"hard"},
        ]},
        { id:"b4c2s8", title:"Orula/Ifá", summary:"Adivinación y sabiduría; sistema de signos (odu).", quiz:[
          {type:"mc",question:"Orisha de Ifá:",options:["Orula","Poseidón","Thor"],answer:0,difficulty:"hard"},
          {type:"tf",question:"Ifá usa un sistema de signos llamados odú.",answer:true,difficulty:"hard"},
          {type:"mc",question:"Oficio correspondiente:",options:["Babalawo","Campesino","Carpintero medieval"],answer:0,difficulty:"hard"},
        ]},
        { id:"b4c2s9", title:"Tambores batá", summary:"Iyá, itótele y okónkolo dialogan con cantos; sagrado y musical.", quiz:[
          {type:"mc",question:"Conjunto de tres tambores:",options:["Batá","Batería rock","Bombo-legüero"],answer:0,difficulty:"easy"},
          {type:"tf",question:"Los batá dialogan con el canto.",answer:true,difficulty:"easy"},
          {type:"mc",question:"Tambor mayor:",options:["Iyá","Okónkolo","Bombo"],answer:0,difficulty:"hard"},
        ]},
        { id:"b4c2s10", title:"Ofrendas y respeto", summary:"Flores, frutas, cantos; nunca se hacen prácticas que dañen a nadie.", quiz:[
          {type:"tf",question:"La ética exige no dañar a las personas.",answer:true,difficulty:"easy"},
          {type:"mc",question:"Tipo de ofrenda frecuente:",options:["Flores/frutas","Basura","Objetos peligrosos"],answer:0,difficulty:"easy"},
          {type:"mc",question:"Valor central:",options:["Respeto","Burlas","Trampa"],answer:0,difficulty:"hard"},
        ]},
      ],
    },

    // ====== Capítulo 3: Casa-templo y ética ======
    {
      id: "b4c3",
      title: "Casa-templo y ética",
      summary: "Iniciación, collares, tabúes y comunidad.",
      subtopics: [
        { id:"b4c3s1", title:"Ilé: casa-templo", summary:"Espacio ceremonial, altar y objetos consagrados.", quiz:[
          {type:"mc",question:"Nombre de la casa-templo:",options:["Ilé","Pagoda","Sinagoga"],answer:0,difficulty:"easy"},
          {type:"tf",question:"En el ilé hay altares y objetos rituales.",answer:true,difficulty:"easy"},
          {type:"mc",question:"Actitud básica:",options:["Respeto y silencio","Gritos","Bromas pesadas"],answer:0,difficulty:"hard"},
        ]},
        { id:"b4c3s2", title:"Iniciación", summary:"Proceso guiado por padrinos/madrinas; aprendizaje de normas.", quiz:[
          {type:"mc",question:"Personas que guían:",options:["Padrinos/madrinas","Jueces","Concejales"],answer:0,difficulty:"hard"},
          {type:"tf",question:"La iniciación implica aprender responsabilidades.",answer:true,difficulty:"easy"},
          {type:"mc",question:"Valor asociado:",options:["Compromiso","Imposición violenta","Engaño"],answer:0,difficulty:"hard"},
        ]},
        { id:"b4c3s3", title:"Collares y símbolos", summary:"Colores identifican orishas; cuidado y uso respetuoso.", quiz:[
          {type:"mc",question:"Color de Obatalá:",options:["Blanco","Rojo","Púrpura"],answer:0,difficulty:"easy"},
          {type:"tf",question:"Los collares requieren cuidado.",answer:true,difficulty:"easy"},
          {type:"mc",question:"Función principal:",options:["Identidad y protección simbólica","Adorno banal","Juguete"],answer:0,difficulty:"hard"},
        ]},
        { id:"b4c3s4", title:"Tabúes y ética personal", summary:"Reglas individuales según orisha y camino; disciplina.", quiz:[
          {type:"tf",question:"Algunas reglas personales dependen del orisha.",answer:true,difficulty:"easy"},
          {type:"mc",question:"Sentido de los tabúes:",options:["Cuidado y equilibrio","Castigo por capricho","Competencia"],answer:0,difficulty:"hard"},
          {type:"mc",question:"Actitud adecuada:",options:["Disciplina","Irrespeto","Burla"],answer:0,difficulty:"hard"},
        ]},
        { id:"b4c3s5", title:"Toques y cantos", summary:"Cantos en lengua lucumí y ritmos de batá articulan la ceremonia.", quiz:[
          {type:"tf",question:"Se cantan textos en lucumí.",answer:true,difficulty:"hard"},
          {type:"mc",question:"Función del toque:",options:["Convocar y honrar","Cancelar rito","Competir"],answer:0,difficulty:"hard"},
          {type:"mc",question:"Diálogo musical:",options:["Batá-voz","Trombón-arpa","Flauta-órgano"],answer:0,difficulty:"hard"},
        ]},
        { id:"b4c3s6", title:"Comunidad y ayuda", summary:"Redes de apoyo, visitas y comidas compartidas.", quiz:[
          {type:"mc",question:"Práctica comunitaria:",options:["Compartir y ayudar","Exclusión","Castigo sin motivo"],answer:0,difficulty:"easy"},
          {type:"tf",question:"La comunidad sostiene a sus miembros.",answer:true,difficulty:"easy"},
          {type:"mc",question:"Valor esencial:",options:["Solidaridad","Egoísmo","Aislamiento"],answer:0,difficulty:"hard"},
        ]},
        { id:"b4c3s7", title:"Fiestas populares", summary:"Procesiones y toques comunitarios abiertos al barrio.", quiz:[
          {type:"tf",question:"Hay celebraciones abiertas al vecindario.",answer:true,difficulty:"easy"},
          {type:"mc",question:"Efecto positivo:",options:["Cohesión social","Enfrentamiento","Silencio obligatorio"],answer:0,difficulty:"hard"},
          {type:"mc",question:"Lugar probable:",options:["Plaza/barrio","Aeródromo","Desierto"],answer:0,difficulty:"hard"},
        ]},
        { id:"b4c3s8", title:"Respeto intercultural", summary:"Dialogar con otras religiones y culturas en paz.", quiz:[
          {type:"mc",question:"Actitud adecuada:",options:["Diálogo respetuoso","Burlas","Imposición"],answer:0,difficulty:"easy"},
          {type:"tf",question:"Se promueve convivencia pacífica.",answer:true,difficulty:"easy"},
          {type:"mc",question:"Valor clave:",options:["Tolerancia","Intolerancia","Humillación"],answer:0,difficulty:"hard"},
        ]},
        { id:"b4c3s9", title:"Arte y santería", summary:"Pintura, fotografía y música representan símbolos orishas.", quiz:[
          {type:"mc",question:"Ejemplo de representación:",options:["Tronos y colores rituales","Frescos romanos en Pompeya","Vitral gótico de Chartres"],answer:0,difficulty:"hard"},
          {type:"tf",question:"El arte refleja lo religioso en Cuba.",answer:true,difficulty:"easy"},
          {type:"mc",question:"Cuidado al representar símbolos:",options:["Respeto y contexto","Burla pública","Uso dañino"],answer:0,difficulty:"hard"},
        ]},
        { id:"b4c3s10", title:"Aprender sin practicar", summary:"Conocer no obliga a creer: estudiar cultura con respeto es valioso.", quiz:[
          {type:"tf",question:"Se puede aprender sin practicar la religión.",answer:true,difficulty:"easy"},
          {type:"mc",question:"Actitud recomendada:",options:["Respeto cultural","Desprecio","Ridículo"],answer:0,difficulty:"easy"},
          {type:"mc",question:"Beneficio del estudio cultural:",options:["Comprensión y empatía","Aislamiento","Desinformación"],answer:0,difficulty:"hard"},
        ]},
      ],
    },
  ],
},

{
  id: "b5",
  emoji: "🏛️",
  color: "azul",
  title: "Cuba en el siglo XX y hoy (Historia moderna y sociedad)",
  chapters: [
    // ====== Capítulo 1: Independencia y República ======
    {
      id: "b5c1",
      title: "Independencia y República",
      summary: "Guerras del XIX, 1898 y la república (1902–1958). (PL: skrótowe podpowiedzi w nawiasach)",
      subtopics: [
        { id:"b5c1s1", title:"Guerra de los Diez Años (1868–78)", summary:"Levantamiento independentista en Yara; Carlos Manuel de Céspedes libera a sus esclavos.", quiz:[
          {type:"mc",question:"Grito inicial:",options:["Yara","Ayacucho","Pichincha"],answer:0,difficulty:"hard"},
          {type:"tf",question:"Céspedes liberó a sus esclavos en 1868.",answer:true,difficulty:"easy"},
          {type:"mc",question:"Meta del movimiento:",options:["Independencia","Anexión a otro imperio","Monarquía europea"],answer:0,difficulty:"hard"},
        ]},
        { id:"b5c1s2", title:"La Protesta de Baraguá (1878)", summary:"Antonio Maceo rechaza la paz sin independencia ni abolición plena. (PL: sprzeciw wobec traktatu)", quiz:[
          {type:"mc",question:"Líder de la Protesta:",options:["Antonio Maceo","Perucho Figueredo","Ignacio Agramonte"],answer:0,difficulty:"hard"},
          {type:"tf",question:"Se rechazó un pacto considerado insuficiente.",answer:true,difficulty:"easy"},
          {type:"mc",question:"Provincia histórica:",options:["Oriente","Pinar del Río","Isla de Pinos"],answer:0,difficulty:"hard"},
        ]},
        { id:"b5c1s3", title:"Guerra del 95", summary:"Martí organiza la ‘guerra necesaria’; caen Martí y Maceo.", quiz:[
          {type:"mc",question:"Organizador principal:",options:["José Martí","San Martín","Bolívar"],answer:0,difficulty:"easy"},
          {type:"tf",question:"Maceo murió en combate en 1896.",answer:true,difficulty:"hard"},
          {type:"mc",question:"Apoyo del exterior:",options:["Emigrados en Tampa/Key West","Imperio austrohúngaro","Tokio"],answer:0,difficulty:"hard"},
        ]},
        { id:"b5c1s4", title:"1898 y ocupación", summary:"Guerra hispano-estadounidense; ocupación militar y cambios administrativos. (PL: okres przejściowy)", quiz:[
          {type:"mc",question:"Año clave:",options:["1898","1910","1860"],answer:0,difficulty:"easy"},
          {type:"tf",question:"Hubo ocupación extranjera tras la guerra.",answer:true,difficulty:"easy"},
          {type:"mc",question:"Consecuencia:",options:["Transición a república","Imperio cubano","Reino vasallo"],answer:0,difficulty:"hard"},
        ]},
        { id:"b5c1s5", title:"República 1902–1952", summary:"Modernización, conflictos sociales, cultura urbana y rural. (PL: różne rządy)", quiz:[
          {type:"tf",question:"La república inició en 1902.",answer:true,difficulty:"easy"},
          {type:"mc",question:"Fenómeno urbano en La Habana:",options:["Crecimiento de prensa y música","Deshielo polar", "Imperio inca"],answer:0,difficulty:"hard"},
          {type:"mc",question:"Sector clave de exportación:",options:["Azúcar/tabaco","Nieve","Cobre ártico"],answer:0,difficulty:"hard"},
        ]},
        { id:"b5c1s6", title:"Figuras patrióticas", summary:"Agramonte, Maceo, Gómez, Martí: pensamiento y acción.", quiz:[
          {type:"mc",question:"‘El Mayor’:",options:["Ignacio Agramonte","Gómez","Maceo"],answer:0,difficulty:"hard"},
          {type:"tf",question:"Máximo Gómez fue general de origen dominicano.",answer:true,difficulty:"hard"},
          {type:"mc",question:"Autor del Himno de Bayamo:",options:["Perucho Figueredo","Sindo Garay","Fariñas"],answer:0,difficulty:"easy"},
        ]},
        { id:"b5c1s7", title:"Constitución y ciudadanía", summary:"Textos constitucionales, derechos y deberes. (PL: konstytucja = ustawa zasadnicza)", quiz:[
          {type:"mc",question:"La constitución es:",options:["Ley fundamental","Himno nacional","Cuento épico"],answer:0,difficulty:"easy"},
          {type:"tf",question:"La ciudadanía implica derechos y deberes.",answer:true,difficulty:"easy"},
          {type:"mc",question:"Ejemplo de derecho cívico:",options:["Asociación pacífica","Insulto público","Discriminación"],answer:0,difficulty:"hard"},
        ]},
        { id:"b5c1s8", title:"Cultura republicana", summary:"Teatros, cine, béisbol, música popular urbana.", quiz:[
          {type:"mc",question:"Deporte muy popular:",options:["Béisbol","Criquet indio","Sumo"],answer:0,difficulty:"easy"},
          {type:"tf",question:"El cine llegó temprano a Cuba.",answer:true,difficulty:"hard"},
          {type:"mc",question:"Género musical de salones:",options:["Danzón","Tarantella napolitana","Cueca chilena"],answer:0,difficulty:"hard"},
        ]},
        { id:"b5c1s9", title:"Economía azucarera", summary:"Ingenios, centrales y zafra marcaron el calendario social.", quiz:[
          {type:"tf",question:"La zafra es la cosecha de caña.",answer:true,difficulty:"easy"},
          {type:"mc",question:"Lugar de producción:",options:["Ingenio/central","Astillero","Fundición de hierro"],answer:0,difficulty:"hard"},
          {type:"mc",question:"Cultivo asociado:",options:["Tabaco","Trigo","Arroz de altura"],answer:0,difficulty:"hard"},
        ]},
        { id:"b5c1s10", title:"Auge urbano y turismo", summary:"Hoteles, cabaret y música con proyección internacional.", quiz:[
          {type:"mc",question:"Actividad turística famosa en mid-XX:",options:["Cabaret/música","Esquí alpino","Safari polar"],answer:0,difficulty:"easy"},
          {type:"tf",question:"Hubo modernización urbana en La Habana.",answer:true,difficulty:"easy"},
          {type:"mc",question:"Medio de difusión musical:",options:["Radio","Sólo papiros","Telex"],answer:0,difficulty:"hard"},
        ]},
      ],
    },

    // ====== Capítulo 2: 1959 y procesos sociales ======
    {
      id: "b5c2",
      title: "1959 y procesos sociales",
      summary: "De la expedición del Granma a campañas sociales. (PL: krótkie słowniczki dla pojęć trudnych)",
      subtopics: [
        { id:"b5c2s1", title:"Yate Granma (1956)", summary:"Desembarco en oriente; símbolo del proceso que triunfa en 1959.", quiz:[
          {type:"mc",question:"Nombre del yate:",options:["Granma","Santa María","Libertad"],answer:0,difficulty:"easy"},
          {type:"tf",question:"El desembarco fue en 1956.",answer:true,difficulty:"hard"},
          {type:"mc",question:"Región del desembarco:",options:["Oriente","Occidente","Centro-norte"],answer:0,difficulty:"hard"},
        ]},
        { id:"b5c2s2", title:"Triunfo de 1959", summary:"Cambio político y social de gran impacto. (PL: zmiana systemowa)", quiz:[
          {type:"tf",question:"El triunfo ocurrió en 1959.",answer:true,difficulty:"easy"},
          {type:"mc",question:"Un símbolo del proceso:",options:["Revolución de 1959","Reforma borbónica","Independencia de 1810"],answer:0,difficulty:"hard"},
          {type:"mc",question:"Un cambio social temprano:",options:["Campaña de alfabetización","Restauración imperial española","Prohibición de libros"],answer:0,difficulty:"hard"},
        ]},
        { id:"b5c2s3", title:"Alfabetización (1961)", summary:"Jóvenes enseñan a leer y escribir en todo el país.", quiz:[
          {type:"mc",question:"Año de la gran campaña:",options:["1961","1945","1979"],answer:0,difficulty:"easy"},
          {type:"tf",question:"Voluntarios fueron al campo y la ciudad.",answer:true,difficulty:"easy"},
          {type:"mc",question:"Habilidad enseñada:",options:["Lectoescritura","Navegación astral","Codificación binaria"],answer:0,difficulty:"hard"},
        ]},
        { id:"b5c2s4", title:"Salud y deporte", summary:"Extensión de servicios de salud y cultura física.", quiz:[
          {type:"tf",question:"El deporte escolar se impulsó con fuerza.",answer:true,difficulty:"easy"},
          {type:"mc",question:"Área de reconocimiento internacional:",options:["Medicina/deporte","Esquí nórdico","Cetrería"],answer:0,difficulty:"hard"},
          {type:"mc",question:"Valor asociado:",options:["Prevención y bienestar","Exclusión social","Pena corporal"],answer:0,difficulty:"hard"},
        ]},
        { id:"b5c2s5", title:"Educación y cultura", summary:"Acceso a escuelas, bibliotecas y difusión artística.", quiz:[
          {type:"mc",question:"Institución de lectura pública:",options:["Biblioteca","Búnker","Torre de control"],answer:0,difficulty:"easy"},
          {type:"tf",question:"Se ampliaron espacios educativos y culturales.",answer:true,difficulty:"easy"},
          {type:"mc",question:"Práctica escolar clave:",options:["Lectura y ciencias","Apuestas","Exclusión"],answer:0,difficulty:"hard"},
        ]},
        { id:"b5c2s6", title:"Relaciones internacionales", summary:"Alianzas, tensiones y crisis; geopolítica del Caribe. (PL: relacje międzynarodowe)", quiz:[
          {type:"mc",question:"Región estratégica:",options:["Caribe","Asia Central","Ártico"],answer:0,difficulty:"hard"},
          {type:"tf",question:"La política exterior influyó en la vida interna.",answer:true,difficulty:"hard"},
          {type:"mc",question:"Concepto de tensión global 1960s:",options:["Guerra Fría","Primavera de Praga (evento)","Pax Romana"],answer:0,difficulty:"hard"},
        ]},
        { id:"b5c2s7", title:"Cultura popular 60–80", summary:"Cine, nueva trova, ballet y deporte consolidan imagen cultural.", quiz:[
          {type:"mc",question:"Movimiento musical de canción social:",options:["Nueva trova","Heavy metal sinfónico","Grunge"],answer:0,difficulty:"hard"},
          {type:"tf",question:"El ballet alcanzó prestigio internacional.",answer:true,difficulty:"easy"},
          {type:"mc",question:"Festival del nuevo cine en:",options:["La Habana","Córdoba (ARG)","La Paz"],answer:0,difficulty:"hard"},
        ]},
        { id:"b5c2s8", title:"Economía y planificación", summary:"Cambios productivos, zafras y cooperativas. (PL: planowanie gospodarcze)", quiz:[
          {type:"tf",question:"Hubo metas de zafra azucarera.",answer:true,difficulty:"hard"},
          {type:"mc",question:"Organización rural:",options:["Cooperativas","Señoríos feudales","Fincas romanas"],answer:0,difficulty:"hard"},
          {type:"mc",question:"Producto tradicional:",options:["Azúcar/tabaco","Estaño","Litio"],answer:0,difficulty:"easy"},
        ]},
        { id:"b5c2s9", title:"Período Especial (1990s)", summary:"Crisis económica con escasez y cambios en la vida cotidiana.", quiz:[
          {type:"mc",question:"Década del Período Especial:",options:["1990s","1960s","2010s"],answer:0,difficulty:"easy"},
          {type:"tf",question:"Se vivieron carencias y ajustes.",answer:true,difficulty:"easy"},
          {type:"mc",question:"Estrategia doméstica común:",options:["Ahorro/reciclaje","Derroche","Lujo continuo"],answer:0,difficulty:"hard"},
        ]},
        { id:"b5c2s10", title:"Sociedad y resiliencia", summary:"Redes familiares, barrios y cultura ayudaron a resistir.", quiz:[
          {type:"tf",question:"La solidaridad barrial fue importante.",answer:true,difficulty:"easy"},
          {type:"mc",question:"Práctica de apoyo:",options:["Compartir y ayudar","Competir por todo","Aislarse"],answer:0,difficulty:"hard"},
          {type:"mc",question:"Expresión cultural que sostuvo ánimos:",options:["Música y deporte","Conquista militar","Duelo permanente"],answer:0,difficulty:"hard"},
        ]},
      ],
    },

    // ====== Capítulo 3: Retos contemporáneos ======
    {
      id: "b5c3",
      title: "Retos contemporáneos",
      summary: "Economía, vida cotidiana y comunidad hoy. (PL: krótkie słowa-klucze w nawiasach)",
      subtopics: [
        { id:"b5c3s1", title:"Abastecimiento y precios", summary:"Dificultades para adquirir alimentos y bienes básicos afectan a familias. (PL: zaopatrzenie)", quiz:[
          {type:"tf",question:"Hay problemas de abastecimiento en la actualidad.",answer:true,difficulty:"easy"},
          {type:"mc",question:"Reacción familiar responsable:",options:["Planificación/ahorro","Desperdicio","Acaparamiento dañino"],answer:0,difficulty:"hard"},
          {type:"mc",question:"Valor cívico útil:",options:["Solidaridad","Bullying","Fraude"],answer:0,difficulty:"hard"},
        ]},
        { id:"b5c3s2", title:"Transporte y movilidad", summary:"Infraestructura limitada; importancia del cuidado y prioridad a personas vulnerables.", quiz:[
          {type:"mc",question:"Buena práctica en bus:",options:["Ceder asiento","Empujar","Gritar"],answer:0,difficulty:"easy"},
          {type:"tf",question:"Hay limitaciones de transporte.",answer:true,difficulty:"easy"},
          {type:"mc",question:"Prioridad ética:",options:["Personas mayores/discapacidad","Selfie primero","Competir"],answer:0,difficulty:"hard"},
        ]},
        { id:"b5c3s3", title:"Vivienda y comunidad", summary:"Conservación, reparaciones y convivencia vecinal.", quiz:[
          {type:"tf",question:"La colaboración vecinal mejora viviendas comunes.",answer:true,difficulty:"easy"},
          {type:"mc",question:"Acción cívica positiva:",options:["Minga/trabajo voluntario","Grafiti ofensivo","Ruido nocturno"],answer:0,difficulty:"hard"},
          {type:"mc",question:"Cuidado del patrimonio doméstico:",options:["Mantenimiento","Abandono","Vandalismo"],answer:0,difficulty:"hard"},
        ]},
        { id:"b5c3s4", title:"Salud pública", summary:"Prevención, vacunas y hábitos saludables.", quiz:[
          {type:"mc",question:"Medida preventiva:",options:["Lavado de manos","Rumores","Automedicación sin control"],answer:0,difficulty:"easy"},
          {type:"tf",question:"Las vacunas protegen a la comunidad.",answer:true,difficulty:"easy"},
          {type:"mc",question:"Hábito recomendado:",options:["Ejercicio y descanso","Sedentarismo extremo","Humo en espacios cerrados"],answer:0,difficulty:"hard"},
        ]},
        { id:"b5c3s5", title:"Medio ambiente", summary:"Cuidado de costas, manglares y residuos.", quiz:[
          {type:"tf",question:"Los manglares protegen contra el oleaje.",answer:true,difficulty:"easy"},
          {type:"mc",question:"Acción ciudadana útil:",options:["Recogida de basura","Contaminar","Caza ilegal"],answer:0,difficulty:"hard"},
          {type:"mc",question:"Recurso natural frágil:",options:["Arrecifes de coral","Desierto de hielo","Glaciares alpinos (no en Cuba)"],answer:0,difficulty:"hard"},
        ]},
        { id:"b5c3s6", title:"Tecnología y educación", summary:"Uso responsable de internet y herramientas digitales.", quiz:[
          {type:"mc",question:"Buena práctica en línea:",options:["Citar fuentes","Plagio","Acoso"],answer:0,difficulty:"easy"},
          {type:"tf",question:"La tecnología puede apoyar el estudio.",answer:true,difficulty:"easy"},
          {type:"mc",question:"Riesgo a evitar:",options:["Desinformación","Lectura","Cooperación"],answer:0,difficulty:"hard"},
        ]},
        { id:"b5c3s7", title:"Cultura barrial", summary:"Proyectos comunitarios, deportes y arte local.", quiz:[
          {type:"mc",question:"Acción que fortalece el barrio:",options:["Proyectos culturales","Burlas","Exclusión"],answer:0,difficulty:"easy"},
          {type:"tf",question:"El deporte crea lazos sociales.",answer:true,difficulty:"easy"},
          {type:"mc",question:"Expresión artística cercana:",options:["Murales/peñas","Bombardeo", "Censura de lectura"],answer:0,difficulty:"hard"},
        ]},
        { id:"b5c3s8", title:"Trabajo y emprendimientos", summary:"Oficios, cooperativas y pequeños negocios.", quiz:[
          {type:"tf",question:"Existen oficios y pequeños negocios.",answer:true,difficulty:"easy"},
          {type:"mc",question:"Actitud clave:",options:["Creatividad y ética","Estafa","Desorden"],answer:0,difficulty:"hard"},
          {type:"mc",question:"Habilidad útil:",options:["Administrar recursos","Derrochar","Ignorar cuentas"],answer:0,difficulty:"hard"},
        ]},
        { id:"b5c3s9", title:"Participación cívica (PL: obywatelskość)", summary:"Respetar normas, cuidar espacios comunes, dialogar sin violencia.", quiz:[
          {type:"mc",question:"Acción cívica básica:",options:["Cuidar espacios públicos","Dañar parques","Escupir en el autobús"],answer:0,difficulty:"easy"},
          {type:"tf",question:"Dialogar con respeto mejora la convivencia.",answer:true,difficulty:"easy"},
          {type:"mc",question:"Ejemplo de participación pacífica:",options:["Reunión vecinal","Pelea callejera","Insulto"],answer:0,difficulty:"hard"},
        ]},
        { id:"b5c3s10", title:"Mirada al futuro", summary:"Apostar por estudio, ciencia, cultura y cooperación.", quiz:[
          {type:"mc",question:"Camino para mejorar:",options:["Estudio y cooperación","Desinformación","Odio"],answer:0,difficulty:"easy"},
          {type:"tf",question:"La cultura une y enseña a dialogar.",answer:true,difficulty:"easy"},
          {type:"mc",question:"Valor final propuesto:",options:["Esperanza con trabajo","Derrota permanente","Divide y vencerás"],answer:0,difficulty:"hard"},
        ]},
      ],
    },
  ],
},
];

export const BLOCK_ORDER = CONTENT.map(b => b.id);
