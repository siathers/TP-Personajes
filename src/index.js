import express from "express";
import passport from "passport";
import personajesController from "./controllers/personajesController.js";
import peliserieController from "./controllers/peliserieController.js";
const app = express();
const port = 9029;
app.use(express.json());
app.use("", personajesController)
app.use("", peliserieController)

app.listen (port, ()=>{
    console.log(`Running in ${port}`)
})