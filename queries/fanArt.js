const fanArt = require("../controller/fanArt.js");
const db = require("../db/config.js");

const fetchArt = async () => {
  try {
    // const art = await db.any(
    //   `SELECT encode(img, 'base64') FROM fanArt WHERE id=1`
    // );
    const art = await db.one("SELECT img FROM  fanArt WHERE id=1");
    console.log("art log in Queries", art);
    return art;
  } catch (err) {
    console.log(err);
    debugger;
  }
};

const postArt = async (art) => {
  try {
    if (!art) {
      throw "You Must Choose a File before Uploading";
    }
    const newArtPost = await db.one(
      "INSERT INTO fanArt (img) VALUES($1) RETURNING img",
      [art]
    );
    console.log("Results from PostArt DB:", newArtPost);
    return newArtPost;
  } catch (err) {
    console.log("post reply error", err);
    return err;
  }
};

module.exports = {
  postArt,
  fetchArt,
};
