

class Agente {
    constructor(id, nombre, imagen, atributo, especificacion, descripcion) {
        this.id             = id;
        this.nombre         = nombre;
        this.imagen         = imagen;
        this.atributo       = atributo;
        this.especificacion = especificacion;
        this.descripcion    = descripcion;
    }

    getColorAtributo() {
        const colores = {
            "Electrico": "warning",
            "Eter":      "success",
            "Fisico":    "secondary",
            "Fuego":     "danger",
            "Hielo":     "info",
        };
        return colores[this.atributo] || "secondary";
    }

    generarCard() {
        const color  = this.getColorAtributo();
        const imgSrc = this.imagen || "https://placehold.co/300x200?text=Sin+imagen";

        return `
        <div class="col agente-card"
             data-atributo="${this.atributo}"
             data-rol="${this.especificacion}">
            <div class="card h-100 shadow-sm border-${color}">
                <img src="${imgSrc}"
                     class="card-img-top"
                     alt="${this.nombre}"
                     style="height:200px; object-fit:contain;"
                     onerror="this.src='https://placehold.co/300x200?text=${encodeURIComponent(this.nombre)}'">
                <div class="card-body text-center">
                    <h5 class="card-title">${this.nombre}</h5>
                    <p class="card-text text-muted small">Atributo: ${this.atributo || "?"} | Rol: ${this.especificacion || "?"}</p>
                    <button class="btn btn-${color} w-100 btn-abrir-modal ${color === "warning" || color === "info" ? "text-dark" : ""}"
                            data-id-agente="${this.id}">
                        Ver detalles
                    </button>
                </div>
            </div>
        </div>`;
    }
}

// ============================================================
// HERENCIA - AgenteJugable extiende Agente
// ============================================================
class AgenteJugable extends Agente {
    constructor(id, nombre, imagen, atributo, especificacion, descripcion, buildpremium, buildF2P, sinergias) {
        super(id, nombre, imagen, atributo, especificacion, descripcion);
        this.buildpremium = buildpremium;
        this.buildF2P     = buildF2P;
        this.sinergias    = sinergias;
    }

    getBuildResumen() {
        if (!this.buildpremium && !this.buildF2P) return "Sin información de build disponible.";
        return `Premium: ${this.buildpremium || "N/D"} | F2P: ${this.buildF2P || "N/D"}`;
    }
}

// ============================================================
// CLASE FACCION
// ============================================================
class Faccion {
    constructor(id, nombre, sector, imagen, color, descripcion, miembros) {
        this.id          = id;
        this.nombre      = nombre;
        this.sector      = sector;
        this.imagen      = imagen;
        this.color       = color;
        this.descripcion = descripcion;
        this.miembros    = miembros; // array de strings
    }

    generarCard() {
        const miembrosHTML = this.miembros
            .map(m => `<li>${m}</li>`)
            .join("");

        const textoBtn = this.color === "warning" || this.color === "info" ? "text-dark" : "";

        return `
        <div class="col">
            <div class="card h-100 shadow-sm border-${this.color}">
                <img src="${this.imagen}"
                     class="card-img-top"
                     alt="${this.nombre}"
                     style="height:180px; object-fit:contain;"
                     onerror="this.src='https://placehold.co/300x180?text=${encodeURIComponent(this.nombre)}'">
                <div class="card-body text-center">
                    <h5 class="card-title">${this.nombre}</h5>
                    <p class="card-text text-muted">Sector: ${this.sector}</p>
                    <button class="btn btn-${this.color} ${textoBtn} w-100"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#${this.id}"
                            aria-expanded="false">
                        Ver detalles
                    </button>
                    <div class="collapse mt-3 text-start" id="${this.id}">
                        <hr>
                        <p class="small"><strong>Descripción:</strong> ${this.descripcion}</p>
                        <h6>Miembros:</h6>
                        <ul class="small">${miembrosHTML}</ul>
                    </div>
                </div>
            </div>
        </div>`;
    }
}

// ============================================================
// BASE DE DATOS - AGENTES
// ============================================================
const listaAgentes = [
    // LIEBRES ASTUTAS
    new AgenteJugable("Nekomata",       "Nekomiya Mana",          "https://zzz.gg/_ipx/w_1100&q_70/images/IconRole11.png", "Fisico",    "Atacante",  "«La mejor caballa siempre es la que aún no has comido~» — Nekomiya Mana Espíritu vivaz y traviesa, le gusta hacer bromas a los demás. Tu cartera es su cartera. (De verdad... ahora es suya.) Atlética y atrevida, ningún Hollow es demasiado peligroso para ella. «Los gatos aman el pescado» en realidad es un estereotipo incorrecto. Pero a Nekomata sí le encanta el pescado... Ha presenciado muchas cat-ástrofes y momentos de “la curiosidad mató al gato”, y ha visto muchos secretos que no se pueden contar.", "", "", ""),
    new AgenteJugable("Anby",           "Anby Demara",            "https://zzz.gg/_ipx/w_1100&q_70/images/IconRole01.png", "Electrico", "Aturdidor", "Una misteriosa joven que nunca habla sobre su pasado, casi como si no tuviera uno. Es tranquila y serena, y sorprendentemente competente y eficiente en combate, casi como si hubiera tenido años de entrenamiento. En un incidente inesperado, Nicole la llevó de vuelta a los Cunning Hares, y desde entonces ha tenido independencia emocional propia. Le encanta ver películas, pero debido a cierta falta de sentido común, parece casi creer que son historias de la vida real.", "", "", ""),
    new AgenteJugable("Nicole",         "Nicole Demara",          "https://zzz.gg/_ipx/w_1100&q_70/images/IconRole12.png", "Eter",      "Auxiliar",  "La líder de la agencia de trabajos variados las Liebres Astutas, que aceptan todo tipo de encargos relacionados con Hollow. Ha estado en las calles durante muchos años, y tiene una reputación entre sus colegas de ser extremadamente astuta. Ha sido incluida en la lista negra de muchos clientes debido a su enfoque de todo o nada. Le encanta el dinero, pero sorprendentemente es mala manejándolo, dejando a las Liebres Astutas constantemente al borde de la quiebra y con muchas deudas.", "", "", ""),
    new AgenteJugable("Billy",          "Billy Kid",              "https://zzz.gg/_ipx/w_1100&q_70/images/IconRole10.png", "Fisico",    "Atacante",  "Un cyborg guapo con una personalidad desenfadada y despreocupada. Es un gran fan del programa Starlight Knight, no solo se refiere a sí mismo como uno de los Starlight Knights, sino que también repite muchas frases clásicas del programa. Llama a su par de revólveres especiales hechos a medida y de gran calibre “las chicas”. Parece que fueron un regalo de un viejo amigo. Puede parecer poco confiable, pero una vez que se lo toma en serio, Billy puede enfrentar cualquier desafío.", "", "", ""),
  
    // SERVICIOS DOMÉSTICOS VICTORIA
    new AgenteJugable("Ellen",          "Ellen Joe",              "https://pic.bittopup.com/apiUpload/94bb5b40cb16e7d12f8f91385c475c85.jpg", "Hielo", "Atacante", "«Vamos a terminar aquí. Estoy cansado.» «Un momento, déjame revisar... todavía quedan... ¡dos preguntas!» «...zzz... » «¿Señorita Ellen? ¿Señorita Ellen? Ya se ha dormido...»", ""),
    new AgenteJugable("Lycaon",         "Von Lycaon",             "https://zzz.gg/_ipx/w_1100&q_70/images/IconRole18.png", "Hielo",     "Aturdidor", "Puede resolver cualquier asunto. El más confiable de los asistentes y un apoyo sólido para cualquier equipo. Racional y sabio, un verdadero caballero que no puede tolerar ni una sola mancha. Ofrece lealtad absoluta a quien decida seguir. Aunque exteriormente es sofisticado y racional, su carácter salvaje innato se revelará cuando se enfrente a ciertos peligros.", "", "", ""),
    new AgenteJugable("Rina",           "Alexandrina Sebastiane", "https://zzz.gg/_ipx/w_1100&q_70/images/IconRole22.png", "Electrico", "Auxiliar",  "¿Eres el nuevo maestro? Rina de Victoria Housekeeping, a tu servicio. ¡Oh, cielos, ¿has visto la hora? Acabo de preparar unos bocadillos~ Déjame llevárselos a todos~ ¡Ah! No, no gracias!!! Te—Tenemos otra entrevista después... ¡Nos iremos ahora!", "", "", ""),
    new AgenteJugable("Corin Wickes",   "Corin Wickes",           "https://zzz.gg/_ipx/w_1100&q_70/images/IconRole09.png", "Fisico",    "Atacante",  "Coletas dobles, un uniforme de sirvienta — (En-nu en-nah, parece una niña dulce.) Una mochila de osito — (¿La mochila probablemente está llena de suministros de limpieza, verdad? ¡Qué profesional!) Un trapeador — ¿Eh? ¿Una aspiradora...? No, esta \"herramienta de limpieza\" que parece tan fuera de lo común parece ser una... motosierra eléctrica? ...¿Una motosierra?! Corin: Disculpe... ¿Es usted quien reservó el servicio de limpieza doméstica con Victoria Housekeeping? Eh... Mi nombre es Corin, Géminis; tipo de sangre Rh negativo...", "", "", ""),

    // INDUSTRIAS BELOBOG
    new AgenteJugable("Grace",          "Grace Howards",          "https://zzz.gg/_ipx/w_1100&q_70/images/IconRole20.png", "Electrico", "Anomalo",   "¿Hay algo raro con el audio de tu micrófono? Hmm, es posible que un cabello se haya metido... ¿Te importa si reviso tus partes internas por ti?", "", "", ""),
    new AgenteJugable("Koleda",         "Koleda Belobog",         "https://zzz.gg/_ipx/w_1100&q_70/images/IconRole14.png", "Fuego",     "Aturdidor", "Pequeña y Linda, Con Algo de Poder de Combate Feroz Puede ser pequeña, pero ciertamente puede manejar ese enorme martillo. Una Joven Feroz que También es Presidenta La joven líder al mando de Belobog Industries. Una Presidenta que Lidera con el Ejemplo Prefiere trabajar en el campo, en lugar de estar atrapada en un escritorio. Lidera con el Ejemplo Mientras Mantiene su Naturaleza Linda Su madurez a veces cede a momentos de infantilismo. Es una líder que a veces necesita ser cuidada por sus seguidores.", "", "", ""),
    new AgenteJugable("Anton",          "Anton Ivanov",           "https://zzz.gg/_ipx/w_1100&q_70/images/IconRole15.png", "Electrico", "Atacante",  "Inspira a otros con su pasión por el trabajo Miembro senior del personal de Belobog Industries, es un gerente de proyectos en el sitio que siempre está listo para actuar.Enérgico y fiable Está lleno de energía y siempre está a la altura de las circunstancias. De buen corazón a pesar de las apariencias Con lengua afilada pero corazón blando, no puede decir 'no' a quienes lo necesitan. Fuerte, sincero y directo Abierto y honesto, nada parece alterarlo.", "", "", ""),
    new AgenteJugable("Ben",            "Ben Bigger",             "https://zzz.gg/_ipx/w_1100&q_70/images/IconRole16.png", "Fuego",     "Defensor",  "“Soy un poco nerd de las matemáticas, pero eso no me impide darle unos golpes a algunos matones.” — Ben Bigger “Ejem, hola, fui invitado para representar a la gerencia de Belobog Industries en esta entrevista. Soy Ben Bigger. Oh… no voy a comerte, no hay necesidad de hacerse el muerto.” ¿Quién te dio permiso para entrar al sitio de construcción sin casco? ¿Eh? ¡Ponte uno! Ah, cierto, todavía me queda un poco de caviar de hoy, puedes probar un poco.", "", "", ""),

    // DIVISIÓN N.º 6
    new AgenteJugable("Soukaku",        "Soukaku",                "https://zzz.gg/_ipx/w_1100&q_70/images/IconRole17.png", "Hielo",     "Auxiliar",  "\"Glotona\" — el nombre con el que más han llamado a Soukaku.  Pocas personas saben que su apodo completo es: La pequeñita linda que siempre devora todo lo que puede y está súper feliz cuando está llena, pero que no sabe leer ni escribir.", "", "", ""),
    new AgenteJugable("Yanagi",         "Tsukishiro Yanagi",      "https://zzz.gg/_ipx/w_1100&q_70/images/IconRole31.png", "Electrico", "Anomalo",   '¡Soy Tsukishiro Yanagi de la Sección de Operaciones Especiales Hueca 6! He escuchado que la Sección 6 es lo mejor de lo mejor. ¿Qué tipo de trabajo hace la señorita Yanagi, como Subjefa, en el día a día? ¡Todos deben tener mucha curiosidad! Bueno... es difícil de decir. A veces, termino trabajando hasta el día siguiente sin darme ni cuenta.', "", "", ""),
    new AgenteJugable("Harumasa",       "Harumasa",               "https://zzz.gg/_ipx/w_1100&q_70/images/IconRole35.png", "Electrico", "Atacante",  "Ejem… siento que mi estado ha empeorado...Tengo ojeras, todo el cuerpo me duele y me siento tan desorientado que estoy a punto de mutar en un Etéreo.Subalterno, ¿no me vas a dar una nota de baja por enfermedad?", "", "", ""),
    new AgenteJugable("Miyabi",         "Hoshimi Miyabi",         "https://zzz.honeyhunterworld.com/img/character/1091-char_role_icon.webp", "Hielo", "Anomalo", "¡Es el Jefe Hoshimi Miyabi de la Sección 6 de Operaciones Especiales Hollow! Como la cazadora del Vacío más joven en la historia, me pregunto si la Sra. Miyabi tiene algún consejo sobre cómo volverse más fuerte que le gustaría compartir con todos. Como guerrero, solo a través del entrenamiento continuo se puede lograr la verdadera maestría, sin importar el tipo de entrenamiento.", "", "", ""),

    // NEPS
    new AgenteJugable("Zhu Yuan",       "Zhu Yuan",               "https://zzz.gg/_ipx/w_1100&q_70/images/IconRole23.png", "Eter",      "Atacante",  "Líder del equipo de Investigación Criminal de Seguridad Pública, Zhu Yuan, en línea. Puedes venir a mí si necesitas ayuda. Perdón, pero ¿ya has dado aviso previo y obtenido aprobación para esta entrevista? Sí, aquí están los documentos firmados por PR. Vale. Bueno, tenemos cinco minutos, ¡entonces~", "", "", ""),
    new AgenteJugable("Qingyi",         "Qingyi",                 "https://zzz.gg/_ipx/w_1100&q_70/images/IconRole29.png", "Electrico", "Aturdidor", '\"Un encuentro casual, justo como esperaba.\"  Qingyi  \"¿Vagando? No lo entiendo... Todavía hay tanto que tengo que aprender sobre la jerga juvenil.\" \"Puede que esté en piloto automático, pero aún así estoy avanzando en el trabajo.\" \"Bueno, ya que no queda nada más por hacer, me retiraré.\"', "", "", ""),
    new AgenteJugable("Seth",           "Seth Lowell",            "https://zzz.gg/_ipx/w_1100&q_70/images/IconRole30.png", "Electrico", "Defensor",  "", "", "", ""),
    new AgenteJugable("Jane Doe",       "Jane Doe",               "https://zzz.gg/_ipx/w_1100&q_70/images/IconRole24.png", "Fisico",    "Anomalo",   "«Bueno, ¡la última vez fue la última vez! Esta vez, estoy diciendo la verdad. Confía en mí~» Jane Doe ¿Qué soy? Un gato Thiren. Puedes apostar que soy de verdad. «*suspiro*... Tener una línea tan rara solía darme bastante dolor de cabeza.» «¿Por qué te mentiría? Miau~»", "", "", ""),

    // HIJOS DE CALIDÓN
    new AgenteJugable("Lucy",           "Lucy",                   "https://zzz.gg/_ipx/w_1100&q_70/images/IconRole27.png", "Fuego",     "Auxiliar",  "\"Un invitado de honor acaba de llegar. ¡Permítame, Lady Lucy, entretenerlo!\" Luciana Auxesis Theodoro de Montefio \"Buen día. ¿Qué se puede hacer por usted?\" \"¡Escandaloso! ¡Sentirán mi ira!\" \"¡Grassy, Woody, Bricky! ¡Pónganse las pilas!\"", "", "", ""),
    new AgenteJugable("Piper",          "Piper Wheel",            "https://zzz.gg/_ipx/w_1100&q_70/images/IconRole28.png", "Fisico",    "Anomalo",   "¿Necesitas un aventón? Entonces abróchate el cinturón, amigo.\nPiper Wheel\n\n\"Si te mareas en el coche, mira por la ventana el paisaje y te sentirás mejor.\"\n\"Luego, es hora de que la pequeña yo marque la entrada y se ponga a trabajar.\"\n\"¡Abróchate~!\"", "", "", ""),
    new AgenteJugable("Burnice",        "Burnice White",          "https://zzz.gg/_ipx/w_1100&q_70/images/IconRole32.png", "Fuego",     "Anomalo",   "“No pareces muy entusiasmado. ¿Necesitas un pequeño empujón~?” Burnice White “¿No está mal, verdad? Hice este Nitro-Combustible con un nuevo sabor usando un ingrediente especial que conseguí en la ciudad.” “¿Qué? ¿Vas a volver al camión a echarte una siesta? No querrás estar demasiado acelerado después de terminar tu bebida, ¿verdad?” “Hablando de eso... ¡Tienes un vehículo! He preparado algo de mi propio combustible súper eficiente. ¡Deberías probarlo!”", "", "", ""),
    new AgenteJugable("Caesar",         "Caesar King",            "https://zzz.gg/_ipx/w_1100&q_70/images/IconRole25.png", "Fisico",    "Defensor",  "¡Sí! ¡Es el formidable líder de los Hijos de Calydón, César! Ella debe haber enfrentado muchas dificultades como líder de los Hijos de Calydón para llevar a la pandilla hasta donde está hoy, ¿verdad?'¿Eh? ¡Para nada! ¡Los Hijos de Calydón de hoy son un testimonio del esfuerzo de todos!'", "", "", ""),
    new AgenteJugable("Lighter",        "Lighter",                "https://zzz.gg/_ipx/w_1100&q_70/images/IconRole26.png", "Fuego",     "Aturdidor", "¿Hay alguien dispuesto a desafiar al Campeón invicto? Puede que no tengas la habilidad para vencerme, pero ¿no podrías sangrar un poco menos? Sé, desmayarse al ver sangre no es muy impresionante para 'El Campeón'. ¿O es esta tu manera de derribarnos a ambos?", "", "", ""),
    new AgenteJugable("Pulchra",        "Pulchra",                "https://zzz.gg/_ipx/w_1100&q_70/images/IconRole38.png", "Fisico",    "Aturdidor", "Mi lealtad está con el ganador. ¿Y el ganador? Ese siempre soy yo. Pulchra Fellini \"Yo, Pulchra, podría considerar unirme a sus pequeños Hijos de Calydon.\" \"¿Traición? No hace falta que suene tan dura.\" \"Solo tomé una decisión razonable.\" \"No celebres todavía. Sigues en período de prueba.\" \"¿Si pasarás o no? Eso depende de mí.\"", "", "", ""),

    // ESTRELLAS DE LIRA
    new AgenteJugable("Astra Yao",      "Astra Yao",              "https://zzz.gg/_ipx/w_1100&q_70/images/IconRole36.png", "Eter",      "Auxiliar", '¡Esta siguiente canción está dedicada al mundo! Astra Yao "¡Es demasiado tarde! Ahora estás oficialmente invitado a unirte a mí en mi plan de escape de un día. Voy a abandonar el trabajo, escapar y dirigirme a Reverb Arena!" "Sabes, en realidad creo que ser reconocido es algo bastante genial~" "Cada era necesita un artista icónico, alguien que lleve las aspiraciones del pueblo de esa era y les traiga esperanza." "¡Buenas noches, Nuevo Eridu! ¿Están listos? ¡Estoy a punto de deslumbrarlos con una magia increíble!"', "", "", ""),
    new AgenteJugable("Evelyn",         "Evelyn",                 "https://zzz.gg/_ipx/w_1100&q_70/images/IconRole37.png", "Fuego",     "Atacante",  "“La señora Yao está disfrutando de su tiempo privado y no hará ninguna entrevista.” Evelyn Chevalier “10 en punto, un tipo de negro. Parece sospechoso. Yo me encargo.” “Vigila el perímetro. No dejes que nadie sospechoso se acerque a la señora Yao.” “Nadie se acerca a la señora Yao más que yo.”", "", "", ""),

    // ESCUADRÓN OBOL
    new AgenteJugable("Soldier 11",     "Soldier 11",             "https://zzz.gg/_ipx/w_280&q_70/images/IconRole05.png", "Fuego",     "Atacante",  'Una soldado ejemplar que sigue órdenes y se mantiene leal a la misión. Las armas no necesitan emociones y solo necesitan seguir órdenes. No importa lo fuerte que sea el enemigo, solo hay que animarse y enfrentarlo de frente. Ha dejado atrás su debilidad junto con su nombre, dejando solo resolución.', "", "", ""),
    new AgenteJugable("Trigger",        "Trigger",                "https://zzz.gg/_ipx/w_1100&q_70/images/IconRole39.png", "Electrico", "Aturdidor", 'Encontraré al verdadero culpable detrás de la caída de la antigua capital y haré que pague por lo que ha hecho. Si el herrador que me guía hacia la verdad exige un precio, estoy dispuesto a arriesgar mi propia vida. Al dejar que la voluntad de proteger guíe mi odio, pongo la mira firme en la verdad.', "", "", ""),
    new AgenteJugable("Orphie y Magus", "Orphie y Magus",         "https://pic.bittopup.com/apiUpload/beaa15debdfade787b974b0b03fd2a79.jpg", "Fuego",     "Atacante",  "\"¡Estrategia táctica: Aniquilación-Delta!\" \"¡Sí, Capitán Magus!\" Orphie Magnusson & \"Magus\"\n\n\"¡Deja de mirar esos anuncios de muñecos de acción llamativos! ¡O confiscaré todos los que tienes escondidos en tu cajón!\"\n\"¡Eso no servirá, Capitán! ¡A menos que quieras despertarte mañana con fundas rosas!\"\n\"Tch... Consígueme dos cajas de aceite para pistolas y fingiré que no vi nada.\"\n\"¡Gracias, Capitán! Quieres las de sabor a Nitro-Combustible otra vez, ¿verdad?\"", "", "", ""),

    // SPOOK SHACK
    new AgenteJugable("Ukinami Yuzuha", "Ukinami Yuzuha",         "https://zzz.gg/_ipx/w_1100&q_70/images/IconRole47.png", "Fisico",    "Auxiliar",  '¿Te sientes con mala suerte? ¿Por qué no pedirle consejo al tanuki? Ukinami Yuzuha. Después de todo, has sido cliente habitual del Mercado Porcelume por más de una década; además de la calidad de Porcelume, la historia detrás de estos coleccionables también impulsa su valor excepcional. ¿Quieres apostar? Mientras tú estabas ocupado dudando, alguien más ya ha ofrecido un buen precio por este jugoso chisme.', "", "", "Yuzuha + Promeia + Velina | Yuzuha + Zhu Yuan + Nicole"),
    new AgenteJugable("Alice Thymefield", "Alice Thymefield",     "https://zzz.gg/_ipx/w_1100&q_70/images/IconRole46.png", "Fisico","Anomalo",'Un descendiente de los Thymefield nunca retrocedería ante un desafío de este nivel. Alice Thymefield. Mis disculpas, al provenir de una familia de académicos no debería haber perdido la compostura. El miedo surge de los límites de nuestra comprensión, así que mientras yo manejo mi espada, cuento contigo para seguir esos parámetros anómalos e identificar la verdadera forma del enemigo.',"","",""),

    // KRAMPUS
    new AgenteJugable("Promeia",        "Promeia",                "https://tse4.mm.bing.net/th/id/OIP.ezWc4EUphreX_-3NOBBO_wAAAA?rs=1&pid=ImgDetMain&o=7&rm=3", "Hielo",     "Anomalo",   'He estado preparado para estrellarme y arder en llamas desde hace mucho tiempo. Las polillas están destinadas a desvanecerse en una noche sin luz, pero no lo veo como algo trágico. Estoy esperando el juicio. La muerte no es mi enemiga, es mi salvación.', "", "", "Promeia + Velina + Yuzuha"),
    new AgenteJugable("Zhao",           "Zhao",                   "https://tse2.mm.bing.net/th/id/OIP.MbDufcz_8nZpC23UxLcobwHaHx?rs=1&pid=ImgDetMain&o=7&rm=3", "Hielo",     "Defensor",  'Ya que estás aquí, ¿qué tal si hacemos un trato? Zhao. ¿Llamas a estos sospechosos Dennies de origen desconocido un regalo del destino? Qué romántico, pero el destino no es un pobre tonto al que puedas empujar y tomar lo que quieras. Solo mira a las almas dignas para otorgar sus recompensas; por el contrario, también reclamará todo de los indignos. ¿Crees que tienes suficientes fichas para enfrentar el juicio?', "", "", "Zhao + Promeia + Yuzuha | Zhao + Ellen + Lycaon"),
    new AgenteJugable("Dialyn",         "Dialyn",                 "https://goniblog.com/wp-content/uploads/2025/11/image-121-768x811.png", "Fisico",    "Aturdidor", '¿Una queja? Oye, no te alteres demasiado. Teniendo en cuenta que te veías un poco pálido, eso fue un servicio especial para devolverle color a tu cara. Dialyn. ¡Ja! ¡Has logrado encontrar el portal de servicio al cliente súper oculto! Hay un viejo dicho en la península de Waifei: las ratas nacen para cavar. Si me preguntas, ni la rata más astuta puede cavar tan profundo como tú.', "", "", "Dialyn + Promeia + Yuzuha"),

    // YUNKUI SUMMIT
    new AgenteJugable("Ye Shunguang",   "Ye Shunguang",           "https://cdn.donmai.us/original/17/3d/__ye_shunguang_zenless_zone_zero__173d01cbeacb3a3d5c9585fa6107918d.png?download=1", "Fisico",          "Atacante",          'Empuñaré mi espada y romperé cada hilo del destino. Ye Shunguang. Así que eres el nuevo aprendiz de Shifu. Dado que la mayor Fufu es tu hermana mayor, eso me convierte en tu segunda hermana mayor. Entre todos nuestros compañeros discípulos, eres el único que me llama hermana mayor. Si necesitas ayuda, estaré más que feliz de echarte una mano.', "", "", "Ye Shunguang + Yixuan + Ju Fufu"),
    new AgenteJugable("Yixuan",         "Yixuan",                 "https://zzz.gg/_ipx/w_1100&q_70/images/IconRole44.png", "Tinta",          "Ruptura",          'Una vez que entres por estas puertas, deja tus preocupaciones mundanas y formalidades a los pies de la montaña. Yixuan. ¿Quieres aprender a leer presagios celestiales y predecir el clima? Entendido; solo toma estos talismanes dibujados a toda prisa y úsalos según lo necesites. Tómales una foto y ponla como fondo de pantalla. Luego, solo toca la app del clima: te dirá si mañana estará soleado, nublado o lluvioso. Además, mantén tu conexión a la red estable.', "", "", "Yixuan + Pan Yinhui + Ju Fufu"),
    new AgenteJugable("Ju Fufu",        "Ju Fufu",                "https://zzz.gg/_ipx/w_1100&q_70/images/IconRole43.png", "Fuego",     "Aturdidor",          '¡Fieras tigres merodean la Cima Yunkui, donde los héroes justos muestran su poder! Ju Fufu. Dominar técnicas no es fácil; deja que tu querido senior te eche una pata. No hace falta ser tan formal. Y la hierba gatera es totalmente imposible. No soy un gato naranja Thiren y definitivamente tampoco un atigrado. Me devoraré a los pequeños, a los traviesos y a los astutos; ni un hueso quedará, ni un alma que negar.', "", "", "Ju Fufu + Yixuan + Pan Yinhui"),
    new AgenteJugable("Pan Yinhui",     "Pan Yinhui",             "https://zzz.gg/_ipx/w_1100&q_70/images/IconRole45.png", "Fisico",          "Defensor",          'Incluso las plantas saben alimentarse del suelo y beber el rocío: no hay manera de que podamos entrenar con el estómago vacío. Pan Yinhu. La fibra limpia el aire turbio y la proteína protege el espíritu primitivo. Ser quisquilloso con la comida arruinará tu respiración y hará tu entrenamiento el doble de duro por la mitad de los resultados. He aprendido una nueva técnica que puede ayudar a reducir la pérdida de nutrientes de los ingredientes al cocinar; olvídate de la comida para llevar y ven a ayudarme a probar estos platos.', "", "", "Pan Yinhui + Yixuan + Ju Fufu"),

    // ANGELS OF DELUSION
    new AgenteJugable("Nangong Yu",     "Nangong Yu",             "https://tse1.mm.bing.net/th/id/OIP.fApADPn3zvD9nOLWDVj3CgHaK-?rs=1&pid=ImgDetMain&o=7&rm=3", "Eter",      "Aturdidor", "Líder de Angels of Delusion.", "", "", "Nangong Yu + Aria + Sunna"),
    new AgenteJugable("Aria",           "Aria",                   "https://ami.animecharactersdatabase.com/uploads/chars/36226-2084042043.png", "Eter",      "Anomalo",   "Constructo inteligente. Cantante principal.", "", "", "Aria + Nangong Yu + Sunna"),
    new AgenteJugable("Sunna",          "Sunna",                  "https://tse2.mm.bing.net/th/id/OIP.pDS06TN4C5gd2185IQIflgHaH0?rs=1&pid=ImgDetMain&o=7&rm=3", "Fisico",    "Auxiliar",  "Compositora principal de Angels of Delusion.", "", "", "Sunna + Nangong Yu + Aria"),

    // OTROS
    new AgenteJugable("Cissia",         "Cissia",                 "https://tse3.mm.bing.net/th/id/OIP.7zrvJzhxhFN4Za9a-hvS4gHaH0?rs=1&pid=ImgDetMain&o=7&rm=3", "Electrico", "Atacante",  "Especialista en Casos de la División de Orden Metropolitano.", "", "", "Cissia + Trigger + Rina"),
    new AgenteJugable("Pyrois",         "Pyrois",                 "https://fastcdn.hoyoverse.com/content-v2/nap/163768/bf32d7e8af1415baef272eebe133033c_5593207751503213547.png", "Eter",      "Atacante",  "El único agente jugable de la facción Phaethon.", "", "", "Pyrois + Norma + Velina"),
];

const BD_agentes = {};
listaAgentes.forEach(agente => { BD_agentes[agente.id] = agente; });

// ============================================================
// BASE DE DATOS - FACCIONES
// ============================================================
const listaFacciones = [
    new Faccion("fac1", "Cunning Hares", "Sixth Street",
        "https://tse3.mm.bing.net/th/id/OIP.UZbmdk6X593VnNlHr82BQQAAAA?rs=1&pid=ImgDetMain&o=7&rm=3",
        "info",
        "Agencia de mensajería liderada por Nicole Demara. Operan en New Eridu aceptando todo tipo de encargos.",
        ["Nicole Demara", "Anby Demara", "Billy Kid", "Nekomata"]),

    new Faccion("fac2", "Belobog Heavy", "Brant Street",
        "https://tse3.mm.bing.net/th/id/OIP.CTjfHDBXI5ujYnwS0HR2TAAAAA?rs=1&pid=ImgDetMain&o=7&rm=3",
        "danger",
        "Un gigante de la construcción conocido por su maquinaria pesada y su personal incondicional.",
        ["Koleda Belobog", "Anton Ivanov", "Ben Bigger", "Grace Howard"]),

    new Faccion("fac3", "Victoria H.K.", "Lumina Square",
        "https://tse1.mm.bing.net/th/id/OIP.ftqBPgifG9zsTnx-k7EB1gAAAA?rs=1&pid=ImgDetMain&o=7&rm=3",
        "primary",
        "Ofrecen servicios domésticos de alta gama, aunque sus empleados son guerreros temibles.",
        ["Von Lycaon", "Ellen Joe", "Alexandrina Sebastiane", "Corin Wickes"]),

    new Faccion("fac4", "Sons of Calydon", "Outer Rim",
        "https://static.tvtropes.org/pmwiki/pub/images/sons_of_calydon.png",
        "warning",
        "Una banda de moteros que domina las rutas comerciales fuera de New Eridu.",
        ["Caesar King", "Burnice White", "Piper Wheel", "Lucy", "Lighter", "Pulchra"]),

    new Faccion("fac5", "División N.º 6", "Hollow Special Ops",
        "https://tse1.mm.bing.net/th/id/OIP.x9oUiv9EcCZp7v15z4CQVgAAAA?rs=1&pid=ImgDetMain&o=7&rm=3",
        "primary",
        "Unidad de operaciones especiales del gobierno de New Eridu, especializada en incursiones a los Hollow.",
        ["Hoshimi Miyabi", "Tsukishiro Yanagi", "Harumasa", "Soukaku"]),

    new Faccion("fac6", "Criminal Investigation Special Response Team", "New Eridu Police",
        "https://static.wikitide.net/hoyodexwiki/4/43/Criminal_Investigation_Special_Response_Team_(ZZ-MU).png",
        "dark",
        "Unidad de respuesta especial de la policía de New Eridu. Investigan crímenes relacionados con los Hollow.",
        ["Zhu Yuan", "Qingyi", "Seth Lowell", "Jane Doe"]),

    new Faccion("fac7", "Estrellas de Lira", "Entertainment",
        "https://act-webstatic.hoyoverse.com/event-static-hoyowiki-admin/2025/01/21/5fcf72ce37090f2e6661fb3448fb4f39_4341270331890131564.png",
        "warning",
        "Agencia de entretenimiento de élite en New Eridu. Sus agentes combinan talento artístico con habilidades de combate.",
        ["Astra Yao", "Evelyn"]),

    new Faccion("fac8", "Escuadrón Obol", "Military",
        "https://zzz.senpailife.com/wp-content/uploads/2024/07/ZZZ-Asset-Icon-Small-Faction-OBOL-Squad-02.webp",
        "danger",
        "Unidad militar de élite con un pasado oscuro. Sus soldados han sobrevivido misiones que nadie más pudo completar.",
        ["Soldier 11", "Trigger", "Orphie y Magus"]),

    new Faccion("fac9", "Spook Shack", "Online Community",
        "https://img.game8.jp/11446488/9567dce1bb5a8ee3ba1f7dd1d82d9b77.png/show",
        "secondary",
        "Foro en línea dedicado a investigar fenómenos paranormales relacionados con los Hollow en New Eridu.",
        ["Ukinami Yuzuha", "Alice Thymefield", "Komano Manato", "Lucia Elowen", "Yidhari Murphy"]),

    new Faccion("fac10", "Krampus", "Law Enforcement",
        "https://gabbutz.com/wp-content/uploads/2025/10/%E3%82%AF%E3%83%A9%E3%83%B3%E3%83%97%E3%82%B9%E3%81%AE%E9%BB%92%E6%9E%9D.webp",
        "info",
        "Autoridad de cumplimiento corporativo que actúa como jueces, fiscales y ejecutores contra empresas corruptas.",
        ["Promeia", "Zhao", "Dialyn", "Banyue"]),

    new Faccion("fac11", "Yunkui Summit", "Martial Arts Order",
        "https://tse2.mm.bing.net/th/id/OIP.iL4Fp61UpA8eBcmunpT__gAAAA?rs=1&pid=ImgDetMain&o=7&rm=3",
        "success",
        "Antigua orden de artes marciales con raíces en tradiciones ancestrales. Sus miembros son Cazadores del Vacío de élite.",
        ["Yixuan", "Ye Shunguang", "Pan Yinhui", "Ju Fufu"]),

    new Faccion("fac12", "Angels of Delusion", "Music & Entertainment",
        "https://static.tvtropes.org/pmwiki/pub/images/faction_angels_of_delusion_icon_6.png",
        "success",
        "Grupo musical que ha conquistado New Eridu. Sus integrantes ocultan habilidades de combate bajo su imagen de ídolos.",
        ["Nangong Yu", "Aria", "Sunna"]),

    new Faccion("fac13", "Metropolitan Order Division", "Law & Order",
        "https://act-upload.hoyoverse.com/event-ugc-hoyowiki/2026/02/14/98205622/4d16bf9d4550e4521c33dc690a27709e_4266334672771257816.png",
        "warning",
        "División especializada en el mantenimiento del orden en New Eridu. Sus agentes neutralizan amenazas internas.",
        ["Cissia"]),

    new Faccion("fac14", "Phaethon", "Sixth Street",
        "https://img.gachabase.net/conv/zzz/assets/079312b01c2407d6326d2a31d9e1fe4a.png?q=50&sig=8ae4df236363063c499d9e08c0654e9b029e6e8bb3dc26bbf44ff9978fa3f07e",
        "success",
        "La tienda de video Random Play y su equipo de proxies. Operan como intermediarios en los Hollow.",
        ["Pyrois"]),
];

document.addEventListener("DOMContentLoaded", () => {

    // --- PÁGINA AGENTES ---
    const contenedorAgentes = document.getElementById("contenedor-agentes");
    if (contenedorAgentes) {
        contenedorAgentes.innerHTML = listaAgentes.map(ag => ag.generarCard()).join("");
        actualizarConteo(listaAgentes.length);
    }

    // Filtros
    let filtroAtributo = "";
    let filtroRol      = "";

    function aplicarFiltros() {
        const cards = document.querySelectorAll(".agente-card");
        let visibles = 0;
        cards.forEach(card => {
            const okAtrib = !filtroAtributo || card.dataset.atributo === filtroAtributo;
            const okRol   = !filtroRol      || card.dataset.rol      === filtroRol;
            card.style.display = (okAtrib && okRol) ? "" : "none";
            if (okAtrib && okRol) visibles++;
        });
        actualizarConteo(visibles);
    }

    function actualizarConteo(n) {
        const el = document.getElementById("conteo-agentes");
        if (el) el.textContent = n + " agente" + (n !== 1 ? "s" : "");
    }

    function bindGrupo(grupoId, onChange) {
        const grupo = document.getElementById(grupoId);
        if (!grupo) return;
        grupo.querySelectorAll("button").forEach(btn => {
            btn.addEventListener("click", function () {
                grupo.querySelectorAll("button").forEach(b => b.classList.remove("active"));
                this.classList.add("active");
                onChange(this.dataset.valor);
                aplicarFiltros();
            });
        });
    }

    bindGrupo("filtro-atributo", v => filtroAtributo = v);
    bindGrupo("filtro-rol",      v => filtroRol      = v);

    // Modal
    const modalElemento = document.getElementById("agenteModal");
    if (modalElemento) {
        const modalAgente = new bootstrap.Modal(modalElemento);
        document.addEventListener("click", function (e) {
            const boton = e.target.closest(".btn-abrir-modal");
            if (!boton) return;
            const info = BD_agentes[boton.getAttribute("data-id-agente")];
            if (info) {
                document.getElementById("modalNombre").textContent       = info.nombre;
                document.getElementById("modalAtributo").textContent     = `Atributo: ${info.atributo || "?"}`;
                document.getElementById("modalRol").textContent          = `Rol: ${info.especificacion || "?"}`;
                document.getElementById("modalImagen").src               = info.imagen || "https://placehold.co/120x120?text=?";
                document.getElementById("modalImagenWrapper").dataset.atributo = info.atributo || "";
                document.getElementById("modalDescripcion").textContent  = info.descripcion || "Sin descripción disponible.";
                document.getElementById("modalBuildPremium").textContent = info.buildpremium || "No disponible aún.";
                document.getElementById("modalBuildF2P").textContent     = info.buildF2P     || "No disponible aún.";
                document.getElementById("modalSinergia").textContent     = info.sinergias    || "Sin datos de sinergia.";
                modalAgente.show();
            }
        });
    }

    // --- PÁGINA FACCIONES ---
    const contenedorFacciones = document.getElementById("contenedor-facciones");
    if (contenedorFacciones) {
        contenedorFacciones.innerHTML = listaFacciones.map(f => f.generarCard()).join("");
    }
});