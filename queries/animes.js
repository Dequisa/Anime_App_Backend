// Defines method but doesn't call it
// const anime = require("../controller/animes.js");
// const animes = require("../controller/animes.js");
// const characters = require("../controller/characters.js");
const db = require("../db/config.js");

const fetchAnimes = async () => {
  try {
    const animes = await db.any("SELECT * FROM  animes ORDER BY title ASC");
    return animes;
  } catch (err) {
    console.log(err);
    debugger;
  }
};

const fetchCharacterByAnime = async (anime_id) => {
  try {
    // look up any vs many
    const characters = await db.any(
      "SELECT * FROM characters WHERE anime_id=$1",
      // "SELECT image, name FROM characters WHERE anime_id=$1",
      anime_id
    );
    return characters;
  } catch (err) {}
};

// Note to self- Consider using join here instead of two queries
const fetchSingleAnime = async (anime_id) => {
  try {
    const characters = await fetchCharacterByAnime(anime_id);
    const anime = await db.one(
      "SELECT * FROM animes WHERE anime_id=$1",
      anime_id
    );
    anime.characters = characters;
    return anime;
  } catch (err) {
    console.log(err);
    return err;
    debugger;
  }
};

const addAnime = async (anime) => {
  try {
    if (!anime.title) {
      throw "You must specify a value for anime title";
    }
    const newAnime = await db.one(
      "INSERT INTO animes (title, image) VALUES($1, $2) RETURNING *",
      [anime.title, anime.image]
    );
    console.log(newAnime);
    return newAnime;
  } catch (err) {
    console.log(err);
    return err;
  }
};

const deleteAnime = async (anime_id) => {
  try {
    const removeAnime = await db.one(
      "DELETE FROM animes WHERE anime_id=$1 RETURNING *",
      anime_id
    );
    return removeAnime;
  } catch (err) {
    console.log(err);
    return err;
  }
};

const updateAnime = async (anime_id, anime) => {
  try {
    const modifySingleAnime = await db.one(
      `UPDATE anime SET anime_title=$1, photo=$2, WHERE anime_id=$3 RETURNING *`,
      [anime.title, anime.photo, anime_id]
    );
    return modifySingleAnime;
  } catch (err) {
    console.log(err);
    return err;
  }
};
module.exports = {
  fetchAnimes,
  fetchSingleAnime,
  addAnime,
  deleteAnime,
  fetchCharacterByAnime,
  updateAnime,
};
