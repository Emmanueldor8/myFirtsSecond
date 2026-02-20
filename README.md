📘 Proyecto MyFirstSecond – Interfaz Visual en React
Arquitectura Feature-Based | React + Vite | JSX | CSS

Aplicativo web desarrollado con fines educativos que representa **únicamente la parte visual (UI)** de una tienda en línea, construido con **React y Vite**. El proyecto no implementa lógica funcional ni consumo de datos; su propósito es practicar **estructura de proyectos en React, componentes y maquetación visual**.

🧠 Enfoque del proyecto
Este proyecto está orientado exclusivamente a:

* Organización de proyectos React con arquitectura Feature-Based
* Creación y reutilización de componentes
* Maquetación de interfaces con JSX
* Separación de layout, páginas y componentes
* Uso correcto de la carpeta `public` para recursos estáticos
* Simulación visual de una tienda online (sin funcionalidad real)

🚀 Características visuales principales

✔ Interfaz de tienda

* Visualización de productos mediante cards.
* Imágenes cargadas desde la carpeta `public/img`.
* Información visual de productos (nombre, precio, estado).
* Botones y acciones **solo visuales**.

✔ Layout general

* Header (encabezado)
* Content (contenido principal)
* Footer (pie de página)

✔ Componentes reutilizables

* Separación clara entre layout y componentes visuales.
* Estructura pensada para escalar a un proyecto funcional en el futuro.

🎨 Tecnologías utilizadas

* React
* Vite
* JSX
* CSS
* Estructura Feature-Based

🧱 Estructura del Proyecto

myFirstSecond
├── node_modules
├── public
│   ├── img
│   │   ├── images.jpg
│   │   ├── jordan1.jpg
│   │   ├── jordan2.jpg
│   │   ├── jordan3.jpg
│   │   └── logo.jpg
│   ├── react.svg
│   └── vite.svg
│
├── src
│   ├── features
│   │   └── layout
│   │       └── components
│   │           ├── Header.jsx
│   │           ├── Content.jsx
│   │           └── Footer.jsx
│   │
│   ├── hooks
│   ├── pages
│   ├── App.jsx
│   └── main.jsx
│
└── index.html

📂 Alcance del proyecto

Este proyecto **NO incluye**:

* Lógica de negocio
* CRUD funcional
* Manejo de estado (useState, useEffect)
* Consumo de APIs
* Carrito de compras real
* Persistencia de datos

Todo el comportamiento observado es **estrictamente visual**.

🎯 Objetivo educativo

Este proyecto fue elaborado para que los aprendices:

* Comprendan la estructura básica de un proyecto en React
* Apliquen arquitectura Feature-Based en frontend
* Practiquen la creación de componentes
* Organicen correctamente recursos estáticos
* Diseñen interfaces antes de implementar lógica

👨🏻‍💻 Autor

Emmanuel Ortiz Cano
Aprendiz – Desarrollo de Software
