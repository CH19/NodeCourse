# Node JS curso

## Indice


## Modulos Core
Los modulos core son aquellos modulos que ya bienen implementados en Nodejs y sirven para crear nuestras aplicaciones
tambien son llamados modulos build-in puesto que ya vienen implementados 
Los modulos mas conocidos son:

- http
- https
- fs (fyle system)
- os (operating system)
- path
- Muchoooos mas

### Modulo Console

El modulo console ([Practica](./app/console.js)) es un modulo bild-in que implementa una consola similar a la de un navegador web

Console simula una terminal web en la consola del navegador


### Modulo Process

[practica](./app/process.js)
Nos indica el proceso de node que esta corriendo en este momento
Con la palabra reservada process invocamos el modulo

con la palabra 
```
process.argv
```
destacamos la cantidad de procesos que se han hecho

### OS
[practica](./app/os.js)
Modulo para interactuar con el sistema operativo
da informacion variada del sistema operativo actual para usarlo es necesario importarlo con require 


### Modulos Timer

Son modulos que permiten simular operaciones asincronas y nos dan ventajas en js 