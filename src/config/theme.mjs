/* ============================================================
   TEMA DEL SITIO — única fuente de marca (plantilla1 · Material Purple)
   ------------------------------------------------------------
   Esto es LO ÚNICO que cambias al crear un sitio nuevo:
   colores, tipografías y logo. No toques el markup ni global.css.
   ============================================================ */

// --- Colores (hex). Las claves son los nombres de clase Tailwind:
//     bg-primary, text-on-surface, bg-surface-container-high, etc.
export const colors = {
  surface:                    '#ffffff',
  'surface-dim':              '#f8f9fc',
  'surface-container-lowest': '#ffffff',
  'surface-container-low':    '#f8f9fc',
  'surface-container':        '#f1f0fb',
  'surface-container-high':   '#ede9fe',
  'surface-container-highest':'#ddd6fe',
  'on-surface':               '#0f172a',
  'on-surface-variant':       '#475569',
  outline:                    '#e2e8f0',
  'outline-variant':          '#e2e8f0',
  primary:                    '#7e22ce',
  'on-primary':               '#ffffff',
  'primary-container':        '#7e22ce',
  'on-primary-container':     '#ffffff',
  'primary-fixed':            '#ede9fe',
  'on-primary-fixed':         '#3b0764',
  'primary-fixed-dim':        '#ddd6fe',
  'inverse-primary':          '#c4b5fd',
  secondary:                  '#6d28d9',
  'on-secondary':             '#ffffff',
  background:                 '#ffffff',
  'on-background':            '#0f172a',
  'body-text':                '#334155',
};

// --- Tipografías. Cambia las familias y el enlace de Google Fonts juntos.
export const fonts = {
  display:    'Syne, sans-serif',     // titulares
  body:       'Outfit, sans-serif',   // cuerpo
  googleHref: 'https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=Outfit:wght@300;400;500;600;700&display=swap',
};

// --- Logo. El logotipo de plantilla1 es el nombre de marca en texto.
//     Si `image` tiene una ruta (archivo en /public), se muestra la imagen
//     en lugar del texto. El nombre de marca se edita en settings/site.json.
export const logo = {
  image: '',     // p.ej. '/logo.svg'
  alt:   'Logo',
};
