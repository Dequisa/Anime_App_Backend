DROP DATABASE IF EXISTS  anime_dev;

CREATE DATABASE anime_dev;

\c anime_dev;

CREATE TABLE animes(
    anime_id SERIAL PRIMARY KEY,
    title TEXT,
    description TEXT,
    image TEXT,
    YT_embedid TEXT,
    is_validated_seeded BOOLEAN DEFAULT false
);

CREATE TABLE characters(
    character_id SERIAL PRIMARY KEY,
    anime_id INTEGER REFERENCES animes (anime_id)
    ON DELETE CASCADE,
    name Text,
    summary TEXT,
    race TEXT,
    evolution TEXT,
    common_attack TEXT,
    quote TEXT,
    image TEXT,
    is_validated_seeded BOOLEAN
);

CREATE TABLE comments(
    comment_id SERIAL PRIMARY KEY,
    anime_id INTEGER REFERENCES animes (anime_id)
    ON DELETE CASCADE,
    commentor TEXT,
    title TEXT,
    comment TEXT

);

CREATE TABLE fanArt (
    id SERIAL PRIMARY KEY,
    anime_id INTEGER REFERENCES animes (anime_id),
    -- imgname TEXT,
    img BYTEA
);

CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    name varchar(50),
    email TEXT,
    username varchar(50),
    password TEXT,
    img TEXT,
    quote TEXT

);

CREATE TABLE authSession (
   auth_token SERIAL PRIMARY KEY,
   user_id INTEGER REFERENCES users (user_id)
    ON DELETE CASCADE,
   expiration_date DATE
);

