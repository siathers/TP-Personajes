import { router } from "passport-jwt";
import passport from "passport";

router.get('/characters', async(req, res) => {
    const personajes = await getAllCharacters();
    res.status(200).send(personajes);
});

router.post('/characters', async(req, res) => {
    const personaje = new Personaje;

}); 