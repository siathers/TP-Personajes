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
    const result = await conn.request().input('pNombre', sql.VarChar, personaje.Nombre).input('pimagen', sql.string, personaje.Imagen).input('pEdad', sql.int, personaje.Edad).input('pPeso', sql.Int, personaje.Peso).input('pHistoria', sql.VarChar, personaje.Historia).input('pFK_Peliserie', sql.Int, personaje.FK_Peliserie).query('INSERT INTO Pizzas (Nombre, Imagen, Edad, Peso, Historia, FK_Peliserie) VALUES (@pNombre, @pImagen, @pEdad, @pPeso, @Historia, @FK_Peliserie)');
    return result.recordset;
}
export const updateCharacter = async (pizza, id) => {
    const connection = await sql.connect(configDB);
    const result = await conn.request().input('pNombre', sql.VarChar, personaje.Nombre).input('pimagen', sql.string, personaje.Imagen).input('pEdad', sql.int, personaje.Edad).input('pPeso', sql.Int, personaje.Peso).input('pHistoria', sql.VarChar, personaje.Historia).input('pFK_Peliserie', sql.Int, personaje.FK_Peliserie).input(pId_Personaje, sql.Int, id).query('UPDATE Pizzas SET Nombre=@pNombre, Imagen=@pImagen, Edad=@pEdad, Historia=@pHistoria, FK_Peliserie=@pFK_Peliserie WHERE Id_Personaje=@pId_Personaje');
    return result.recordset;
}
export const deleteCharacterById = async (id) => {
    const connection = await sql.connect(configDB);
    const result = await conn.request().input('pId_Personaje', sql.Int, id).query('DELETE FROM Personajes where Id_Personaje = @pId_Personaje');
    return result.recordset;
}