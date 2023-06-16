import { Router } from "express";
import passport from "passport";
import Personaje from "../models/personajes.js";
import { createCharacter, getAllCharacters, updateCharacter, getCharacterById, deleteCharacterById, filteredCharacters } from "../services/personajesService.js";
const router= new Router();

router.get ('/characters', async(req, res)=>{
    const personaje = new Personaje();
    personaje.Nombre = req.query.Nombre;
    personaje.Edad = req.query.Edad;
    personaje.Peso = req.query.Peso;
    personaje.IdPelicula = req.query.FK_PeliSerie;
    let personajes;
    if(personaje.Nombre || personaje.Edad || personaje.Peso || personaje.IdPelicula){
        personajes = await filteredCharacters(personaje);
    }
    else{
        personajes = await getAllCharacters(personaje);
    }
    res.status(200).send(personajes);
})
router.get('/characters/:id', async(req, res) => {
    let id=req.params.id;
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
        res.status(404).send();
    }
})
router.post('/characters', async(req, res) => {
    let status = 20
    const personaje = new Personaje();
    personaje.Nombre = req.body.Nombre;
    console.log(req.body.FK_PeliSerie)
    personaje.Imagen = req.body.Imagen;
    personaje.Edad = req.body.Edad;
    personaje.Peso = req.body.Peso;
    personaje.Historia = req.body.Historia;
    personaje.FK_PeliSerie = req.body.FK_PeliSerie;
    const newPersonaje = await createCharacter(personaje);
    if(newPersonaje==null){
        status = 400;
    }
    res.status(status).send(newPersonaje);

});
router.delete('/characters/:id', async(req, res) => {
    const id = req.params.id
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
router.put('/characters/:id', async (req, res) =>
{
    let status = 200;
    if(req.params.id < 0)
    {
        status = 400;
    }
    const id = req.params.id;
    let personaje = new Personaje()
    personaje.Nombre = req.body.Nombre;
    personaje.Imagen = req.body.Imagen;
    personaje.Edad = req.body.Edad;
    personaje.Peso = req.body.Peso;
    personaje.Historia = req.body.Historia;
    personaje.FK_PeliSerie = req.body.FK_PeliSerie;
    const changed = await updateCharacter(personaje, id);
    if(changed==null){
        status = 404;
    }
    res.status(status).send(changed)
});


export default router;