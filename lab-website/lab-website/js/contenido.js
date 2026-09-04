/* ============================================================================
   contenido.js
   ----------------------------------------------------------------------------
   ESTE ES EL ÚNICO ARCHIVO QUE NECESITAS EDITAR PARA CARGAR TU CONTENIDO REAL.

   Aquí NO hay diseño ni HTML complicado: solo datos (nombres, textos, links).
   Los archivos equipo.html y publicaciones.html leen estos datos y los
   dibujan automáticamente en la página usando JavaScript (ver js/main.js).

   Reemplaza los valores de ejemplo (marcados como "[...]") por tu información
   real. No borres las comas ni las llaves { } - solo cambia el texto entre
   comillas "".
   ============================================================================ */

/* --------------------------------------------------------------------------
   1) DATOS GENERALES DEL LABORATORIO
   Usados en el hero de la página de inicio (index.html)
   -------------------------------------------------------------------------- */
const DATOS_LAB = {
  nombre: "[Nombre del Laboratorio]",
  institucion: "[Universidad / Facultad]",
  eslogan: "[Frase corta que resuma la misión del laboratorio]",
  descripcion:
    "[Párrafo de 2-3 líneas describiendo a qué se dedica el laboratorio, " +
    "qué problemas investiga y por qué importa]",
  correo: "[correo@institucion.edu]",
  direccion: "[Edificio, oficina, dirección postal]",
};

/* --------------------------------------------------------------------------
   2) LÍNEAS DE INVESTIGACIÓN
   Se muestran como tarjetas en index.html
   Agrega o quita objetos { } dentro del arreglo [ ] según necesites.
   -------------------------------------------------------------------------- */
const LINEAS_INVESTIGACION = [
  {
    titulo: "[Línea de investigación 1]",
    descripcion: "[Breve explicación de en qué consiste esta línea]",
  },
  {
    titulo: "[Línea de investigación 2]",
    descripcion: "[Breve explicación de en qué consiste esta línea]",
  },
  {
    titulo: "[Línea de investigación 3]",
    descripcion: "[Breve explicación de en qué consiste esta línea]",
  },
];

/* --------------------------------------------------------------------------
   3) INTEGRANTES DEL EQUIPO
   Se muestran como tarjetas en equipo.html
   "foto" debe ser la ruta a una imagen dentro de assets/img/ (por ejemplo
   "assets/img/nombre-apellido.jpg"). Si la dejas vacía (""), se muestra
   un recuadro con las iniciales en su lugar.
   -------------------------------------------------------------------------- */
const INTEGRANTES = [
  {
    nombre: "[Nombre Apellido]",
    rol: "[Director(a) del laboratorio]",
    bio: "[Una o dos líneas sobre su área de investigación]",
    foto: "",
  },
  {
    nombre: "[Nombre Apellido]",
    rol: "[Estudiante de posgrado]",
    bio: "[Una o dos líneas sobre su área de investigación]",
    foto: "",
  },
  {
    nombre: "[Nombre Apellido]",
    rol: "[Estudiante de pregrado]",
    bio: "[Una o dos líneas sobre su área de investigación]",
    foto: "",
  },
];

/* --------------------------------------------------------------------------
   4) PUBLICACIONES
   Se muestran agrupadas por año en publicaciones.html
   "enlace" puede apuntar a un PDF, DOI, o dejarse como "#" si aún no existe.
   -------------------------------------------------------------------------- */
const PUBLICACIONES = [
  {
    anio: 2025,
    titulo: "[Título del artículo o paper]",
    autores: "[Apellido, A., Apellido, B.]",
    revista: "[Nombre de la revista o conferencia]",
    enlace: "#",
  },
  {
    anio: 2024,
    titulo: "[Título del artículo o paper]",
    autores: "[Apellido, A., Apellido, B.]",
    revista: "[Nombre de la revista o conferencia]",
    enlace: "#",
  },
];
