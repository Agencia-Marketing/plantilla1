# Plantilla 1 — Agencia Digital

Landing page profesional para agencia de marketing digital. Diseñado como plantilla rebrandeable para diferentes clientes.

## Stack

- **[Astro](https://astro.build)** v5 — Static site generator
- **[Tailwind CSS](https://tailwindcss.com)** v3 — Utility-first CSS
- **[PostCSS](https://postcss.org)** + Autoprefixer
- **[Cloudflare Pages](https://pages.cloudflare.com)** — Hosting + Workers
- **GSAP** (CDN) — Animaciones avanzadas
- **Material Symbols** — Iconografía

## Estructura

```
├── src/
│   ├── layouts/
│   │   └── Layout.astro          # Layout global (nav, footer, head)
│   ├── pages/
│   │   ├── index.astro           # Landing page
│   │   ├── nosotros.astro        # Sobre nosotros
│   │   ├── contacto.astro        # Contacto
│   │   └── servicios/
│   │       ├── desarrollo-web.astro
│   │       ├── agentes-ia.astro
│   │       ├── diseno-grafico.astro
│   │       ├── redes-sociales.astro
│   │       ├── campanas-publicitarias.astro
│   │       ├── videomarketing.astro
│   │       ├── embudos-venta.astro
│   │       ├── creadores-ugc.astro
│   │       └── creacion-contenido.astro
│   └── styles/
│       └── global.css             # CSS global + variables de color
├── html/                          # Versión standalone (Tailwind CDN)
│   ├── index.html
│   ├── nosotros.html
│   ├── contacto.html
│   └── servicios/
├── tailwind.config.mjs            # Tokens de diseño
├── astro.config.mjs
└── postcss.config.mjs
```

## Empezar

```bash
npm install
npm run dev       # → localhost:4321
npm run build     # → dist/
npm run preview   # → preview local del build
```

## Personalizar para un cliente

### Colores

Editar `src/styles/global.css` → bloque `:root`:

```css
:root {
  --color-primary: #7e22ce;        /* Color principal */
  --color-primary-dark: #6d28d9;   /* Hover */
  --color-primary-fixed: #ede9fe;  /* Tono claro */
  --color-inverse-primary: #c4b5fd;
  --color-on-primary-fixed: #3b0764;
  --color-footer-bg: #3b0764;
}
```

Y luego `tailwind.config.mjs` → `theme.extend.colors` con los mismos valores.

### Contenido

Cada página tiene su `.astro` en `src/pages/`. Textos, imágenes, servicios — todo está en el HTML de cada archivo.

## Servicios

| Ruta | Servicio |
|---|---|
| `/servicios/desarrollo-web` | Desarrollo Web |
| `/servicios/agentes-ia` | Agentes de IA |
| `/servicios/diseno-grafico` | Diseño Gráfico |
| `/servicios/redes-sociales` | Gestión de Redes |
| `/servicios/campanas-publicitarias` | Campañas de Ads |
| `/servicios/videomarketing` | Videomarketing |
| `/servicios/embudos-venta` | Embudos de Venta |
| `/servicios/creadores-ugc` | Creadores UGC |
| `/servicios/creacion-contenido` | Creación de Contenido |

## Versión HTML standalone

La carpeta `html/` contiene versiones HTML puras (Tailwind CDN + CSS inline) sin dependencias ni build. Útiles para entregas rápidas o clientes que solo necesitan archivos estáticos.

## Deploy

Push a `main` → Cloudflare Pages build automático.

```bash
git push
```
