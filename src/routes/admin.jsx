import { For, Suspense } from "solid-js";
import { createAsync, query, revalidate } from "@solidjs/router";
import { getCars, addCar, removeCar, addSpace, addCarBis, getNumberOfSpaces, getNumberOfOccupiedSpaces, removeSpace } from "~/server/spaces/parking_spaces";

const fetchCars = query(async () => getCars(), "fetchCars");

const fetchNumberOfSpaces = query(async () => getNumberOfSpaces(), "fetchNumberOfSpaces");

const fetchNumberOfOccupiedSpaces = query(async () => getNumberOfOccupiedSpaces(), "fetchNumberOfOccupiedSpaces");


export default function Admin() {

    const cars = createAsync(() => fetchCars());

    const numberOfSpaces = createAsync(() => fetchNumberOfSpaces());

    const numberOfOccupiedSpaces = createAsync(() => fetchNumberOfOccupiedSpaces());


    const handleRemoveCar = async (element) => {
        /* Fonction pour retirer une voiture de la liste

        ** PROBLEME CONNECTION BACKEND **
        */
        element.preventDefault();

        const data = new FormData(element.target);
        removeCar(data.get("space_id"));

        await revalidate();
        // Mettre à jour la table affichée

        element.target.reset();
        // Vide le formulaire
    };


    const handleAddCar = async (element) => {
        /* Fonction pour ajouter une voiture à la liste selon le formulaire

        ** PROBLEME CONNECTION BACKEND **
        */
        element.preventDefault();

        const data = new FormData(element.target);
        console.log(data.get("immat"));
        addCar(
            String(data.get("immat")),
            data.get("space_id")
        );
        console.log(`Car added: ${data.get("immat")} to space ${data.get("space_id")}`);

        await revalidate();
        // Mettre à jour la table affichée

        element.target.reset();
        // Vide le formulaire

    };

    const handleAddSpace = async () => {
        /* 
        Fonction pour ajouter une place au parking (bdd)
        */

        await addSpace();

        console.log("Space added");

        await revalidate();
    };

    const handleRemoveSpace = async () => {
        /* 
        Fonction pour supprimer une place du parking (bdd)
        */
        await removeSpace();

        await revalidate();
    };

    // TEST -------------------------------------------------
    const handleAddCarBis = async () => {
        // GESTION TEMPORAIRE POUR TESTER LA CONNEXION BACKEND
        // On montre que la base de donnée fonctionne bien mais que la gestion avec le formulaire a un défaut
        // On ajoute la voiture "AA-111-BB" à la place 1

        await addCarBis();

        console.log("Car added with addCarBis");

        await revalidate();
    };
    // -------------------------------------------------------

    return (
        <main>
            <h1>Tableau de bord</h1>
            <p>Vue en direct des données du parking</p>
            <div id="basicdata">
                <div class="chip">
                    <p>Occupation</p>
                    <p class="data">{Math.round(numberOfOccupiedSpaces() / numberOfSpaces() * 100) || 0}%</p>
                </div>
                <div class="chip">
                    <p>Nombre de véhicules</p>
                    <p class="data">{numberOfOccupiedSpaces()}</p>
                    Total places : {numberOfSpaces()}
                </div>
                <div class="chip">
                    <p>Entrées aujourd'hui</p>
                    <p class="data">Non renseignée</p>
                </div>
                <div class="chip">
                    <p>Recettes aujourd'hui</p>
                    <p class="data">Non renseignée</p>
                </div>
            </div>

            <div class="chip mt-6 p-4">
                <p>Ajouter un véhicule</p>
                <form onSubmit={handleAddCar}>
                    <input name="immat" type="text" placeholder="Immatriculation" required />
                    <input name="space_id" type="number" placeholder="N° de place" required />
                    <button type="submit">Ajouter</button>
                </form>
            </div>

            <div class="chip mt-6 p-4">
                <p>Retirer un véhicule</p>
                <form onSubmit={handleRemoveCar}>
                    <input name="space_id" type="number" placeholder="N° de place" required />
                    <button type="submit">Retirer</button>
                </form>
            </div>
            <br />

            <h2>Voitures actuellement présentes</h2>
            <div id="liste_voitures">
                <div class="voiture_ligne">
                    <p class="ligne firstline firstcol" title="car_id">ID Voiture</p>
                    <p class="ligne firstline" title="immatriculation">Immatriculation</p>
                    <p class="ligne firstline" title="heure_arrivee">Date et heure d'arrivée</p>
                    <p class="ligne firstline" title="numero_place">N° de place</p>
                </div>
                <hr />
                <Suspense fallback={<p>Chargement des données...</p>}>
                    <For each={cars() || []}>
                        {(voiture) =>
                            <div class="voiture_ligne">
                                <p class="ligne firstcol">{voiture.car_id}</p>
                                <p class="ligne">{voiture.immat}</p>
                                <p class="ligne">{voiture.updated_at}</p>
                                <p class="ligne">{voiture.space_id}</p>
                            </div>}
                    </For>
                </Suspense>
            </div>
            <button onClick={handleAddSpace} class="m-4">Ajouter une place</button>
            <button onClick={handleAddCarBis} class="m-4">Ajouter un véhicule (DEBUG)</button>
            <button onClick={handleRemoveSpace} class="m-4">Supprimer une place </button>

        </main>
    );
}