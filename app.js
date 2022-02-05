const express = require("express");
const fileUpload = require("express-fileupload");
const path = require("path");
const app = express();
const cors = require("cors");
const session = require("express-session");
const multer = require("multer");
const fs = require("fs");
const animesController = require("./controller/animes");
const charactersController = require("./controller/characters");
const fanArtController = require("./controller/fanArt");
const userController = require("./controller/user");
const commentsController = require("./controller/comments");
const cookieParser = require("cookie-parser");
const { Session } = require("inspector");
const { request, response } = require("express");
require("./config/passport");

// app.use(passport.initialize());
// app.use(passport.session());


var corsOptions = {
  origin: [
    "https://c33a-2603-7000-9800-498c-71a4-6ef7-dfa0-c82c.ngrok.io",
    "http://localhost:3000",
    "https://elastic-einstein-7f8f1c.netlify.app",
  ],
  credentials: true,
};

app.use(cors(corsOptions));

app.set("trust proxy", 1);
// note: secret string should be stored securely in an enviorment variable note code
const store = new session.MemoryStore();

app.use(
  session({
    secret: "D53gxl41G",
    name: "anime_session",
    resave: true,
    saveUninitialized: false,
    cookie: { secure: false, maxAge: 1000 * 60 * 60 * 24 },
    store,
  })
);
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(fileUpload());

// Change path to /user
app.use("/user", userController);
app.use("/upload", fanArtController);
app.use("/animes", animesController);
app.use("/characters", charactersController);
app.use("/comments", commentsController);
// app.use(errorHandler());
app.get("/", (request, response) => {
  console.log("whats in req.session:", request.session);
  response.send("Anime Dojo");
});

function errorHandler(err, request, response, next) {
  if (err) {
    response.send("<h1>Pardon us while we do some maintance</h1>");
    next();
  }
}
require("dotenv").config();
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log("Listening on Port:", PORT);
});
module.exports = app;
