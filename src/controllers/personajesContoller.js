import { router } from "passport-jwt";
import passport from "passport";
import Personaje from "/models/personajes";
import { createCharacter } from "../services/personajesService";

router.get('/characters', async(req, res) => {
    const personajes = await getAllCharacters();
    res.status(200).send(personajes);
});
router.get('/characters/:id', async(req, res) => {
    
    if(id>0){
        const personaje = await getCharacterById(id);
        if (personaje!=null)
        {
            res.status(200).send(personaje);
        }
        else
        {
            res.status(404).send();
        }
    }
    else if(id<=0){
        res.status(404).send(personaje);
    }
});
router.post('/characters/:id', async(req, res) => {
    let status = 201;
    const personaje = new Personaje();
    personaje.Nombre = req.body.Nombre;
    personaje.Imagen = req.body.Imagen;
    personaje.Edad = req.body.Edad;
    personaje.Peso = req.body.Peso;
    personaje.Historia = req.body.Historia;
    personaje.FK_Pelicula = req.body.FK_Pelicula;
    const newPersonaje = await createCharacter(personaje);
    if(newPersonaje==null){
        status = 400;
    }
    res.status(status).send(pizzaCreada);

});
router.delete('/characters/:id', async(req, res) => {
    if(id>0){
        const personaje = await getCharacterById(id);
        if (personaje!=null)
        {
            await deleteCharacterById(id);
            res.status(200).send();
        }
        else
        {
            res.status(404).send();
        }
    }
    else if(id<=0){
        res.status(404).send();
    }
})