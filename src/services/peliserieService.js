import sql from 'mssql';
import configDB from '../models/db.js';

export const getAllPeliSeries = async () => {
    const connection = await sql.connect(configDB);
    const results = await conn.request().query('SELECT * FROM PeliSerie');
    return results.recordset; 
}
export const getPeliSerieById = async (id) => {
    const connection = await sql.connect(configDB);
    const result = await conn.request().input('pId_PeliSerie', sql.Int, id).query('SELECT * FROM PeliSerie PS JOIN Personajexpeliserie pxp On ps.id_peliserie=pxp-fk_peliserie JOIN personaje pj On pj.id_personaje=pxp.fk_personaje Where ps.id_peliserie = @id_peliserie');
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
