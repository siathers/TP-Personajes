import { router } from "passport-jwt";
import passport from "passport";
import Personaje from "/models/personajes";

router.get('/characters', async(req, res) => {
    const personajes = await getAllCharacters();
    res.status(200).send(personajes);
});
router.get('/characters/:id', async(req, res) => {
    const personajes = await getAllCharacters();
    res.status(200).send(personajes);
})