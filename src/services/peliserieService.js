import sql from 'mssql';
import configDB from '../models/db.js';

export const getAllPeliSeries = async () => {
    const connection = await sql.connect(configDB);
    const results = await conn.request().query('SELECT * FROM PeliSerie');
    return results.recordset; 
}
export const getPeliSerieById = async (id) => {
    const connection = await sql.connect(configDB);
    const result = await conn.request().input('pId_PeliSerie', sql.Int, id).query('SELECT * FROM PeliSerie where Id_PeliSerie = @pId_PeliSerie');
    return result.recordset;
}
export const createPeliSerie = async (peliserie) => {
    const connection = await sql.connect(configDB);
    const result = await conn.request().input('pImagen', sql.string, peliserie.Imagen).input('pTitulo', sql.string, peliserie.Titulo).input('pFechaCreacion', sql.Date, peliserie.FechaCreacion).input('pCalificacion', sql.Int, peliserie.Calificacion).query('INSERT INTO PeliSerie (Imagen, Titulo, FechaCreacion, Calificacion) VALUES (@pImagen, @pTitulo, @pFechaCreacion, @pCalificacion)');
    return result.recordset;
}
export const updatePeliSerie = async (peliserie, id) => {
    const connection = await sql.connect(configDB);
    const result = await conn.request().input('pImagen', sql.string, peliserie.Imagen).input('pTitulo', sql.string, peliserie.Titulo).input('pFechaCreacion', sql.Date, peliserie.FechaCreacion).input('pCalificacion', sql.Int, peliserie.Calificacion).input(Id_PeliSerie, sql.Int, id).query('UPDATE PeliSerie SET Imagen=@pImagen, Titulo=@pTitulo, FechaCreacion=@pFechaCreacion, Calificacion=@pCalificacion');
    return result.recordset;
}
export const deletePeliSerieById = async (id) => {
    const connection = await sql.connect(configDB);
    const result = await conn.request().input('pId_PeliSerie', sql.Int, id).query('DELETE FROM PeliSerie where Id_PeliSerie = @pId_PeliSerie');
}
export const getAllCharasFromPeliserie = async (id) => {
    const connection = await sql.connect(configDB);
    const results = await conn.request().input('pId_PeliSerie', sql.Int, id).query('select * from personaje pj inner join personajexpeliserie ps on pp.fk_personaje = pj.id_personaje inner join personaje pj on p.id_peliserie = pp.fk_peliserie where p.id_peliserie = @pIdPeliSerie');
}