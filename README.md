# GymTracker - Seguimiento de Entrenamientos

Una aplicación web completa para el seguimiento de entrenamientos de gimnasio, diseñada para ser responsive y fácil de usar desde el móvil.

## 🚀 Características

### ✅ Funcionalidades Principales

- **Perfil de Usuario**: Guarda tu información personal (nombre, peso, altura, género, nivel)
- **Inicio de Entrenamiento**: Registra automáticamente fecha y hora de inicio
- **Búsqueda de Ejercicios**: Busca ejercicios por nombre o grupo muscular
- **Registro de Series**: Añade peso y repeticiones para cada serie
- **Timer de Descanso**: Cronómetro integrado para descansos entre ejercicios
- **Historial Completo**: Guarda todos tus entrenamientos con detalles
- **Estadísticas**: Análisis de progreso por semana, mes o año
- **Diseño Responsive**: Optimizado para móvil y desktop

### 📊 Datos de Ejercicios

La aplicación incluye una base de datos completa con:
- **2,261 ejercicios** diferentes
- **Imágenes** de referencia para cada ejercicio
- **Niveles** de dificultad (Principiante, Novato, Intermedio, Avanzado, Élite)
- **Recomendaciones** de peso y repeticiones según género y nivel
- **Grupos musculares** y equipamiento requerido

## 🛠️ Instalación y Uso

### Requisitos
- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Archivo `exerciseData.csv` en la misma carpeta que `index.html`

### Pasos para usar:

1. **Descargar archivos**:
   - `index.html` (aplicación principal)
   - `exerciseData.csv` (base de datos de ejercicios)
   - `README.md` (este archivo)

2. **Abrir la aplicación**:
   - Haz doble clic en `index.html`
   - O abre el archivo en tu navegador web

3. **Configurar perfil**:
   - Ve a la pestaña "Perfil"
   - Completa tu información personal
   - Haz clic en "Guardar Perfil"

## 📱 Cómo usar la aplicación

### 1. Perfil
- Completa tu información personal
- Los datos se guardan automáticamente en tu navegador
- Esta información se usa para recomendaciones personalizadas

### 2. Entrenar
1. **Iniciar entrenamiento**:
   - Haz clic en "Iniciar Entrenamiento"
   - Se registra automáticamente la fecha y hora

2. **Buscar ejercicios**:
   - Escribe en el campo de búsqueda
   - Selecciona el ejercicio de la lista desplegable
   - Se muestra con imagen y detalles

3. **Registrar series**:
   - Añade peso y repeticiones para cada serie
   - Usa "+ Serie" para añadir más series
   - Usa "-" para eliminar series

4. **Descansos**:
   - Haz clic en "Descanso" para iniciar un timer
   - Configura los minutos de descanso
   - El timer muestra progreso visual

5. **Finalizar**:
   - Haz clic en "Finalizar Entrenamiento"
   - Se guarda automáticamente en el historial

### 3. Historial
- Ver todos tus entrenamientos anteriores
- Fecha, hora y duración de cada entrenamiento
- Lista de ejercicios realizados
- "Ver detalles" para ver series específicas

### 4. Estadísticas
- **Resumen general**: Total de entrenamientos, este mes, esta semana
- **Períodos**: Selecciona semana, mes o año
- **Ejercicios más realizados**: Top 5 con promedios de peso y repeticiones

## 💾 Almacenamiento de Datos

- Todos los datos se guardan en el **localStorage** de tu navegador
- No se envían datos a servidores externos
- Los datos persisten entre sesiones
- Para respaldar: Exporta los datos del localStorage

## 🎨 Características de Diseño

### Responsive Design
- **Móvil**: Navegación vertical, botones grandes
- **Desktop**: Navegación horizontal, layout optimizado
- **Adaptativo**: Se ajusta automáticamente al tamaño de pantalla

### Interfaz Moderna
- **Gradientes** y efectos visuales atractivos
- **Iconos** FontAwesome para mejor UX
- **Animaciones** suaves en botones y transiciones
- **Colores** consistentes y profesionales

### UX Optimizada
- **Búsqueda inteligente** de ejercicios
- **Autocompletado** con imágenes
- **Validación** de formularios
- **Feedback visual** para todas las acciones

## 🔧 Personalización

### Modificar ejercicios
- Edita el archivo `exerciseData.csv`
- Formato: `ID,exercise_name,image_url,level,reps,gender,body_part,equipment`

### Cambiar estilos
- Edita la sección `<style>` en `index.html`
- Modifica colores, fuentes, tamaños según preferencias

### Añadir funcionalidades
- El código está bien estructurado y comentado
- Fácil de extender con nuevas características

## 📈 Funcionalidades Futuras

- **Exportar datos** a PDF/Excel
- **Gráficos de progreso** más detallados
- **Rutinas predefinidas** por objetivos
- **Sincronización** con dispositivos Garmin
- **Notificaciones** de recordatorios
- **Modo offline** completo

## 🐛 Solución de Problemas

### Error al cargar ejercicios
- Verifica que `exerciseData.csv` esté en la misma carpeta
- Asegúrate de que el archivo no esté corrupto
- Revisa la consola del navegador para errores

### Datos no se guardan
- Verifica que el localStorage esté habilitado
- Intenta en modo incógnito para descartar extensiones
- Limpia el caché del navegador

### Problemas en móvil
- Usa un navegador actualizado
- Verifica que JavaScript esté habilitado
- Prueba en modo escritorio si hay problemas de layout

## 📞 Soporte

Para reportar problemas o sugerir mejoras:
1. Revisa la consola del navegador (F12)
2. Anota los pasos para reproducir el problema
3. Incluye información del navegador y sistema operativo

## 📄 Licencia

Esta aplicación es de uso libre para fines personales y educativos.

---

**¡Disfruta de tu entrenamiento con GymTracker! 💪**
