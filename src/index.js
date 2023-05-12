import express, { Router } from "express";
import pizza from "../src/models/pizza.js";
import {getAll,getById,create,update,deleteById} from './services/pizzaService.js';
const app = express()
const port = 5000
app.use(express.json());

Router.get('/movies/:id', async(req, res)=>{
  let status = 200;
  const id = req.params.id;
  if (id<0) status=400
  else
  {
    const Peliserie = await getPeliserieById(req.params.id)
  }
  res.status(status).send(pizzas);
})

app.get('/movies', (req, res) => {
    const Peliserie = getAllPeliseries();
    res.status(200).send(Peliserie);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

/*app.put("/{id}", async (req, res) =>
{
    let status = 200;
    if(req.params.id < 0)
    {
        status = 400;
    }
    const id            = req.params.id;
    const pizza         = new Pizza();
    pizza.Nombre        = req.body.Nombre;
    pizza.LibreGluten   = req.body.LibreGluten;
    pizza.Importe       = req.body.Importe;
    pizza.Descripcion   = req.body.Descripcion;
    const changed = await update(pizza, id);
    if(changed==null){
        status = 404;
    }
});

app.delete("/{id}", (req, res) =>
{
    let status = 200;
    const id = req.params.id;
    let pizza = getById(req.params.id)
    if (id<0) status=400
    else if (pizza==null)
    {
        status=404
    }
    else
    {
      const pizza = deleteById(req.params.id)
    }
    res.status(status).send(pizzas);
});

app.post("/", async (req, res) =>
{
    let status = 201;
    const pizza = new Pizza();
    pizza.Nombre = req.body.Nombre;
    pizza.LibreGluten = req.body.LibreGluten;
    pizza.Importe = req.body.Importe;
    pizza.Descripcion = req.body.Descripcion;
    const pizzaCreada = await create(pizza);
    if(pizzaCreada==null){
        status = 400;
    }
    res.status(status).send(pizzaCreada);
});

app.get("/{id}", (req, res) =>
{
    const p = new pizza();
    let respuesta = null;
    let id = parseInt(req.params.id);
    if (id <= 0)
    {
        respuesta = BadRequest();
    }
    else
    {
        p = BD.BuscarPizzaPorId(id);
        if (p == null)
        {
            respuesta = NotFound();
        }
        else
        {
            respuesta = Ok(p);
        }
    }
    return respuesta;
});*/