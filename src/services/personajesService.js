import sql from 'mssql';
import configDB from '../models/db.js';

export const getAllCharacters = async () => {
    const connection = await sql.connect(configDB);
    const results = await connection.request().query('SELECT * FROM Personaje');
    return results.recordset; 
}
export const getCharacterById = async (id) => {
    const connection = await sql.connect(configDB);
    const result = await connection.request().input('pId_Personaje', sql.Int, id).query('SELECT * FROM Personaje where Id_Personaje = @pId_Personaje');
    return result.recordset;
}
export const createCharacter = async (personaje) => {
    const connection = await sql.connect(configDB);
    const result = await connection.request().input('pNombre', sql.VarChar, personaje.Nombre).input('pImagen', sql.VarChar, personaje.Imagen).input('pEdad', sql.Int, personaje.Edad).input('pPeso', sql.Int, personaje.Peso).input('pHistoria', sql.VarChar, personaje.Historia).input('pFK_PeliSerie', sql.Int, personaje.FK_PeliSerie).query('INSERT INTO Personaje (Nombre, Imagen, Edad, Peso, Historia, FK_PeliSerie) VALUES (@pNombre, @pImagen, @pEdad, @pPeso, @pHistoria, @pFK_PeliSerie)');
    return result.recordset;
}
export const updateCharacter = async (personaje, id) => {
    const connection = await sql.connect(configDB);
    const result = await connection.request().input('pNombre', sql.VarChar, personaje.Nombre).input('pImagen', sql.VarChar, personaje.Imagen).input('pEdad', sql.Int, personaje.Edad).input('pPeso', sql.Int, personaje.Peso).input('pHistoria', sql.VarChar, personaje.Historia).input('pId_Personaje', sql.Int, id).input('pFK_PeliSerie', sql.Int, personaje.FK_PeliSerie).query('UPDATE Personaje SET Nombre=@pNombre, Imagen=@pImagen, Edad=@pEdad, Peso=@pPeso, Historia=@pHistoria, FK_PeliSerie=@pFK_PeliSerie WHERE Id_Personaje=@pId_Personaje');
    return result.recordset;
}
export const deleteCharacterById = async (id) => {
    const connection = await sql.connect(configDB);
    const result = await connection.request().input('pId_Personaje', sql.Int, id).query('DELETE FROM Personaje where Id_Personaje = @pId_Personaje');
    return result.recordset;
}
export const filteredCharacters = async (personaje) => {
    let connection = await sql.connect(configDB);
    let results;
    let query;
    if (personaje.IdPelicula){
        query = 'SELECT Personaje.Imagen, Personajes.Nombre, Personaje.Id_Personaje FROM PeliSerie inner join PersonajexPeliserie on PeliSerie.Id_Pelierie = PersonajexPeliserie.Id_Pelierie inner join Personaje on PersonajexPeliserie.Id_Personaje = Personaje.Id_Personaje Where PeliSerie.Id_Pelierie = @pIdMovie and';
    }
    else{
        query = 'SELECT Personaje.Imagen, Personaje.Nombre, Personaje.Id_Personaje FROM Personaje Where';
    }
    if (personaje.Nombre){
        query = query + ' Personaje.Nombre = @pName and';
    }
    if (personaje.Edad){
        query = query + ' Personaje.Edad = @pAge and';
    }
    if (personaje.Peso){
        query = query + ' Personaje.Peso = @pWeight and';
    }
    query = query.slice(0, -4);
    results   = await connection.request().input('pName', sql.VarChar, personaje.Nombre).input('pAge', sql.Int, personaje.Edad).input('pWeight', sql.Float, personaje.Peso).input('pIdMovie', sql.Int, personaje.IdPelicula).query(query);
    return results.recordset; 
}