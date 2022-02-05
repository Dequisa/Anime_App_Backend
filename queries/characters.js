const db = require("../db/config.js");

// remove try/catch from all queries funct
const fetchCharacters = async (anime_id) => {
  try {
    const characters = await db.any(
      "SELECT * FROM  characters WHERE anime_id=$1",
      anime_id
    );
    return characters;
  } catch (err) {
    console.log(err);
    debugger;
  }
};

const fetchSingleCharacter = async (anime_id) => {
  try {
    const fetchSingleCharacter = await db.any(
      "SELECT * FROM characters WHERE anime_id=$1",
      anime_id
    );
    return fetchSingleCharacter;
  } catch (err) {
    console.log(err);
    return err;
    debugger;
  }
};

const addCharacter = async (character) => {
  try {
    if (!character_name) {
      throw "You must specify a value for name";
    }
    const newCharacter = await db.one(
      "INSERT INTO characters (anime_id, character_name, summary, race, evolution, common_attack, quote,image)VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *",
      [
        character.anime_id,
        character.character_name,
        character.summary,
        character.race,
        character.evolution,
        character.common_attack,
        character.quote,
        character.image,
      ]
    );
    return newCharacter;
  } catch (err) {
    console.log(err);
    return err;
  }
};

const deleteCharacter = async (id) => {
  try {
    const removeCharacter = await db.one(
      "DELETE FROM characters WHERE id=$1 RETURNING *",
      id
    );
    return removenime;
  } catch (err) {
    console.log(err);
    return err;
  }
};

const updateCharacter = async (character_id, character) => {
  const modifySingleCharacter = await db.one(
    `UPDATE character SET character_name=$1, race=$2, evolution=$3, common_attack=$4, quote=$5, image=$6 WHERE character_id=$7 RETURNING *`,
    [
      // Google Javascript multiline string recommendations
      character.name,
      character.race,
      character.evolution,
      character.common_attack,
      character.quote,
      character.image,
      character_id,
    ]
  );
  return modifySingleCharacter;
};

module.exports = {
  fetchCharacters,
  fetchSingleCharacter,
  addCharacter,
  deleteCharacter,
  updateCharacter,
};
