[ES](README.md) | EN

# Personajes API
### Requirements: 

- Microsoft SQL Server Management Studio
- Postman
- Npm
  
### Disclaimer: This is a repository for a school project and may not apply to what you need 

## Running the program

### Firstly download the .zip file, extract it and make sure that you are in the right folder

### Open Microsoft SQL Server Management Studio

#### Drag the [following file](DB)

#### If you dont want to drag it:

- Press Ctrl + O
- Go to the "TP-Personajes" folder
- Select "PersonajesDB.sql"

### For Both: Then press this button
### ![image](https://github.com/siathers/TP-Personajes/assets/105530043/6fe4be5e-ea8a-460d-9bc1-fd6f0ca55046)

### Open the cmd and co to the "TP-Personajes" folder
#### Which should look like "C:\Users\Username\TP-Personajes>
#### Then run the following command: "npm i"

With this a folder called node_modules should appear, then you can finally run the program by typing
#### "npm start"

You should see the following

 ![image](https://github.com/siathers/TP-Personajes/assets/105530043/b12fbd9c-aa95-4869-a9b6-d635f157f0ac)


## Once its running open Postman

To the left you will see the following
#### ![image](https://github.com/siathers/TP-Personajes/assets/114581621/4fc8f83f-e862-4bc8-ae3a-ee1aa3a2a539)

Click on import donde va a aparecer esto, arrastra [este archivo](personajesCollection.postman_collection.json)

Dentro de "Personajes Collection" vas a ver varias opciones:

### Get: Te devuelve un JSON del o de los objetos que entren dentro de las categorias que seleccionaste (Se pueden usar filtros rellenando Nombre Edad Peso y/o FK_PeliSerie)
### ![image](https://github.com/siathers/TP-Personajes/assets/114581621/824b835e-d949-445b-8b31-d430bf0e24c2) 
### Post: Permite crear uun nuevo objeto (Podes rellenar los campos)
### Put: Permite modificar un objeto en especifico usando su ID
### Del Elimina a un objeto por su ID
