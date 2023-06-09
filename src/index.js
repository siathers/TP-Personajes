import express from "express";
import passport from "passport";
import personajesController from "./controllers/personajesController.js";
import peliculasController from "./controllers/peliserieController.js";
const app = express()
const port = 5000
app.use(express.json());


app.get('/movies', (req, res) => {
    const peliserie = getAllPeliSeries();
    res.status(200).send(peliserie);
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