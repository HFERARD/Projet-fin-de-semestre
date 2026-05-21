import { For, Suspense } from "solid-js";
import { createAsync, query, revalidate } from "@solidjs/router";
import { getCars, addCar, emptySpace, addSpace } from "~/server/spaces/parking_spaces";


export default function Admin() {

    const fetchCars = query(async () => getCars(), "fetchCars"); // J'avais initialement mis query dans le back mais cette fonction s'utilise apparemment coté client, il faut ensuite la passer en Asyncfunc

    const cars = createAsync(() => fetchCars());


    const handleRemoveCar = async (element) => {
        element.preventDefault();

        const data = new FormData(element.target);

        await emptySpace(data.get("space_id"));

        await revalidate("fetchCars");
    };

    /*
    const handleAddCar = async (element) => {
        element.preventDefault();
        const data = new FormData(element.target);

        await addCar(Number(data.get("car_id")), String(data.get("immat")), Number(data.get("space_id")));
        await revalidate("fetchCars");

        element.target.reset();
    };
    */

    const handleAddCar = async (element) => {
        element.preventDefault();
        console.log("handleAddCar called");

        const data = new FormData(element.target);
        console.log("Data:", Object.fromEntries(data));
        await addCar(Number(data.get("car_id")), String(data.get("immat")), Number(data.get("space_id")));

        console.log("Car added, revalidating...");

        await revalidate("fetchCars");
        element.target.reset();
    };

    const handleAddSpace = async () => {
        await addSpace();
        console.log("Space added");
        await revalidate("fetchCars");
    };


    return (
        <main>
            <h1>Tableau de bord</h1>
            <p>Vue en direct des données du parking</p>
            <div id="basicdata">
                <div class="chip">
                    <p>Occupation</p>
                    <p class="data">60%</p>
                </div>
                <div class="chip">
                    <p>Nombre de véhicules</p>
                    <p class="data">2</p>
                    Total places : 30
                </div>
                <div class="chip">
                    <p>Entrées aujourd'hui</p>
                    <p class="data">5</p>
                </div>
                <div class="chip">
                    <p>Recettes aujourd'hui</p>
                    <p class="data">53,20€</p>
                </div>
            </div>

            {/* Add car ; créé avec IA*/}
            <div class="chip">
                <p>Ajouter un véhicule</p>
                <form onSubmit={handleAddCar}>
                    <input name="car_id" type="number" placeholder="ID du véhicule" required />
                    <input name="immat" type="text" placeholder="Immatriculation" required />
                    <input name="space_id" type="number" placeholder="N° de place" required />
                    <button type="submit">Ajouter</button>
                </form>
            </div>

            {/* Remove car */}
            <div class="chip">
                <p>Retirer un véhicule</p>
                <form onSubmit={handleRemoveCar}>
                    <input name="space_id" type="number" placeholder="N° de place" required />
                    <button type="submit">Retirer</button>
                </form>
            </div>


            <h2>Voitures actuellement présentes</h2>
            <div id="liste_voitures">
                <div class="voiture_ligne">
                    <p class="ligne firstline firstcol" title="id">ID</p>
                    <p class="ligne firstline" title="immatriculation">Immatriculation</p>
                    <p class="ligne firstline" title="heure_arrivee">Date et heure d'arrivée</p>
                    <p class="ligne firstline" title="numero_place">N° de place</p>
                    <p class="ligne firstline" title="id_utilisateur">ID de l'utilisateur</p>
                </div>
                <hr />
                <Suspense fallback={<p>Chargement des données...</p>}>
                    <For each={cars() || []}>
                        {(voiture) =>
                            <div class="voiture_ligne">
                                <p class="ligne firstcol">Id placeholder</p>
                                <p class="ligne">{voiture.immat}</p>
                                <p class="ligne">{voiture.updated_at}</p>
                                <p class="ligne">{voiture.id}</p>
                                <p class="ligne">{voiture.car_id}</p>
                            </div>}
                    </For>
                </Suspense>
            </div>

            <button onClick={handleAddSpace}>Ajouter une place</button>
        </main>
    );
}