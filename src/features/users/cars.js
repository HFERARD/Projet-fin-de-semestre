/*
************************************************************************
Fichier de gestion backend des données du parking 
*************************************************************************

Joseph G

 - IA utilisée pour la compréhension des server-functions + gestion bdd
 - Code écrit à la main 
*/

//import { server$ } from 'solid-start/server';
import { query } from "@solidjs/router";

import { Database } from "bun:sqlite";
import { resolve } from "path";

const utilisateurs = new Database(resolve("src/features/spaces/cars.db"));


export const getUsers = query(async () => {
    const users = utilisateurs.query("SELECT * FROM users WHERE is_occupied = 1").all();
    return users;
});

/*
Structure de la table utilisateurs  
   id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT
    surname TEXT
    date_of_birth TEXT
    email TEXT
    password TEXT
    date_joined TEXT
*/


export const addUser = (user) => users.push(user);

export const deleteUser = (id) => {
    const index = users.findIndex((c) => c.id === id);
    if (index !== -1) users.splice(index, 1);
};