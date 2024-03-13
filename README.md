# Prueba Tecnica - CRUD de mascotas

---

## Especificacion de la estructura de carpetas

pets
|-- node_modules
|-- public
|-- src
| |-- app (aqui es donde estoy manejando la configuracion de las rutas a la app)
| |-- components (componentes que utilice en la app)
| |-- data (simulacion de datos para los tipos de mascotas)
| |-- models (modelo donde definimos los tipos de datos que debe tener cada Pet)
| |-- store (configuracion de la store de redux toolkit)
| | |-- states (aqui se encuentra el estado que se utilizara para manejar las pets)
| |-- views (vistas de la aplicacion)
| | |-- Pets (esta es la vista donde incluiremos el create y el list para las rutas)
| |-- main.tsx

_nota: en index.ts creamos el re-export o tambien conocido barrel para manejar rutas de importacion mas cortas y limpias_
