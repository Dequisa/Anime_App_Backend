const { request } = require("express");

const pgp = require("pg-promise")();
require("dotenv").config();

// const connectionObject = {
//   host: process.env.PG_HOST,
//   port: process.env.PG_PORT,
//   database: process.env.PG_DB,
//   user: process.env.PG_USER,
//   password: process.env.PG_PASSWORD,
// };

// const db = pgp(connectionObject);

const db = pgp(
  "postgres://hpriqneedvfglh:9ad76d81cbb351049a4e87735bd36e683c38836bf4c74f2ba58cf1c9484c50f2@ec2-35-153-35-94.compute-1.amazonaws.com:5432/d5qk30i399c3d2"
);

module.exports = db;
