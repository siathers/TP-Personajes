[ES](README.md) | EN

# Personajes API
### Requirements: 

- Microsoft SQL Server Management Studio
- Postman
- Npm
  
### Disclaimer: This is a repository for a school project and may not apply to what you need 

## Correr el Programa

### Primero descargar el .zip, extraerlo y despues de asegurate de que estes en el directorio de la carpeta

### Abrir Microsoft SQL Server Management Studio

#### Arrastrar el siguiente [archivo](DB)

#### Si no lo queres hacer asi:

- Apretar Ctrl + O
- Ir a La carpeta del repositorio que se llama "TP-Personajes"
- Seleccionar "PersonajesDB.sql"

### Ambos: Luego apretar el siguiente boton para crear la base de datos
### ![image](https://github.com/siathers/TP-Personajes/assets/105530043/6fe4be5e-ea8a-460d-9bc1-fd6f0ca55046)


#### Que deberia verse algo como "C:\Users\Nombre_De_Usuario\TP-Personajes>
#### Luego, escribi el siguiente comando: "npm i"

Con esto deberia aparecer una carpeta llamada "node_modules" y con esto deberias poder ejecutar el programa con
#### "npm start"

Deberias ver lo siguiente 

 ![image](https://github.com/siathers/TP-Personajes/assets/105530043/b12fbd9c-aa95-4869-a9b6-d635f157f0ac)


## Una vez ya corriendo el programa, abrir Postman

A la izquierda, vas a ver lo siguiente
#### ![image](https://github.com/siathers/TP-Personajes/assets/114581621/4fc8f83f-e862-4bc8-ae3a-ee1aa3a2a539)

Apretar import donde va a aparecer esto, arrastra [este archivo](personajesCollection.postman_collection.json)

Dentro de "Personajes Collection" vas a ver varias opciones:

### Get: Te devuelve un JSON del o de los objetos que entren dentro de las categorias que seleccionaste (Se pueden usar filtros rellenando Nombre Edad Peso y/o FK_PeliSerie)
### ![image](https://github.com/siathers/TP-Personajes/assets/114581621/824b835e-d949-445b-8b31-d430bf0e24c2) 
### Post: Permite crear uun nuevo objeto (Podes rellenar los campos)
### Put: Permite modificar un objeto en especifico usando su ID
### Del Elimina a un objeto por su ID
