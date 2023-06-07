import sql from 'mssql';
import configDB from '../models/db.js';

export const getAllCharacters = async () => {
    const connection = await sql.connect(configDB);
    const results = await conn.request().query('SELECT * FROM Personajes');
    return results.recordset; 
}
export const getCharacterById = async (id) => {
    const connection = await sql.connect(configDB);
    const result = await conn.request().input('pId_Personaje', sql.Int, id).query('SELECT * FROM Personajes where Id_Personajes = @pId_Personaje');
    return result.recordset;
}
export const createCharacter = async (personaje) => {
    const connection = await sql.connect(configDB);
    const result = await conn.request().input('pNombre', sql.VarChar, personaje.Nombre).input('pImagen', sql.string, personaje.Imagen).input('pEdad', sql.int, personaje.Edad).input('pPeso', sql.Int, personaje.Peso).input('pHistoria', sql.VarChar, personaje.Historia).query('INSERT INTO Personaje (Nombre, Imagen, Edad, Peso, Historia, FK_Peliserie) VALUES (@pNombre, @pImagen, @pEdad, @pPeso, @Historia)');
    return result.recordset;
}
export const updateCharacter = async (personaje, id) => {
    const connection = await sql.connect(configDB);
    const result = await conn.request().input('pNombre', sql.VarChar, personaje.Nombre).input('pImagen', sql.string, personaje.Imagen).input('pEdad', sql.int, personaje.Edad).input('pPeso', sql.Int, personaje.Peso).input('pHistoria', sql.VarChar, personaje.Historia).input(pId_Personaje, sql.Int, id).query('UPDATE Personaje SET Nombre=@pNombre, Imagen=@pImagen, Edad=@pEdad, Historia=@pHistoria WHERE Id_Personaje=@pId_Personaje');
    return result.recordset;
}
export const deleteCharacterById = async (id) => {
    const connection = await sql.connect(configDB);
    const result = await conn.request().input('pId_Personaje', sql.Int, id).query('DELETE FROM Personajes where Id_Personaje = @pId_Personaje');
    return result.recordset;
}
export const filteredCharacters = async (personaje) => {
    let conn      = await sql.connect(configDB);
    let results;
    let query;
    if (personaje.IdPelicula){
        query = 'SELECT Personajes.Imagen, Personajes.Nombre, Personajes.IDPersonaje FROM Peliculas inner join Conexiones on Peliculas.IDPelicula = Conexiones.IDPelicula inner join Personajes on Conexiones.IDPersonaje = Personajes.IDPersonaje Where Peliculas.IDPelicula = @pIdMovie and';
    }
    else{
        query = 'SELECT Personajes.Imagen, Personajes.Nombre, Personajes.IDPersonaje FROM Personajes Where';
    }
    if (personaje.Nombre){
        query = query + ' Personajes.Nombre = @pName and';
    }
    if (personaje.Edad){
        query = query + ' Personajes.Edad = @pAge and';
    }
    if (personaje.Peso){
        query = query + ' Personajes.Peso = @pWeight and';
    }
    query = query.slice(0, -4);
    results   = await conn.request().input('pName', sql.VarChar, personaje.Nombre).input('pAge', sql.Int, personaje.Edad).input('pWeight', sql.Float, personaje.Peso).input('pIdMovie', sql.Int, personaje.IdPelicula).query(query);
    return results.recordset; 
}