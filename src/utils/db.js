/*
****************************************
Page génération de la bdd
****************************************

Hector F

Utilisation IA pour la syntaxe puis écritude à la main
*/

import { Database } from "bun:sqlite";


// BDD pour toutes les voitures utilisateurs

const db = new Database("./src/routes/features/users/cars.db");

// Create table
db.run(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT
    surname TEXT
    date_of_birth TEXT
    email TEXT
    password TEXT
    date_joined TEXT
  )
`);


// BDD pour toutes les voitures dans le parking 

const db2 = new Database("./src/routes/features/spaces/parking.db");

// Create table
db2.run(`
  CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY,
  is_occupied BOOLEAN NOT NULL,
  car_id INTEGER, -- optional
  updated_at TEXT DEFAULT CURRENT_TIMESTAMP
  )
`);

