const fanArt = require("express").Router({});
const { response } = require("express");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const { fetchArt, fetchArtByID, postArt } = require("../queries/fanArt");

fanArt.get("/", async (request, response) => {
  const art = await fetchArt(response);
  // console.log("art log from controller:", art);
  response.json(art);
});

fanArt.get("/:id", async (request, response) => {
  const { comment_id } = request.params;
});

fanArt.post("/", async (request, response) => {
  // console.log("File Request", request.body.image);
  const art = await postArt(request.body.image);
});

// fanArt.post("/", async (request, response) => {
//   // console.log("log from fanart post request controller:", request.body);
//   let art = await postArt(request.body);
//   // console.log("Result From Art Post:", art);
//   response.json(art.img);
// });

module.exports = fanArt;
