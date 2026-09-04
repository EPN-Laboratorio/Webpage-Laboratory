/* ============================================================================
   main.js
   ----------------------------------------------------------------------------
   Aquí SÍ hay lógica de interfaz. Está dividido en funciones pequeñas:
   cada una hace una sola cosa y se llama al final del archivo, dentro de
   DOMContentLoaded (es decir: "cuando el HTML ya esté listo, ejecuta esto").

   No necesitas tocar este archivo para cambiar contenido: para eso está
   contenido.js. Solo edita main.js si quieres cambiar CÓMO se comporta o
   se dibuja la interfaz.
   ============================================================================ */

/**
 * 1) MENÚ RESPONSIVE
 * Muestra/oculta la navegación en pantallas angostas al presionar el botón
 * hamburguesa. Usa aria-expanded para que lectores de pantalla sepan si el
 * menú está abierto o cerrado.
 */
function initNavToggle() {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".main-nav");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    const abierto = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", abierto ? "true" : "false");
  });
}

/**
 * 2) RESALTAR EL LINK DE LA PÁGINA ACTUAL
 * Compara la URL actual con el href de cada link del menú y le agrega
 * aria-current="page" al que coincide (ver la regla .main-nav a[aria-current]
 * en style.css para el estilo visual).
 */
function marcarPaginaActiva() {
  const rutaActual = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".main-nav a").forEach((link) => {
    const href = link.getAttribute("href");
    if (href === rutaActual) {
      link.setAttribute("aria-current", "page");
    }
  });
}

/**
 * 3) RENDERIZAR LÍNEAS DE INVESTIGACIÓN (index.html)
 * Recorre el arreglo LINEAS_INVESTIGACION (definido en contenido.js) y
 * genera una tarjeta HTML por cada elemento.
 */
function renderLineasInvestigacion() {
  const contenedor = document.querySelector("#lineas-investigacion");
  if (!contenedor || typeof LINEAS_INVESTIGACION === "undefined") return;

  if (LINEAS_INVESTIGACION.length === 0) {
    contenedor.innerHTML = '<p class="empty-state">Aún no hay líneas de investigación cargadas.</p>';
    return;
  }

  contenedor.innerHTML = LINEAS_INVESTIGACION.map((linea) => `
    <article class="research-card">
      <h3>${linea.titulo}</h3>
      <p>${linea.descripcion}</p>
    </article>
  `).join("");
}

/**
 * 4) RENDERIZAR EQUIPO (equipo.html)
 * Igual que la anterior, pero para integrantes. Si "foto" está vacío,
 * muestra las iniciales del nombre en vez de una imagen rota.
 */
function renderEquipo() {
  const contenedor = document.querySelector("#lista-equipo");
  if (!contenedor || typeof INTEGRANTES === "undefined") return;

  if (INTEGRANTES.length === 0) {
    contenedor.innerHTML = '<p class="empty-state">Aún no hay integrantes cargados.</p>';
    return;
  }

  contenedor.innerHTML = INTEGRANTES.map((persona) => {
    const iniciales = persona.nombre
      .split(" ")
      .map((palabra) => palabra[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();

    const foto = persona.foto
      ? `<img src="${persona.foto}" alt="Foto de ${persona.nombre}">`
      : iniciales;

    return `
      <div class="member-card">
        <div class="member-photo">${foto}</div>
        <div class="member-name">${persona.nombre}</div>
        <div class="member-role">${persona.rol}</div>
        <p class="member-bio">${persona.bio}</p>
      </div>
    `;
  }).join("");
}

/**
 * 5) RENDERIZAR PUBLICACIONES (publicaciones.html)
 * Agrupa el arreglo PUBLICACIONES por año antes de dibujarlo, para que
 * aparezca un encabezado de año seguido de sus publicaciones.
 */
function renderPublicaciones() {
  const contenedor = document.querySelector("#lista-publicaciones");
  if (!contenedor || typeof PUBLICACIONES === "undefined") return;

  if (PUBLICACIONES.length === 0) {
    contenedor.innerHTML = '<p class="empty-state">Aún no hay publicaciones cargadas.</p>';
    return;
  }

  // Ordena de más reciente a más antigua
  const ordenadas = [...PUBLICACIONES].sort((a, b) => b.anio - a.anio);

  // Agrupa por año en un objeto: { 2025: [...], 2024: [...] }
  const agrupadas = {};
  ordenadas.forEach((pub) => {
    if (!agrupadas[pub.anio]) agrupadas[pub.anio] = [];
    agrupadas[pub.anio].push(pub);
  });

  let html = "";
  Object.keys(agrupadas)
    .sort((a, b) => b - a)
    .forEach((anio) => {
      html += `<h3 class="pub-year">${anio}</h3>`;
      agrupadas[anio].forEach((pub) => {
        html += `
          <div class="pub-item">
            <div class="pub-title"><a href="${pub.enlace}">${pub.titulo}</a></div>
            <div class="pub-meta">${pub.autores} — ${pub.revista}</div>
          </div>
        `;
      });
    });

  contenedor.innerHTML = html;
}

/**
 * 6) DATOS GENERALES DEL LABORATORIO
 * Inserta nombre, eslogan, descripción, correo, etc. en cualquier elemento
 * que tenga el atributo data-lab="campo" (usado en varias páginas).
 * Ejemplo en HTML: <span data-lab="correo"></span>
 */
function renderDatosLab() {
  if (typeof DATOS_LAB === "undefined") return;
  document.querySelectorAll("[data-lab]").forEach((el) => {
    const campo = el.getAttribute("data-lab");
    if (DATOS_LAB[campo] !== undefined) {
      el.textContent = DATOS_LAB[campo];
    }
  });
}

/* ----------------------------------------------------------------------------
   PUNTO DE ENTRADA
   Espera a que el HTML esté completamente cargado antes de tocar el DOM.
   ---------------------------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  initNavToggle();
  marcarPaginaActiva();
  renderDatosLab();
  renderLineasInvestigacion();
  renderEquipo();
  renderPublicaciones();
});
