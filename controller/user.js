const user = require("express").Router();
const { fetchUserByName, fetchUserById } = require("../queries/users.js");
require("../config/passport.js");
// var express = require("express");
// const path = require("path");
// const app = require("../app.js");

function userAuth(user, username, password, request, response) {
  if (username === user.username && password === user.password) {
    response.locals.username = username;
    request.session.authenticated = true;
    user_obj = {
      name: user.name,
      username: user.username,
      email: user.email,
      image: user.img,
      quote: user.quote,
      id: user.user_id,
    };
    request.session.user = user_obj;
    console.log("setting user session", request.session);
    response.status(200).json(user_obj);
  } else {
    console.log("bad credentials");
    response.status(403).json({ msg: "Bad Credentials" });
  }
}
user.get("/me", async (request, response) => {
  console.log("/me current session", request.session);
  response.json(request.session.user);
});

user.post(
  "/login",
  // passport.authenticate("local"),
  async (request, response) => {
    const { username, password } = request.body;
    console.log("username: ", username);
    let user;
    if (username != undefined) {
      user = await fetchUserByName(username);
      userAuth(user, username, password, request, response);
    } else {
      response.status(400).json("undefined Credentials");
    }
    console.log("DB user:", user);
  }
);

user.post("/logout", async (request, response) => {
  request.session.destroy((err) => {});
  console.log("Request Session in Log OUt", request.session);
  if (request.session === undefined) {
    response.json({ logged_out_status: "logged out" });
    response.end("Thank you! Visit again");
  }
  ``;
});

user.get("/:user_id", async (request, response) => {
  const { user_id } = request.params;
  console.log("User's ID pulled from Params:", user_id);
  const singleUser = await fetchUserById(user_id);
  response.json({ singleUser });
});

module.exports = user;
