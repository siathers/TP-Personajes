import { Router } from "express";
import passport from "passport";
import PeliSerie from "../models/peliserie.js";
import { createPeliSerie, getAllPeliSeries, updatePeliSerie, getPeliSerieById, deletePeliSerieById} from "../services/peliserieService.js";

const router= new Router
router.get ('/movies', async(req, res)=>{
    let status = 200;
    const peliserie = new PeliSerie()
    peliserie.Nombre = req.query.Nombre
    peliserie.Order = req.query.Order.toUpperCase();
    let peliseries;
    if(peliserie.Nombre || peliserie.Orden){
        if(peliserie.Order != "ASC" && peliserie.Order != "DESC"){
            status = 400;
        }
        else{
            peliseries = await filteredMovies(peliserie);
        }
    }
    else{
        peliseries = await getAllPeliSeries();
    }
    console.log(peliseries)
    res.status(status).send(peliseries);
})
router.get ('/movies/:id', async(req, res)=>{ 
    let status = 200;
    const id               = req.params.id;
    const peliserie         = await getPeliSerieById(id);
    if(peliserie == null){
        status = 404;
    }
    if (id < 0){
        status = 400;
    }
    res.status(status).send(peliserie);
})
router.post ('/movies', async(req, res)=>{
    let status = 201;
    let creado;
    const peliserie = new PeliSerie();
    peliserie.Imagen = req.body.Imagen;
    peliserie.Titulo = req.body.Titulo;
    peliserie.FechaCreacion = req.body.FechaCreacion;
    peliserie.Calificacion = req.body.Calificacion;
    if(peliserie.Calificacion < 0 || peliserie.Calificacion > 5){
        status = 400;
    }
    else{
        creado = await createPeliSerie(peliserie);
        if(creado==null){
            status = 400;
        }
    }
    res.status(status).send(creado);
})
router.put ('/movies/:id', async(req, res)=>{
    let status = 200;
    const id = req.params.id;
    const peliserie = new PeliSerie();
    peliserie.Imagen = req.body.Imagen;
    peliserie.Titulo = req.body.Titulo;
    peliserie.FechaCreacion = req.body.FechaCreacion;
    peliserie.Calificacion = req.body.Calificacion;

    const cambiado      = await updatePeliSerie(peliserie, id);
    if(req.params.id < 0 || cambiado == null){
        status = 400;
    }
    res.status(status).send(cambiado);
})
router.delete ('/movies/:id', async(req, res)=>{
    let status = 200;
    if(req.params.id < 0){
        status = 400;
    }
    const idBorrado = await deletePeliSerieById(req.params.id);
    res.status(status).send(idBorrado);
})
export default router;