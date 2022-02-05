const anime = require("express").Router();
const charactersController = require("./characters.js");
const {
  fetchAnimes,
  fetchCharacterByAnime,
  fetchSingleAnime,
  addAnime,
  deleteAnime,
  updateAnime,
} = require("../queries/animes");
// const { fetchSingleCharacter } = require('../queries/characters.js');

// Move to Utils(Generic functions)
function Captilization(title) {
  return title
    .replace(/^"(.*)"$/, "$1")
    .toLowerCase()
    .split(" ")
    .map((word) => {
      return word.charAt(0).toUpperCase() + word.substring(1);
    })
    .join(" ");
}

anime.get("/", async (request, response) => {
  const anime = await fetchAnimes();
  response.json({
    success: true,
    payload: anime,
  });
});

anime.get("/:anime_id", async (request, response) => {
  const { anime_id } = request.params;
  try {
    const singleAnime = await fetchSingleAnime(anime_id);
    response.json({
      success: true,
      payload: singleAnime,
    });
  } catch (err) {
    response.status(404).json({ error: "Resource not found.", message: e });
  }
});

anime.get("/:anime_id/characters", async (request, response) => {
  const { anime_id } = request.params;

  try {
    const allCharacters = await fetchCharacterByAnime(anime_id);
    response.json({
      success: true,
      payload: allCharacters,
    });
  } catch (err) {
    response.status(404).json({ error: "Resource not found.", message: e });
  }
});

anime.post("/", async (request, response) => {
  const string = JSON.stringify(request.body.title);
  let upperCase = Captilization(string);
  request.body.title = await upperCase;
  if (request.body.image === "") {
    request.body.image =
      "https://24.media.tumblr.com/6cb6dafcd2e26a02fc19c90b60544fe7/tumblr_n07r75J6Kv1rhruqso1_500.gif";
    // request.body.image = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcOja5GMtvqeMu438_Lm1MwjRGCgKd4Dvi0A&usqp=CAU'
  }
  response.json(await addAnime(request.body));
});

anime.delete("/:id", async (request, response) => {
  const { id } = request.params;
  response.json(await deleteAnime(id));
});

anime.put("/:id", async (request, response) => {
  const { id } = request.params;
  response.status(200).json(await updateAnime(id, request.body));
});

module.exports = anime;
