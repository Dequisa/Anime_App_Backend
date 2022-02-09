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
  connectionString:
    "postgres://mqmtvikyfuoerw:a6b0d36e2618129111b1c52551b2bdc438020069aef940490b2b747ae08e450d@ec2-35-153-35-94.compute-1.amazonaws.com:5432/d5qk30i399c3d2",
  max: 30,
};
const db = pgp(cn);

module.exports = db;
