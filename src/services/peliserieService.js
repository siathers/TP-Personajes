import sql from 'mssql';
import configDB from '../models/db.js';

export const getAllPeliSeries = async () => {
    const connection = await sql.connect(configDB);
    const results = await connection.request().query('SELECT * FROM PeliSerie');
    return results.recordset; 
}
export const getPeliSerieById = async (id) => {
    const connection = await sql.connect(configDB);
    const results1  = await connection.request().input('pId', sql.Int, id).query('select * from PeliSerie where Id_PeliSerie = @pId;'); 
    const results2  = await connection.request().input('pId', sql.Int, id).query('select Personaje.* from Personaje inner join PersonajexPeliserie on Personaje.Id_Personaje = PersonajexPeliserie.fk_Personaje inner join Peliserie on PersonajexPeliserie.fk_PeliSerie = Peliserie.Id_PeliSerie where peliserie.Id_PeliSerie = @pId;');
    results1.recordset[0].Personajes= results2.recordset;
    return results1.recordset[0]; 
}
export const createPeliSerie = async (peliserie) => {
    const connection = await sql.connect(configDB);
    const result = await connection.request().input('pImagen', sql.string, peliserie.Imagen).input('pTitulo', sql.string, peliserie.Titulo).input('pFechaCreacion', sql.Date, peliserie.FechaCreacion).input('pCalificacion', sql.Int, peliserie.Calificacion).query('INSERT INTO PeliSerie (Imagen, Titulo, FechaCreacion, Calificacion) VALUES (@pImagen, @pTitulo, @pFechaCreacion, @pCalificacion)');
    return result.recordset;
}
export const updatePeliSerie = async (peliserie, id) => {
    const connection = await sql.connect(configDB);
    const result = await connection.request().input('pImagen', sql.string, peliserie.Imagen).input('pTitulo', sql.string, peliserie.Titulo).input('pFechaCreacion', sql.Date, peliserie.FechaCreacion).input('pCalificacion', sql.Int, peliserie.Calificacion).input(Id_PeliSerie, sql.Int, id).query('UPDATE PeliSerie SET Imagen=@pImagen, Titulo=@pTitulo, FechaCreacion=@pFechaCreacion, Calificacion=@pCalificacion');
    return result.recordset;
}
export const deletePeliSerieById = async (id) => {
    const connection = await sql.connect(configDB);
    const result = await connection.request().input('pId_PeliSerie', sql.Int, id).query('DELETE FROM PeliSerie where Id_PeliSerie = @pId_PeliSerie');
}

export const filteredMovies = async (peliserie) => {
    let connection = await sql.connect(configDB);
    let results;
    let query = 'SELECT * from PeliSerie ';
    if (peliserie.Nombre){
        query = query + 'where Titulo = @pTitulo ';
    }
    if (peliserie.Orden){
        query = query + 'order by FechaCreacion ' + peliserie.Orden;
    }
    results = await connection.request().input('pTitulo', sql.VarChar, peliserie.Nombre).query(query);
    return results.recordset; 
}
