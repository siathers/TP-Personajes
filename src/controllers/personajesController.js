import { Router } from "express";
import passport from "passport";
import Personaje from "../models/personajes.js";
import { createCharacter, getAllCharacters, updateCharacter } from "../services/personajesService.js";
const router= new Router;

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
router.put("/{id}", async (req, res) =>
{
    let status = 200;
    if(req.params.id < 0)
    {
        status = 400;
    }
    const id = req.params.id;
    personaje.Nombre = req.body.Nombre;
    personaje.Imagen = req.body.Imagen;
    personaje.Edad = req.body.Edad;
    personaje.Peso = req.body.Peso;
    personaje.Historia = req.body.Historia;
    const changed = await updateCharacter(personaje, id);
    if(changed==null){
        status = 404;
    }
    res.status(status)
});

router.get ('/characters', async(req, res)=>{
    const personaje         = new Personaje();
    personaje.Nombre        = req.query.name;
    personaje.Edad          = req.query.age;
    personaje.Peso          = req.query.weight;
    personaje.IdPelicula    = req.query.idMovie;
    let personajes;
    if(personaje.Nombre || personaje.Edad || personaje.Peso || personaje.IdPelicula){
        personajes = await filteredCharacters(personaje);
    }
    else{
        personajes = await getAllCharacters(personaje);
    }
    res.status(200).send(personajes);
})
export default router;