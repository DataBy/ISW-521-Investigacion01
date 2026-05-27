# ISW-521 · Investigación con Demostración Técnica — Grupo 7

**React: Arquitectura de Componentes y Renderizado Reactivo**

Universidad Técnica Nacional · Escuela de Ingeniería del Software  
Curso: ISW-521 – Programación en Ambiente Web I · 2026 – II Cuatrimestre  
Docente: Bryan Miguel Chaves Salas

---

## 👥 Integrantes

| Nombre completo | Rol principal |
|---|---|
| Bolaños Zamora Byron Josue | Arquitectura, Hooks y Estado |
| Ramirez Axel Vladimir | Componentes, Props y Renderizado |

---

## 📌 Descripción técnica

React es una biblioteca de JavaScript desarrollada por Meta para construir interfaces de usuario basadas en **componentes reutilizables**. Resuelve el problema de la actualización eficiente del DOM mediante un **Virtual DOM** que detecta cambios mínimos antes de reflejarlos en el DOM real.

Este proyecto demuestra en vivo los conceptos clave de React:

- **Componentes** funcionales y su composición
- **Props** para comunicación entre componentes
- **Estado** con `useState` y lógica reactiva
- **Hooks personalizados** para separación de responsabilidades
- **Renderizado dinámico** con `.map()`
- **Virtual DOM** y por qué es más eficiente que Vanilla JS

---

## 🗂️ Estructura del proyecto
```
src/
├── components/
│   ├── TaskForm.jsx
│   ├── TaskList.jsx
│   ├── TaskItem.jsx
│   ├── SearchBar.jsx
│   └── FilterButtons.jsx
├── hooks/
│   └── useTasks.js
├── services/
│   └── localStorageService.js
├── pages/
│   └── Home.jsx
├── styles/
│   └── app.css
├── App.jsx
└── main.jsx
```
---

## ⚙️ Instalación y ejecución

### Requisitos previos
- [Node.js](https://nodejs.org/) v18 o superior
- [Git](https://git-scm.com/)

### Pasos

```bash
git clone https://github.com/DataBy/ISW-521-Investigacion01.git
cd ISW-521-Investigacion01
npm install
npm run dev
```

La app estará disponible en `http://localhost:5173`

---

## 🛠️ Tecnologías utilizadas

| Tecnología | Versión | Justificación |
|---|---|---|
| React | 18.x | Biblioteca principal del tema asignado |
| Vite | 5.x | HMR más eficiente y menor tiempo de arranque que CRA |
| CSS | — | Estilos simples para mantener el foco en React |

---

*ISW-521 · UTN Sede San Carlos · 2026*