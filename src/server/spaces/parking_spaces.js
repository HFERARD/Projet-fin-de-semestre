"use server";

import { Database } from "bun:sqlite";
import { resolve } from "path";


// Ne pas enlever

/*
************************************************************************
Fichier de gestion backend des données du parking 
*************************************************************************

 Hector F 

 - IA utilisée pour la compréhension de l'API à plus haut niveau + gestion bdd
 - Code écrit à la main 
*/

const dbPath = resolve("src/server/parking.db");
const spaces = new Database(dbPath);

// Fonctions pour récupérer les données en backend (d'où le "use server")

export const getCars = async () => {
    // Récupérer toutes les voitures présentes dans le parking
    const cars = spaces.query("SELECT * FROM cars").all();
    console.log(cars)
    return cars;
};


export const addCar = async (immat, space_id) => {
    // Ajouter une voiture à une place de parking spécifique 
    const occupied = spaces.query("SELECT is_occupied FROM spaces WHERE space_id = ?").get(space_id).is_occupied;
    if (occupied) {
        console.log(`La place ${space_id} est déjà prise. Ajout impossible pour l'immatriculation: ${immat}.`);
        return;
    } else {
        console.log(`Ajout de l'immatriculation: ${immat} ) la place ${space_id}`);
        spaces.query(`INSERT INTO cars (immat, space_id) VALUES (?, ?)`).run(immat, space_id);
        spaces.query(`UPDATE spaces SET is_occupied = true, updated_at = CURRENT_TIMESTAMP WHERE space_id = ?`).run(space_id);
        console.log(`Voiture ajoutée: ${immat} à la place ${space_id}`);
    };
};


export const addCarBis = async () => {
    // TEST : ajout d'une voiture en force (duplicates autorisées)
    await addCar("AA-111-BB", 1);
};

export const removeCar = async (car_id) => {
    // Enlever une voiture du parking
    console.log(`On vide la place associée à l'identifiant voiture: ${car_id}`);
    spaces.query(`DELETE FROM cars WHERE car_id = ?`).run(car_id);
    spaces.query(`UPDATE spaces SET is_occupied = false, updated_at = CURRENT_TIMESTAMP WHERE space_id = (SELECT space_id FROM cars WHERE car_id = ?)`).run(car_id);
};

// Fonctions pour modifier l'état même du parking 

export const addSpace = async () => {
    // Ajout d'un espace libre
    spaces.query(`INSERT INTO spaces (is_occupied) VALUES (false)`).run();
};


export const removeSpace = async () => {
    // Suppression d'une place vide (on suppose la place vide pour le moment)
    spaces.query(`DELETE FROM spaces 
        WHERE space_id = (
        SELECT MAX(space_id) FROM spaces WHERE is_occupied = 0
    );`).run();
};

export const getNumberOfSpaces = async () => {
    // Récupérer le nombre total de places de parking
    const result = spaces.query("SELECT COUNT(*) AS count FROM spaces").get();
    return result.count;
};

export const getNumberOfOccupiedSpaces = async () => {
    // Récupérer le nombre de places occupées
    const result = spaces.query("SELECT COUNT(*) AS count FROM spaces WHERE is_occupied = true").get();
    return result.count;
};

