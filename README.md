
<p align="center"> 
<img src="https://www.chipax.com/wp-content/uploads/elementor/thumbs/horizontal-pp2cqpagfbxaa4ma3j82x9sba4gwklvrodce2ngkaq.png"/>
</p>

<p align="center"> 
<b>Challenge for Chipax Company</b>
</p>

## ⚗️ Rick and Morty

![](https://shields.io/badge/rickandmortyjs-v1.0-blue) ![](https://shields.io/badge/test-passed-gree) ![](https://img.shields.io/badge/npm-8.13.2-green) ![](https://img.shields.io/badge/node-v17.6.0-green)

Esta solución interactua con una [API de Rick and Morty](https://rickandmortyapi.com/) resolviendo dos ejercicios propuestos por el challenge. <br> Como reglas básicas: buena legibilidad, el diseño, los test, este mismo readme y la composición de archivos, entre otros.

__Aquí los dos retos:__

1. __Char counter:__
  - cuántas veces aparece la letra **"l"** (case insensitive) en los nombres de todos los `location`
  - cuántas veces aparece la letra **"e"** (case insensitive) en los nombres de todos los `episode`
  - cuántas veces aparece la letra **"c"** (case insensitive) en los nombres de todos los `character`
  - cuánto tardó el programa 👆 en total (desde inicio ejecución hasta entrega de resultados)
  
2. __Episode locations:__
  - para cada `episode`, indicar la cantidad y un listado con las `location` (`origin`) de todos <br> los `character` que aparecieron en ese `episode` (sin repetir)
  - cuánto tardó el programa 👆 en total (desde inicio ejecución hasta entrega de resultados)

---

### 🖱️ How to install it:

`git clone git@github.com:ojeelafriend/rickandmortyjs.git`

`cd rickandmortyjs/`

`npm install`

### 🏃 How to use it:

__Run in console mode:__ Ejecutará la solución via consola.

`
npm run dev
`

__Run in api mode:__ Ejecutará la api, habilitando el enrutamiento con HTTP.

`
npm run api
`

__Run in test mode__

`npm run test`

### 🚎 Endpoints:

GET `localhost:3000/episodes` Episode locations.

GET `localhost:3000/counter` Char counter.

GET `localhost:3000/` All excercise.

---

### 👷 Anatomy:

> #### api
>> Capa que comunicará los resultados lanzados por el dispatcher al realizar un GET.
> #### requests
>> Se hallará la entidad Notifier, encargada de realizar las peticiones a la API Rick and Morty.
>>>  __Mock__: imita los datos de la API.
> #### suppliers
>> Constructores de la información solicitada como respuesta del reto.
> #### usecase
>> Acciones de gestión a los datos que recibe la entidad Notifier.
> #### dispatcher.js
>> Encargado de construir los ejercicios propuestos con ayuda
>> de los suppliers & usecase, también cuenta el tiempo de respuesta.

### 🛠️ Considerations:

* __dispatcher:__ Además de repetir la lógica de medir el tiempo de respuesta, posee dos responsabilidades (construir y medir) que la vuelven dificil de leer y dificil al cambio.

* __linker:__ No cumple con la regla de menor a 3 segundos y las utils integradas son díficiles de comprender (extractIds & deleteDuplicate).

### 😄 Author:    odev | ojeelafriend
