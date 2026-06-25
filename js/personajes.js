// ============================================================
// CLASES - JavaScript Parte 3 (Johanna Rodriguez R.)
// ============================================================

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
    new AgenteJugable("Nekomata",       "Nekomiya Mana",          "", "Fisico",    "Atacante",  "", "", "", ""),
    new AgenteJugable("Anby",           "Anby Demara",            "", "Electrico", "Aturdidor", "", "", "", ""),
    new AgenteJugable("Nicole",         "Nicole Demara",          "", "Eter",      "Auxiliar",  "", "", "", ""),
    new AgenteJugable("Billy",          "Billy Kid",              "", "Fisico",    "Atacante",  "", "", "", ""),
    new AgenteJugable("Starlight Billy","Starlight Billy",         "", "Fisico",    "Atacante",  "", "", "", ""),

    // SERVICIOS DOMÉSTICOS VICTORIA
    new AgenteJugable("Ellen",          "Ellen Joe",              "https://pic.bittopup.com/apiUpload/94bb5b40cb16e7d12f8f91385c475c85.jpg", "Hielo", "Atacante", "Conocida como la 'chica tiburón'. Posee el daño crítico más alto del juego.", "", "", ""),
    new AgenteJugable("Lycaon",         "Von Lycaon",             "", "Hielo",     "Aturdidor", "", "", "", ""),
    new AgenteJugable("Rina",           "Alexandrina Sebastiane", "", "Electrico", "Auxiliar",  "", "", "", ""),
    new AgenteJugable("Corin Wickes",   "Corin Wickes",           "", "Fisico",    "Atacante",  "", "", "", ""),

    // INDUSTRIAS BELOBOG
    new AgenteJugable("Grace",          "Grace Howards",          "", "Electrico", "Anomalo",   "", "", "", ""),
    new AgenteJugable("Koleda",         "Koleda Belobog",         "", "Fuego",     "Aturdidor", "", "", "", ""),
    new AgenteJugable("Anton",          "Anton Ivanov",           "", "Electrico", "Atacante",  "", "", "", ""),
    new AgenteJugable("Ben",            "Ben Bigger",             "", "Fuego",     "Defensor",  "", "", "", ""),

    // DIVISIÓN N.º 6
    new AgenteJugable("Soukaku",        "Soukaku",                "", "Hielo",     "Auxiliar",  "", "", "", ""),
    new AgenteJugable("Yanagi",         "Tsukishiro Yanagi",      "", "Electrico", "Anomalo",   "", "", "", ""),
    new AgenteJugable("Harumasa",       "Harumasa",               "", "Electrico", "Atacante",  "", "", "", ""),
    new AgenteJugable("Miyabi",         "Hoshimi Miyabi",         "https://zzz.honeyhunterworld.com/img/character/1091-char_role_icon.webp", "Hielo", "Anomalo", "Capitana de la Sección 6. Maestra de las Anomalías de Hielo.", "", "", ""),

    // NEPS
    new AgenteJugable("Zhu Yuan",       "Zhu Yuan",               "", "Eter",      "Atacante",  "", "", "", ""),
    new AgenteJugable("Qingyi",         "Qingyi",                 "", "Electrico", "Aturdidor", "", "", "", ""),
    new AgenteJugable("Seth",           "Seth Lowell",            "", "Electrico", "Defensor",  "", "", "", ""),
    new AgenteJugable("Jane Doe",       "Jane Doe",               "", "Fisico",    "Anomalo",   "", "", "", ""),

    // HIJOS DE CALIDÓN
    new AgenteJugable("Lucy",           "Lucy",                   "", "Fuego",     "Auxiliar",  "", "", "", ""),
    new AgenteJugable("Piper",          "Piper Wheel",            "", "Fisico",    "Anomalo",   "", "", "", ""),
    new AgenteJugable("Burnice",        "Burnice White",          "", "Fuego",     "Anomalo",   "", "", "", ""),
    new AgenteJugable("Caesar",         "Caesar King",            "", "Fisico",    "Defensor",  "", "", "", ""),
    new AgenteJugable("Lighter",        "Lighter",                "", "Fuego",     "Aturdidor", "", "", "", ""),
    new AgenteJugable("Pulchra",        "Pulchra",                "", "Fisico",    "Aturdidor", "", "", "", ""),

    // ESTRELLAS DE LIRA
    new AgenteJugable("Astra Yao",      "Astra Yao",              "", "Eter",      "Auxiliar",  "", "", "", ""),
    new AgenteJugable("Evelyn",         "Evelyn",                 "", "Fuego",     "Atacante",  "", "", "", ""),

    // ESCUADRÓN OBOL
    new AgenteJugable("Soldier 11",     "Soldier 11",             "", "Fuego",     "Atacante",  "", "", "", ""),
    new AgenteJugable("Trigger",        "Trigger",                "", "Electrico", "Aturdidor", "", "", "", ""),
    new AgenteJugable("Orphie y Magus", "Orphie y Magus",         "", "Fuego",     "Atacante",  "", "", "", ""),

    // SPOOK SHACK
    new AgenteJugable("Ukinami Yuzuha", "Ukinami Yuzuha",         "", "Fisico",    "Auxiliar",  "Creadora y fundadora del foro Spook Shack.", "", "", "Yuzuha + Promeia + Velina | Yuzuha + Zhu Yuan + Nicole"),

    // KRAMPUS
    new AgenteJugable("Promeia",        "Promeia",                "", "Hielo",     "Anomalo",   "Una de las Jueces de Krampus. Estoica y despiadada.", "", "", "Promeia + Velina + Yuzuha"),
    new AgenteJugable("Zhao",           "Zhao",                   "", "Hielo",     "Defensor",  "Miembro de Krampus.", "", "", "Zhao + Promeia + Yuzuha | Zhao + Ellen + Lycaon"),
    new AgenteJugable("Dialyn",         "Dialyn",                 "", "Fisico",    "Aturdidor", "Representante de atención al cliente de TOPS.", "", "", "Dialyn + Promeia + Yuzuha"),

    // YUNKUI SUMMIT
    new AgenteJugable("Ye Shunguang",   "Ye Shunguang",           "", "",          "",          "Cazadora del Vacío: Qingming Arbiter.", "", "", "Ye Shunguang + Yixuan + Ju Fufu"),
    new AgenteJugable("Yixuan",         "Yixuan",                 "", "",          "",          "Suma Sacerdotisa de la 13.ª generación.", "", "", "Yixuan + Pan Yinhui + Ju Fufu"),
    new AgenteJugable("Ju Fufu",        "Ju Fufu",                "", "Fuego",     "",          "La discípula de mayor rango de Yunkui Summit.", "", "", "Ju Fufu + Yixuan + Pan Yinhui"),
    new AgenteJugable("Pan Yinhui",     "Pan Yinhui",             "", "",          "",          "Discípula del Templo Suibian.", "", "", "Pan Yinhui + Yixuan + Ju Fufu"),

    // ANGELS OF DELUSION
    new AgenteJugable("Nangong Yu",     "Nangong Yu",             "", "Eter",      "Aturdidor", "Líder de Angels of Delusion.", "", "", "Nangong Yu + Aria + Sunna"),
    new AgenteJugable("Aria",           "Aria",                   "", "Eter",      "Anomalo",   "Constructo inteligente. Cantante principal.", "", "", "Aria + Nangong Yu + Sunna"),
    new AgenteJugable("Sunna",          "Sunna",                  "", "Fisico",    "Auxiliar",  "Compositora principal de Angels of Delusion.", "", "", "Sunna + Nangong Yu + Aria"),

    // OTROS
    new AgenteJugable("Cissia",         "Cissia",                 "", "Electrico", "Atacante",  "Especialista en Casos de la División de Orden Metropolitano.", "", "", "Cissia + Trigger + Rina"),
    new AgenteJugable("Pyrois",         "Pyrois",                 "", "Eter",      "Atacante",  "El único agente jugable de la facción Phaethon.", "", "", "Pyrois + Norma + Velina"),
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
        "https://static.wikia.nocookie.net/zenless-zone-zero/images/0/09/Faction_Special_Ops_Section_6.png",
        "primary",
        "Unidad de operaciones especiales del gobierno de New Eridu, especializada en incursiones a los Hollow.",
        ["Hoshimi Miyabi", "Tsukishiro Yanagi", "Harumasa", "Soukaku"]),

    new Faccion("fac6", "NEPS", "New Eridu Police",
        "https://static.wikia.nocookie.net/zenless-zone-zero/images/4/4c/Faction_Criminal_Investigation_Special_Response_Team.png",
        "dark",
        "Unidad de respuesta especial de la policía de New Eridu. Investigan crímenes relacionados con los Hollow.",
        ["Zhu Yuan", "Qingyi", "Seth Lowell", "Jane Doe"]),

    new Faccion("fac7", "Estrellas de Lira", "Entertainment",
        "https://static.wikia.nocookie.net/zenless-zone-zero/images/5/5b/Faction_Stars_of_Lyra.png",
        "warning",
        "Agencia de entretenimiento de élite en New Eridu. Sus agentes combinan talento artístico con habilidades de combate.",
        ["Astra Yao", "Evelyn"]),

    new Faccion("fac8", "Escuadrón Obol", "Military",
        "https://static.wikia.nocookie.net/zenless-zone-zero/images/3/3f/Faction_Obol_Squad.png",
        "danger",
        "Unidad militar de élite con un pasado oscuro. Sus soldados han sobrevivido misiones que nadie más pudo completar.",
        ["Soldier 11", "Trigger", "Orphie y Magus"]),

    new Faccion("fac9", "Spook Shack", "Online Community",
        "https://static.wikia.nocookie.net/zenless-zone-zero/images/9/9b/Faction_Spook_Shack.png",
        "secondary",
        "Foro en línea dedicado a investigar fenómenos paranormales relacionados con los Hollow en New Eridu.",
        ["Ukinami Yuzuha", "Alice Thymefield", "Komano Manato", "Lucia Elowen", "Yidhari Murphy"]),

    new Faccion("fac10", "Krampus", "Law Enforcement",
        "https://static.wikia.nocookie.net/zenless-zone-zero/images/1/18/Faction_Krampus.png",
        "info",
        "Autoridad de cumplimiento corporativo que actúa como jueces, fiscales y ejecutores contra empresas corruptas.",
        ["Promeia", "Zhao", "Dialyn", "Banyue"]),

    new Faccion("fac11", "Yunkui Summit", "Martial Arts Order",
        "https://static.wikia.nocookie.net/zenless-zone-zero/images/6/6c/Faction_Yunkui_Summit.png",
        "success",
        "Antigua orden de artes marciales con raíces en tradiciones ancestrales. Sus miembros son Cazadores del Vacío de élite.",
        ["Yixuan", "Ye Shunguang", "Pan Yinhui", "Ju Fufu"]),

    new Faccion("fac12", "Angels of Delusion", "Music & Entertainment",
        "https://static.wikia.nocookie.net/zenless-zone-zero/images/b/b2/Faction_Angels_of_Delusion.png",
        "success",
        "Grupo musical que ha conquistado New Eridu. Sus integrantes ocultan habilidades de combate bajo su imagen de ídolos.",
        ["Nangong Yu", "Aria", "Sunna"]),

    new Faccion("fac13", "Div. Metropolitano", "Law & Order",
        "https://static.wikia.nocookie.net/zenless-zone-zero/images/4/4c/Faction_Criminal_Investigation_Special_Response_Team.png",
        "warning",
        "División especializada en el mantenimiento del orden en New Eridu. Sus agentes neutralizan amenazas internas.",
        ["Cissia"]),

    new Faccion("fac14", "Phaethon", "Sixth Street",
        "https://static.wikia.nocookie.net/zenless-zone-zero/images/thumb/6/6d/Faction_Phaethon.png/300px-Faction_Phaethon.png",
        "success",
        "La tienda de video Random Play y su equipo de proxies. Operan como intermediarios en los Hollow.",
        ["Pyrois"]),
];

// ============================================================
// MANIPULACIÓN DEL DOM
// ============================================================
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