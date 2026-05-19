/*
************************************************************************
Fichier de gestion backend des données du parking 
*************************************************************************

 Hector F 

 - IA utilisée pour la compréhension des server-functions + gestion bdd
 - Code écrit à la main 
*/

//import { server$ } from 'solid-start/server';
import { query } from "@solidjs/router";

import { Database } from "bun:sqlite";
import { resolve } from "path";

const spaces = new Database(resolve("src/features/spaces/parking.db"));


export const getCars = query(async () => {
    const cars = spaces.query("SELECT * FROM users WHERE is_occupied = 1").all();
    return cars;
});

/*
Structure de la table users  
    id INTEGER PRIMARY KEY,
    is_occupied BOOLEAN NOT NULL,
    car_id INTEGER, -- optional
    updated_at TEXT DEFAULT CURRENT_TIMESTAMP
    immat TEXT --optional
*/


export const addCar = (car) => cars.push(car);

export const updateCar = (id, car) => {
    const index = cars.findIndex((c) => c.id === id);
    if (index !== -1) cars[index] = car;
};
export const deleteCar = (id) => {
    const index = cars.findIndex((c) => c.id === id);
    if (index !== -1) cars.splice(index, 1);
};