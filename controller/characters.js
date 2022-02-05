const characters = require("express").Router({ mergeParams: true });
const {
  fetchCharacters,
  fetchSingleCharacter,
  addCharacter,
  deleteCharacter,
  updateCharacter,
} = require("../queries/characters");

// note: be consistent with camel case vs underscore
characters.get("/anime/:animeId", async (request, response) => {
  const { animeId } = request.params;
  const characters = await fetchCharacters(animeId);
  console.log("Results from GET request", characters);
  response.json({
    success: true,
    payload: characters,
  });
});

characters.delete("/:id", async (request, response) => {
  const { id } = request.params;
  await deleteCharacter(id);
  response.status(200).send("deleted");
});
// put means replace while post creates a new item
//add validation no bad words; no empty fields; verify url etc...try to break site with bad values
characters.post("/", async (request, response) => {
  let newCharacter = await addCharacter(request.body);
  response.status(200).json(newCharacter);
});

characters.put("/:id", async (request, response) => {
  const { id } = request.params;
  let characterChange = await updateCharacter(id, request.body);
  response.status(200).json(characterChange);
});

characters.get("/:id", async (request, response) => {
  console.log(request.params);
  const { id } = request.params;
  try {
    response.json(await fetchSingleCharacter(id));
  } catch (err) {
    response.status(404).json({ error: "Resource not found.", message: err });
  }
});

module.exports = characters;
