"use server";

import { Database } from "bun:sqlite";
import { resolve } from "path";


// Ne pas enlever

/*
************************************************************************
Fichier de gestion backend des données du parking 
*************************************************************************

 Hector F 

 - IA utilisée pour la compréhension des server-functions + gestion bdd
 - Code écrit à la main 
*/

const dbPath = resolve("src/server/parking.db");
const spaces = new Database(dbPath);


// Fonctions pour récupérer les données sur les voitures en place


export const getCars = async () => {
    "use server";
    const space = spaces.query("SELECT * FROM spaces").all();
    console.log(space)
    const cars = spaces.query("SELECT * FROM spaces WHERE is_occupied = 1").all();
    console.log(cars)
    return cars;
};


/*
Structure de la table users  
    id INTEGER PRIMARY KEY,
    is_occupied BOOLEAN NOT NULL,
    car_id INTEGER, -- optional
    updated_at TEXT DEFAULT CURRENT_TIMESTAMP
    immat TEXT --optional
*/

export const addCar = async (car_id, immat, id) => {
    console.log("Babababa")
    try {
        spaces.query(`UPDATE spaces
                    SET is_occupied = 1,
                        car_id = ?,
                        updated_at = CURRENT_TIMESTAMP,
                        immat = ?
                    WHERE id = ?`).run(car_id, immat, id);
        console.log(`Car added: ${car_id}, ${immat} to space ${id}`);
    } catch (e) {
        console.error("Error in addCar:", e);
    };
};


export const emptySpace = async (id) => {

    spaces.query(`UPDATE spaces
                    SET is_occupied = 0,
                        car_id = NULL,
                        updated_at = CURRENT_TIMESTAMP,
                        immat = NULL
                    WHERE id = ?`).run(id);
};

// Fonctions pour modifier l'état même du parking 

export const addSpace = async () => {
    spaces.query("INSERT INTO spaces (is_occupied, car_id, immat) VALUES (0, NULL, NULL)").run();
};


export const removeSpace = async (id) => {
    spaces.query("DELETE FROM spaces WHERE id = ?").run(id);
};

