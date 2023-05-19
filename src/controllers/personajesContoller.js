import { router } from "passport-jwt";
import passport from "passport";
import Personaje from "/models/personajes";

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
    const personajes = await deleteCharacterById(id);
    if(id>0){
        res.status(200).send(personajes);
    }
    else if(id<=0){
        res.status(404).send(personajes);
    }
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