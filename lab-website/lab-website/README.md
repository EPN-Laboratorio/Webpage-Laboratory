# Sitio web del laboratorio — guía rápida

Este proyecto es un sitio estático (solo HTML, CSS y JavaScript, sin
backend ni instalación de nada). Puedes abrirlo localmente ahora mismo y,
más adelante, subirlo tal cual a cualquier hosting cuando compres tu dominio.

## Cómo verlo localmente

Simplemente abre `index.html` con doble clic (se abrirá en tu navegador).
También puedes arrastrar el archivo a una ventana del navegador.

> Nota: por eso el encabezado y pie de página están repetidos en cada
> página HTML en lugar de "incluirse" desde un solo archivo — los
> navegadores bloquean por seguridad esa técnica (`fetch`) cuando abres
> archivos directamente con `file://` en vez de con un servidor. Si más
> adelante usas una extensión como "Live Server" en VS Code, sí podrías
> unificarlos.

## Cómo insertar tu contenido real

**Todo tu contenido vive en un solo archivo: `js/contenido.js`.**
Ábrelo con cualquier editor de texto (VS Code, Notepad++, etc.) y
reemplaza los textos entre corchetes `[...]` por tu información real:

1. `DATOS_LAB` → nombre del laboratorio, institución, eslogan, correo, dirección.
2. `LINEAS_INVESTIGACION` → agrega un bloque `{ titulo, descripcion }` por
   cada línea de investigación.
3. `INTEGRANTES` → agrega un bloque `{ nombre, rol, bio, foto }` por cada
   persona. Deja `foto: ""` si no tienes foto todavía (se mostrarán sus
   iniciales automáticamente).
4. `PUBLICACIONES` → agrega un bloque `{ anio, titulo, autores, revista, enlace }`
   por cada publicación. Se ordenan y agrupan por año automáticamente.

No necesitas tocar ningún archivo `.html` para agregar integrantes o
publicaciones: `js/main.js` las dibuja por ti a partir de esos datos.

Las fotos van en `assets/img/` (lee el archivo `PON_TUS_IMAGENES_AQUI.txt`
dentro de esa carpeta).

Los únicos textos que sí están directamente en el HTML (porque son fijos
en cada página y no se repiten en una lista) son los párrafos de
introducción de cada sección — búscalos en cada `.html`, están marcados
con comentarios `[...]`.

## Estructura del proyecto

```
lab-website/
├── index.html          → página de inicio
├── equipo.html          → página de integrantes
├── publicaciones.html   → página de publicaciones
├── contacto.html        → página de contacto
├── css/
│   └── style.css        → todo el diseño visual (colores, tipografía, layout)
├── js/
│   ├── contenido.js      → TUS DATOS (edita este archivo)
│   └── main.js           → lógica de interfaz (menú, renderizado dinámico)
└── assets/
    └── img/              → fotos e imágenes
```

## Cuando compres el dominio

No hace falta cambiar nada en el código. Solo sube toda la carpeta
`lab-website/` al hosting (por FTP o el panel de tu proveedor), asegurándote
de que `index.html` quede en la raíz del sitio.

Si en algún momento quieres que el formulario de contacto envíe correos de
verdad, necesitarás conectar el `<form>` de `contacto.html` a un servicio
como Formspree, o a un backend propio — actualmente solo tiene la interfaz.
