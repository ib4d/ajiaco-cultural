// Clean data: uses only double quotes and validated brackets.
// Exports: CONTENT (blocks) + BLOCK_ORDER.

export const CONTENT = [
  // ===== B1 =====
  {
    id: "b1",
    emoji: "🗺️",
    color: "azul",
    title: "¡Conoce a Cuba! (Geografía & Patrimonio)",
    chapters: [
      {
        id: "b1c1",
        title: "La Isla y sus límites",
        summary:
          "Cuba es un archipiélago en el Caribe con muchos cayos. Vecinos: EE. UU. al norte y México al oeste.",
        quiz: [
          { type: "tf", question: "Cuba es un archipiélago.", answer: true, difficulty: "easy" },
          {
            type: "mc",
            question: "¿Cómo se llaman las islas pequeñas alrededor de Cuba?",
            options: ["Cumbres", "Cayos", "Cordilleras"],
            answer: 1,
            difficulty: "easy",
          },
          {
            type: "mc",
            question: "¿En qué mar/océano está Cuba?",
            options: ["Caribe", "Pacífico", "Ártico"],
            answer: 0,
            difficulty: "easy",
          },
        ],
      },
      {
        id: "b1c2",
        title: "La Capital Maravilla",
        summary: "La Habana es la capital; su centro histórico es un sitio de alto valor cultural.",
        quiz: [
          {
            type: "mc",
            question: "¿Cuál es la capital de Cuba?",
            options: ["Santiago", "La Habana", "Trinidad"],
            answer: 1,
            difficulty: "easy",
          },
          { type: "tf", question: "La Habana NO es la capital de Cuba.", answer: false, difficulty: "easy" },
          {
            type: "mc",
            question: "El centro histórico de La Habana es famoso por su…",
            options: ["Playas", "Valor cultural", "Nieve"],
            answer: 1,
            difficulty: "easy",
          },
        ],
      },
      {
        id: "b1c3",
        title: "Ciudades Museo",
        summary:
          "Trinidad, Cienfuegos y Camagüey conservan arquitectura y trazados antiguos: verdaderos “museos vivos”.",
        quiz: [
          {
            type: "mc",
            question: "¿Cuál NO es una ciudad patrimonial mencionada?",
            options: ["Trinidad", "Camagüey", "Tokio"],
            answer: 2,
            difficulty: "easy",
          },
          { type: "tf", question: "Cienfuegos es conocida por su arquitectura.", answer: true, difficulty: "easy" },
          {
            type: "mc",
            question: "Camagüey es famosa por sus…",
            options: ["Rascacielos", "Calles laberínticas", "Desiertos"],
            answer: 1,
            difficulty: "easy",
          },
        ],
      },
    ],
  },

  // ===== B2 =====
  {
    id: "b2",
    emoji: "🍲",
    color: "rojo",
    title: "Las Raíces del Ajiaco (Historia inicial y cultura)",
    chapters: [
      {
        id: "b2c1",
        title: "Los Primeros Habitantes",
        summary: "Taínos y siboney vivían antes de los europeos; pescaban, cazaban y cultivaban yuca.",
        quiz: [
          { type: "mc", question: "Un pueblo originario fue…", options: ["Vikingos", "Taínos", "Romanos"], answer: 1, difficulty: "easy" },
          { type: "tf", question: "Los siboney vivían en Cuba antes de Colón.", answer: true, difficulty: "easy" },
          { type: "mc", question: "¿Qué cultivo era importante?", options: ["Yuca", "Trigo", "Arroz"], answer: 0, difficulty: "easy" },
        ],
      },
      {
        id: "b2c2",
        title: "La llegada de Colón",
        summary: "Colón llegó en 1492 y llamó a la isla “Juana”; con el tiempo prevaleció “Cuba”.",
        quiz: [
          { type: "tf", question: "Colón llegó en 1492.", answer: true, difficulty: "easy" },
          { type: "mc", question: "¿Cómo llamó Colón a la isla?", options: ["Juana", "Isabela", "María"], answer: 0, difficulty: "easy" },
          { type: "mc", question: "Nombre actual:", options: ["Juana", "Cuba", "Antillas"], answer: 1, difficulty: "easy" },
        ],
      },
      {
        id: "b2c3",
        title: "Ajiaco Cultural",
        summary: "La cultura cubana mezcla raíces de América, Europa y África, como un ajiaco con muchos sabores.",
        quiz: [
          { type: "tf", question: "La cultura cubana mezcla influencias de varios continentes.", answer: true, difficulty: "easy" },
          { type: "mc", question: "¿Cuál NO mencionamos?", options: ["África", "Europa", "Oceanía"], answer: 2, difficulty: "easy" },
          { type: "mc", question: "El “ajiaco” simboliza…", options: ["Un deporte", "Una mezcla cultural", "Una bandera"], answer: 1, difficulty: "easy" },
        ],
      },
    ],
  },

  // ===== B3 (extra questions included) =====
  {
    id: "b3",
    emoji: "🥁",
    color: "azulClaro",
    title: "El Ritmo y la Expresión (Cultura, Música y Literatura)",
    chapters: [
      {
        id: "b3c1",
        title: "El idioma en Cuba",
        summary: "El español es oficial; también existen otras variedades y lenguas comunitarias como el criollo haitiano.",
        quiz: [
          { type: "mc", question: "El idioma oficial de Cuba es…", options: ["Inglés", "Español", "Francés"], answer: 1, difficulty: "easy" },
          { type: "tf", question: "En Cuba solo se habla español, sin otras lenguas.", answer: false, difficulty: "easy" },
          { type: "mc", question: "Una lengua de comunidad en Cuba es…", options: ["Criollo haitiano", "Alemán", "Japonés"], answer: 0, difficulty: "easy" },
          { type: "mc", question: "¿Qué significa “bilingüe”?", options: ["Hablar dos lenguas", "Cantar rápido", "Bailar en pareja"], answer: 0, difficulty: "easy" },
          { type: "tf", question: "Los idiomas pueden cambiar según la región.", answer: true, difficulty: "easy" },
          { type: "mc", question: "El “acento” se refiere a…", options: ["Color de la bandera", "Forma de pronunciar", "Tamaño del libro"], answer: 1, difficulty: "easy" },
          { type: "mc", question: "El criollo haitiano en Cuba se debe a…", options: ["Migraciones e historia compartida", "Invento moderno", "Idioma secreto de piratas"], answer: 0, difficulty: "hard" },
          { type: "tf", question: "Los préstamos lingüísticos son palabras que vienen de otras lenguas.", answer: true, difficulty: "hard" },
          { type: "mc", question: "“Guagua” en Cuba significa…", options: ["Carro de caballos", "Autobús", "Tren"], answer: 1, difficulty: "hard" },
          { type: "mc", question: "El español de Cuba pertenece a la rama…", options: ["Romance", "Germánica", "Eslava"], answer: 0, difficulty: "hard" },
          { type: "tf", question: "En Cuba todas las personas usan las mismas palabras en todas las provincias.", answer: false, difficulty: "easy" },
          { type: "mc", question: "Una razón de la diversidad lingüística es…", options: ["Aislamiento total", "Intercambios culturales", "Prohibición de viajar"], answer: 1, difficulty: "hard" },
          { type: "mc", question: "El término “idioma oficial” indica…", options: ["Idioma usado por el Estado", "Idioma prohibido", "Idioma para secretos"], answer: 0, difficulty: "easy" },
        ],
      },
      {
        id: "b3c2",
        title: "Héroes de la literatura",
        summary: "José Martí fue escritor y pensador; escribió versos y cuentos para niños con valores de libertad y justicia.",
        quiz: [
          { type: "mc", question: "¿Quién fue José Martí?", options: ["Músico", "Escritor y pensador", "Pintor"], answer: 1, difficulty: "easy" },
          { type: "tf", question: "Martí escribió también para niños.", answer: true, difficulty: "easy" },
          { type: "mc", question: "Un valor clave en su obra es…", options: ["Libertad", "Pereza", "Olvido"], answer: 0, difficulty: "easy" },
          { type: "mc", question: "Un “verso” es…", options: ["Parte de un poema", "Tipo de tambor", "Una ciudad"], answer: 0, difficulty: "easy" },
          { type: "tf", question: "La literatura puede inspirar valores y acciones.", answer: true, difficulty: "easy" },
          { type: "mc", question: "Martí promovía sobre todo…", options: ["La tiranía", "La libertad y la dignidad", "El egoísmo"], answer: 1, difficulty: "hard" },
          { type: "mc", question: "“La Edad de Oro” es…", options: ["Un libro para niños", "Una salsa famosa", "Un instrumento"], answer: 0, difficulty: "hard" },
          { type: "tf", question: "Los héroes literarios siempre son reales.", answer: false, difficulty: "easy" },
          { type: "mc", question: "La “metáfora” es…", options: ["Un instrumento musical", "Una comparación poética", "Un baile"], answer: 1, difficulty: "hard" },
          { type: "mc", question: "La obra de Martí buscaba…", options: ["Sumisión", "Formación ética", "Silencio"], answer: 1, difficulty: "hard" },
          { type: "tf", question: "Leer cuentos fortalece la imaginación.", answer: true, difficulty: "easy" },
          { type: "mc", question: "Un género que NO practicó Martí fue…", options: ["Ensayo", "Poesía", "Cómic de superhéroes"], answer: 2, difficulty: "easy" },
          { type: "mc", question: "La palabra “patria” en Martí se relaciona con…", options: ["Riqueza material", "Amor y deber cívico", "Moda"], answer: 1, difficulty: "hard" },
        ],
      },
      {
        id: "b3c3",
        title: "Instrumentos y géneros",
        summary:
          "Tres, claves y bongó marcan ritmos como son, rumba y cha cha chá. El casino es un baile social.",
        quiz: [
          { type: "mc", question: "¿Cuál es un instrumento cubano?", options: ["Tres", "Violín eléctrico", "Erhu"], answer: 0, difficulty: "easy" },
          { type: "tf", question: "El casino es un baile social en Cuba.", answer: true, difficulty: "easy" },
          { type: "mc", question: "Un género famoso es…", options: ["Rumba", "Polka sueca", "Techno"], answer: 0, difficulty: "easy" },
          { type: "mc", question: "Las “claves” se tocan…", options: ["Con arco", "Con baquetas", "Golpeando dos maderas"], answer: 2, difficulty: "easy" },
          { type: "tf", question: "El “son” influyó en la salsa.", answer: true, difficulty: "hard" },
          { type: "mc", question: "El bongó suele tocarse con…", options: ["Palillos", "Manos", "Pies"], answer: 1, difficulty: "easy" },
          { type: "mc", question: "El “tres” es una…", options: ["Guitarra de tres órdenes dobles", "Flauta de pan", "Marimba"], answer: 0, difficulty: "hard" },
          { type: "tf", question: "La rumba es patrimonio cultural inmaterial de la humanidad.", answer: true, difficulty: "hard" },
          { type: "mc", question: "El “cha cha chá” nació…", options: ["En salones de baile cubanos", "En Alaska", "En un circo"], answer: 0, difficulty: "easy" },
          { type: "mc", question: "El “tumbao” describe…", options: ["Patrón rítmico", "Zapato típico", "Tipo de fruta"], answer: 0, difficulty: "hard" },
          { type: "tf", question: "Los géneros cubanos no se bailan en pareja.", answer: false, difficulty: "easy" },
          { type: "mc", question: "La clave más común en el son es…", options: ["2-3 o 3-2", "1-1", "5-0"], answer: 0, difficulty: "hard" },
          { type: "mc", question: "Un instrumento que acompaña al son es…", options: ["Piano", "Gaita escocesa", "Theremín"], answer: 0, difficulty: "hard" },
        ],
      },
    ],
  },

  // ===== B4 =====
  {
    id: "b4",
    emoji: "✨",
    color: "azulClaro",
    title: "La Fuerza de los Orishas (Religión y Santería)",
    chapters: [
      {
        id: "b4c1",
        title: "¿Qué es la Santería?",
        summary: "También llamada Regla de Ocha/Lucumí, con raíces yoruba y elementos del catolicismo.",
        quiz: [
          { type: "tf", question: "La Santería tiene raíces yoruba.", answer: true, difficulty: "easy" },
          { type: "mc", question: "Otro nombre es…", options: ["Regla de Ocha", "Regla de Tango", "Regla del Mar"], answer: 0, difficulty: "easy" },
          { type: "mc", question: "Comparte elementos con…", options: ["Budismo", "Catolicismo", "Hinduismo"], answer: 1, difficulty: "easy" },
        ],
      },
      {
        id: "b4c2",
        title: "Olodumare y el Achée",
        summary: "Olodumare como dios supremo; achée como fuerza vital/espiritual.",
        quiz: [
          { type: "mc", question: "Olodumare es…", options: ["Un instrumento", "Dios supremo", "Un baile"], answer: 1, difficulty: "easy" },
          { type: "tf", question: "El achée se relaciona con fuerza vital y suerte.", answer: true, difficulty: "easy" },
          { type: "mc", question: "El achée NO es…", options: ["Poder espiritual", "Energía vital", "Un animal"], answer: 2, difficulty: "easy" },
        ],
      },
      {
        id: "b4c3",
        title: "Orishas principales",
        summary:
          "Changó y Yemayá se relacionan popularmente con Santa Bárbara y la Virgen de Regla.",
        quiz: [
          { type: "mc", question: "Changó se asocia con…", options: ["San Juan", "Santa Bárbara", "San Pedro"], answer: 1, difficulty: "easy" },
          { type: "mc", question: "Yemayá se relaciona con…", options: ["Virgen de Regla", "San José", "Santa Lucía"], answer: 0, difficulty: "easy" },
          { type: "tf", question: "Los orishas no existen en la tradición cubana.", answer: false, difficulty: "easy" },
        ],
      },
    ],
  },

  // ===== B5 =====
  {
    id: "b5",
    emoji: "🏛️",
    color: "azul",
    title: "Cuba en el siglo XX y hoy (Historia moderna y sociedad)",
    chapters: [
      {
        id: "b5c1",
        title: "Independencia",
        summary: "La lucha por la independencia tuvo figuras como José Martí y el ideal de una patria libre.",
        quiz: [
          { type: "mc", question: "¿Quién fue clave en la independencia?", options: ["José Martí", "Pablo Picasso", "Leo Messi"], answer: 0, difficulty: "easy" },
          { type: "tf", question: "La independencia fue un deseo de libertad.", answer: true, difficulty: "easy" },
          { type: "mc", question: "Martí es recordado por…", options: ["Gastronomía", "Pensamiento y poesía", "Arquitectura moderna"], answer: 1, difficulty: "easy" },
        ],
      },
      {
        id: "b5c2",
        title: "1959 y el Granma",
        summary: "En 1959 triunfó la Revolución. El yate Granma llevó a expedicionarios clave.",
        quiz: [
          { type: "tf", question: "El yate Granma fue parte de la historia de 1959.", answer: true, difficulty: "easy" },
          { type: "mc", question: "¿Qué ocurrió en 1959?", options: ["Independencia de España", "Triunfo de la Revolución", "Mundial de fútbol"], answer: 1, difficulty: "easy" },
          { type: "mc", question: "El Granma es un…", options: ["Avión", "Tren", "Yate"], answer: 2, difficulty: "easy" },
        ],
      },
      {
        id: "b5c3",
        title: "Retos de hoy",
        summary:
          "Desafíos como la escasez y salarios insuficientes. Familias valoran salud, educación y comunidad.",
        quiz: [
          { type: "tf", question: "Uno de los desafíos actuales es la escasez.", answer: true, difficulty: "easy" },
          { type: "mc", question: "Algo valorado por muchas familias es…", options: ["Educación y salud", "Nieve constante", "Desiertos"], answer: 0, difficulty: "easy" },
          { type: "mc", question: "Un problema mencionado es…", options: ["Ríos muy largos", "Salarios insuficientes", "Demasiados volcanes"], answer: 1, difficulty: "easy" },
        ],
      },
    ],
  },

  // ===== B6 =====
  {
    id: "b6",
    emoji: "🍽️",
    color: "rojo",
    title: "Sabor y Naturaleza (Gastronomía y entornos)",
    chapters: [
      {
        id: "b6c1",
        title: "Platos del ajiaco",
        summary: "El ajiaco es una sopa criolla con viandas y carnes. Cada región le da su toque.",
        quiz: [
          { type: "mc", question: "El ajiaco es…", options: ["Un baile", "Una sopa criolla", "Un instrumento"], answer: 1, difficulty: "easy" },
          { type: "tf", question: "Todas las regiones lo preparan igual.", answer: false, difficulty: "easy" },
          { type: "mc", question: "El ajiaco lleva…", options: ["Viandas", "Chicle", "Helado"], answer: 0, difficulty: "easy" },
        ],
      },
      {
        id: "b6c2",
        title: "Cayos y playas",
        summary:
          "Muchos cayos y playas de aguas claras; hábitat de peces y aves, importantes para la naturaleza.",
        quiz: [
          { type: "tf", question: "Los cayos son islas pequeñas.", answer: true, difficulty: "easy" },
          { type: "mc", question: "Una característica de las playas cubanas es…", options: ["Aguas claras", "Hielo", "Niebla densa"], answer: 0, difficulty: "easy" },
          { type: "mc", question: "¿Qué animales pueden vivir allí?", options: ["Peces y aves", "Pingüinos emperador", "Camellos"], answer: 0, difficulty: "easy" },
        ],
      },
      {
        id: "b6c3",
        title: "Frutas del Caribe",
        summary: "Mango, guayaba y piña crecen en climas cálidos: dulces y ricas en vitaminas.",
        quiz: [
          { type: "mc", question: "Una fruta caribeña es…", options: ["Mango", "Arándano ártico", "Ciruela de nieve"], answer: 0, difficulty: "easy" },
          { type: "tf", question: "El clima cálido ayuda a estas frutas.", answer: true, difficulty: "easy" },
          { type: "mc", question: "Las frutas suelen tener…", options: ["Vitaminas", "Petróleo", "Metal"], answer: 0, difficulty: "easy" },
        ],
      },
    ],
  },

  // ===== B7 =====
  {
    id: "b7",
    emoji: "🎨",
    color: "azulClaro",
    title: "Arte y Personajes",
    chapters: [
      {
        id: "b7c1",
        title: "Pintura y colores",
        summary:
          "Artistas cubanos usan colores vivos e historias de su gente. El arte narra vida y emociones.",
        quiz: [
          { type: "mc", question: "El arte sirve para…", options: ["Dormir", "Expresar ideas y emociones", "Hacer silencio"], answer: 1, difficulty: "easy" },
          { type: "tf", question: "Los colores pueden contar historias.", answer: true, difficulty: "easy" },
          { type: "mc", question: "Un lugar para ver arte es…", options: ["Museo", "Heladería", "Cancha de tenis"], answer: 0, difficulty: "easy" },
        ],
      },
      {
        id: "b7c2",
        title: "Teatro y cine",
        summary: "Teatro y cine cuentan historias de la vida cubana: a veces hacen reír, otras pensar.",
        quiz: [
          { type: "mc", question: "El teatro y el cine…", options: ["Nunca cuentan historias", "Pueden hacer reír o pensar", "Solo son documentales"], answer: 1, difficulty: "easy" },
          { type: "tf", question: "En Cuba no existe el teatro.", answer: false, difficulty: "easy" },
          { type: "mc", question: "Un lugar para ver cine es…", options: ["Sala de cine", "Panadería", "Piscina"], answer: 0, difficulty: "easy" },
        ],
      },
            {
              id: "b7c3",
              title: "Figuras destacadas",
              summary: "Músicos, deportistas y escritores inspiran con talento y esfuerzo.",
              quiz: [
                { type: "tf", question: "Hay deportistas y músicos cubanos conocidos.", answer: true, difficulty: "easy" },
                { type: "mc", question: "Una cualidad de estas figuras es…", options: ["Esfuerzo", "Pereza", "Descuido"], answer: 0, difficulty: "easy" },
                { type: "mc", question: "¿Qué los caracteriza más?", options: ["Talento", "Indiferencia", "Olvido"], answer: 0, difficulty: "easy" }
              ],
            },
          ],
        },
      ];
      
      export const BLOCK_ORDER = ["b1", "b2", "b3", "b4", "b5", "b6", "b7"];
