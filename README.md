# GymTracker

GymTracker es una aplicación web sencilla para registrar y visualizar tus entrenamientos diarios.

## Características

- Gestión básica del perfil del usuario (almacenado en `localStorage`).
- Registro de sesiones de entrenamiento.
- Historial visual mediante un calendario mensual que resalta los días con actividad.
- Espacios reservados para objetivos y estadísticas futuras.

## Tecnologías

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [ESLint](https://eslint.org/)

## Inicio rápido

```bash
npm install
npm run dev
```

Esto levantará el servidor de desarrollo en [http://localhost:5173](http://localhost:5173).

## Construcción y despliegue

```bash
npm run build
```

El comando de construcción genera los archivos listos para producción en la carpeta `dist/`.
Para publicar en GitHub Pages, copia `dist/index.html` y la carpeta `dist/assets` al directorio raíz del
repositorio (reemplazando el `index.html` existente) y sube los cambios.
El archivo `index.dev.html` se mantiene como punto de entrada para el entorno de desarrollo.

## Historial de entrenamientos

El componente `History` muestra un calendario del mes en curso.
Los días con al menos una sesión se muestran con un círculo verde y los días sin actividad en rojo.
Al seleccionar un día entrenado se listan las sesiones registradas y es posible consultar los ejercicios realizados en cada una de ellas.
Toda la información del historial se guarda en `localStorage` bajo la clave `workoutHistory`.

## Estructura del proyecto

```
src/
  App.jsx
  components/
    History.jsx
    Profile.jsx
    ...
```

## Licencia

MIT
