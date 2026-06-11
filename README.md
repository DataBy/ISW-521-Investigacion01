```
     ██████╗ ███████╗ █████╗  ██████╗████████╗
     ██╔══██╗██╔════╝██╔══██╗██╔════╝╚══██╔══╝
     ██████╔╝█████╗  ███████║██║        ██║   
     ██╔══██╗██╔══╝  ██╔══██║██║        ██║   
     ██║  ██║███████╗██║  ██║╚██████╗   ██║   
     ╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝ ╚═════╝   ╚═╝   
```
<div align="center">

**La biblioteca de JavaScript para construir interfaces de usuario** · `v19` · `2026`

[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![Next.js](https://img.shields.io/badge/Next.js-15-000000?style=for-the-badge&logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind](https://img.shields.io/badge/Tailwind-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)

[![UTN](https://img.shields.io/badge/UTN-Sede%20San%20Carlos-0071E3?style=flat-square)](https://utn.ac.cr)
[![Curso](https://img.shields.io/badge/ISW--521-Ambiente%20Web%20I-6741D9?style=flat-square)]()
[![Autor](https://img.shields.io/badge/Autor-Byron%20Bolaños%20Zamora-28C840?style=flat-square)]()

</div>

---

> **⚠ DEFINICIÓN PRECISA:** React es una **biblioteca**, no un framework.  
> Su único trabajo es renderizar UI. El routing, el fetching, el estado global —  
> eso lo decidís vos. Esa es exactamente su fortaleza.

---

## 📁 Contenido del repositorio

```
📦 react-de-0-a-100/
 ┣ 📄 README.md                        ← estás aquí
 ┗ 📄 React_Byron_Bolanos_ISW521.pdf   ← documento completo (14 páginas)
```

---

## 🧭 Índice

1. [¿Qué es React?](#-qué-es-react)
2. [Arquitectura interna](#-arquitectura-interna)
3. [Cuándo usarlo (y cuándo no)](#-cuándo-usarlo-y-cuándo-no)
4. [React vs. Svelte](#-react-vs-svelte)
5. [Ecosistema 2026](#-ecosistema-2026)
6. [Referencias](#-referencias)

---

## ⚛ ¿Qué es React?

React es una **biblioteca de JavaScript de código abierto** creada por Meta (Facebook) para construir interfaces de usuario **declarativas** y **basadas en componentes**.

### El problema que resolvió

En 2011, el chat de Facebook y el contador de notificaciones se desincronizaban constantemente. El código imperativo que manipulaba el DOM se volvía imposible de mantener porque múltiples partes de la UI compartían el mismo dato pero lo actualizaban por rutas distintas.

React cambió el modelo mental:

```
❌ Antes (imperativo)   →   "encontrá el nodo, cambiá este atributo, actualizá aquello"
✅ Después (declarativo) →   "así debería verse la UI con este estado" → React hace el resto
```

La fórmula central de React:

```
UI = f(estado)
```

> Dado el mismo estado, siempre produce el mismo resultado. Puro. Predecible. Testeable.

### Historia resumida

| Año | Hito |
|-----|------|
| 2011 | Problema real en Facebook — desincronización de UI |
| 2011–13 | Jordan Walke crea FaxJS, inspirado en XHP (PHP) |
| Mayo 2013 | Open source en JSConf US — recibido con escepticismo por JSX |
| Enero 2015 | React Native — misma mentalidad, apps iOS/Android nativas |
| Febrero 2019 | **React Hooks** — `useState`/`useEffect` reemplazan clases |
| Marzo 2022 | React 18 — Concurrent rendering, Suspense estable |
| Diciembre 2024 | **React 19** — Server Components estables, React Compiler |

---

## 🏗 Arquitectura interna

### JSX → JavaScript

JSX no es HTML. Es azúcar sintáctica que el compilador (Babel/SWC) transforma en llamadas a `React.createElement()`:

```jsx
// Lo que escribís
const el = <Button color="blue">Guardar</Button>;

// Lo que el compilador genera
const el = React.createElement(Button, { color: "blue" }, "Guardar");
// → { type: Button, props: { color: "blue", children: "Guardar" }, key: null }
```

### Virtual DOM y Reconciliación

React mantiene **dos copias** del árbol en memoria: el árbol actual y el pendiente.  
Cuando el estado cambia:

```
1. Genera nuevo árbol Virtual DOM
2. Algoritmo de diffing O(n) compara ambos árboles
3. Solo los nodos que cambiaron se propagan al DOM real  ← esto se llama "commit"
```

> **Sobre la prop `key`:** Sin una key estable en listas, React puede reutilizar el nodo DOM equivocado → bugs de estado sutiles (inputs con valor incorrecto, animaciones en el elemento malo). Usá siempre un ID real, nunca el índice del array si la lista puede reordenarse.

### Fiber — el motor de reconciliación

Desde React 16, el renderizado es **interrumpible**. Fiber divide el trabajo en unidades pequeñas que pueden pausarse y priorizarse. Esto habilita:

- **`startTransition()`** — marca updates de baja prioridad
- **`useDeferredValue()`** — difiere valores que no son urgentes
- **Concurrent rendering** — interrumpir un render pesado para procesar un keypress

### Flujo de datos unidireccional

```
Estado/Props  →  Render (tu función)  →  Virtual DOM  →  DOM Real  →  Pantalla
      ↑                                                                    |
      └──────────────────── Evento del usuario ───────────────────────────┘
```

Los datos fluyen **solo hacia abajo** (padre → hijo via props).  
Los hijos comunican hacia arriba **solo via callbacks** pasados como props.

### Hooks principales

| Hook | Propósito |
|------|-----------|
| `useState()` | Estado local — valores que cambian y re-renderizan |
| `useEffect()` | Efectos secundarios — fetch, timers, suscripciones |
| `useRef()` | Referencia al DOM o valor sin re-render |
| `useContext()` | Consumir contexto global |
| `useMemo()` | Memorizar cálculos costosos |
| `useCallback()` | Estabilizar funciones entre renders |
| `useReducer()` | Estado complejo con múltiples transiciones |

> **Regla crítica de hooks:** Solo al top level. Nunca dentro de `if`, loops o funciones anidadas. Deben llamarse en el mismo orden en cada render.

---

## 🎯 Cuándo usarlo (y cuándo no)

### ✅ React es la elección correcta cuando...

- Construís una **SPA con estado complejo** donde múltiples partes de la UI reaccionan al mismo dato
- Trabajás en un **equipo grande o proyecto de larga duración** donde la arquitectura de componentes paga dividendos
- Necesitás **SSR + SEO** (con Next.js)
- Querés **app móvil nativa** con la misma base de conocimiento (React Native)
- El **ecosistema y la disponibilidad de talento** son factores críticos del proyecto

### ❌ React NO es la herramienta correcta cuando...

- El sitio es **mayormente estático** (blog, landing, sitio corporativo) → usá Astro, Hugo o HTML puro
- Necesitás **performance extrema** a 60fps+ sin overhead de Virtual DOM → evaluá Svelte o canvas directo
- Es un **prototipo rápido** de una sola persona → Vue o Svelte tienen menos boilerplate
- El cliente debe funcionar **sin JavaScript** → HTMX, Rails, Laravel

### Tabla de decisión rápida

| Escenario | ¿React? | Alternativa |
|-----------|:-------:|-------------|
| SPA compleja con estado | ✅ | — |
| Dashboard / app interna | ✅ | — |
| SSR + SEO crítico | ✅ Next.js | — |
| App móvil nativa | ✅ React Native | Flutter, Kotlin |
| Blog / sitio de contenido | ❌ | Astro, Hugo |
| Landing page simple | ❌ | HTML + CSS + JS |
| Prototipo rápido individual | ⚠️ | Vue, Svelte |
| UI a 60fps sin overhead | ⚠️ | Svelte, canvas |
| Sin JS en cliente | ❌ | HTMX, Rails |

---

## ⚔ React vs. Svelte

La comparativa más instructiva: representan filosofías **opuestas** en casi cada dimensión técnica.

```
React  →  biblioteca de RUNTIME   →  el código React corre en el navegador del usuario
Svelte →  COMPILADOR              →  Svelte desaparece en el build, solo queda JS puro
```

```jsx
// React (JSX + useState)
import { useState } from "react";
function Contador() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(c => c + 1)}>{count}</button>;
}
```

```svelte
<!-- Svelte — mismo resultado, cero runtime -->
<script>
  let count = 0;
</script>
<button on:click={() => count++}>{count}</button>
```

### Comparativa técnica

| Dimensión | React 19 | Svelte 5 |
|-----------|----------|----------|
| Naturaleza | Biblioteca de runtime | Compilador sin runtime |
| Bundle size (hello world) | ~45 KB gzip | ~1–3 KB gzip |
| Virtual DOM | ✅ Sí | ❌ No — DOM directo |
| Modelo de reactividad | Estado inmutable + hooks | Variables reactivas (`$state`) |
| Lenguaje de plantillas | JSX (JS puro) | Sintaxis `.svelte` |
| Ecosistema | 🟢 Enorme | 🟡 Creciendo |
| Adopción industrial | ~82% State of JS 2024 | ~22% State of JS 2024 |
| Descargas npm/semana | ~26 millones | ~1.2 millones |
| Curva de aprendizaje | Moderada | Baja |
| React Native equiv. | ✅ Sí | ❌ No estable |
| Server-side rendering | React Server Components | SvelteKit |

**Conclusión:** React gana en escala de equipo, ecosistema y mercado laboral. Svelte gana en performance de bundle y simplicidad para proyectos pequeños o donde cada KB importa.

---

## 🌐 Ecosistema 2026

### Versión estable: React 19

Lanzada en diciembre 2024. Novedades clave:

- **React Compiler** — optimización automática, adiós `useMemo`/`useCallback` manual
- **Server Components estables** — renderizado en servidor con acceso directo a DB
- **Hook `use()`** — consume promesas y contexto de forma unificada
- **Server Actions** — mutaciones de datos sin endpoint HTTP explícito

### Adopción (State of JS 2024 + npm trends 2026)

| Tecnología | Uso industria | npm/semana |
|-----------|:-------------:|:----------:|
| **React** | **82%** | **~26M** |
| Vue | 49% | ~4.8M |
| Angular | 43% | ~3.5M |
| Svelte | 22% | ~1.2M |
| Solid | 10% | ~340K |

### El stack dominante en producción 2026

```
┌─────────────────────────────────────────────────────────────┐
│  Framework     →  Next.js 15                                │
│  Estilos       →  Tailwind CSS 4                            │
│  Componentes   →  shadcn/ui + Radix UI                      │
│  Estado global →  Zustand / Jotai                           │
│  Datos server  →  TanStack Query v5                         │
│  Formularios   →  React Hook Form + Zod                     │
│  Testing       →  Vitest + Testing Library                  │
│  Lenguaje      →  TypeScript 5                              │
│  Deploy        →  Vercel / Cloudflare Pages                 │
└─────────────────────────────────────────────────────────────┘
```

### Tendencias verificables

- 📦 **React Compiler** consolidado — elimina optimizaciones manuales
- 🖥 **Server Components** como default en Next.js — renderizado en servidor con acceso a DB
- 📉 **Decline de Redux** — reemplazado por Zustand, Jotai y TanStack Query
- 🔷 **TypeScript estándar** — +80% de proyectos nuevos lo usan
- ⚡ **Edge rendering** — SSR distribuido a <50ms (Vercel, Cloudflare)

---

## 📚 Referencias

1. Meta Open Source. (2025). *React Documentation*. https://react.dev
2. Greif, S. et al. (2024). *State of JavaScript 2024*. https://stateofjs.com/2024
3. npm, Inc. (2026). *npm trends: react vs vue vs angular vs svelte*. https://npmtrends.com
4. Meta React Team. (2024). *React v19 Release Notes*. https://react.dev/blog/2024/12/05/react-19
5. Harris, R. & Svelte community. (2024). *Svelte 5 Docs*. https://svelte.dev/docs/svelte/overview
6. Chedeau, C. (2017). *React Fiber Architecture*. https://github.com/acdlite/react-fiber-architecture
7. Meta React Compiler Team. (2024). *Introducing the React Compiler*. https://react.dev/learn/react-compiler
8. Vercel. (2026). *Next.js 15 Documentation*. https://nextjs.org/docs
9. Abramov, D. (2015). *React Components, Elements, and Instances*. https://legacy.reactjs.org/blog/2015/12/18/react-components-elements-and-instances.html
10. Tanner Linsley. (2024). *TanStack Query v5 Documentation*. https://tanstack.com/query/latest

---

<div align="center">

```
Universidad Técnica Nacional · Sede San Carlos
Ingeniería en Desarrollo de Software
Ambiente Web I — ISW-521 · Byron Bolaños Zamora · 2026
```

</div>