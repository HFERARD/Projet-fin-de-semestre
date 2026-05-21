/*
****************************************
Page génération de la bdd
****************************************
*/

import { Database } from "bun:sqlite";


// BDD globale pour tout le projet

const db = new Database("./src/server/parking.db");


// Table des places de parking 
db.run(`
  CREATE TABLE IF NOT EXISTS spaces (
  space_id INTEGER PRIMARY KEY,
  is_occupied BOOLEAN NOT NULL,
  updated_at TEXT DEFAULT CURRENT_TIMESTAMP
  )
`);


// Table des voitures présentes dans le parking
db.run(`CREATE TABLE IF NOT EXISTS cars (
  car_id INTEGER PRIMARY KEY,
  immat TEXT NOT NULL,
  space_id INTEGER
  )
`);

