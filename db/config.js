const { request } = require("express");

const pgp = require("pg-promise")();
require("dotenv").config();

// const connectionObject = {
//   host: process.env.PG_HOST,
//   // port: process.env.PG_PORT,
//   database: process.env.PG_DB,
//   user: process.env.PG_USER,
//   password: process.env.PG_PASSWORD,
//   database_url: process.env.DATABASE_URL,

// };

const cn = {
  connectionString: process.env.DATABASE_URL,
  max: 30,
};
const db = pgp(cn);

module.exports = db;
