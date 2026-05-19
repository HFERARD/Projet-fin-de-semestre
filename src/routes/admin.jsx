import { For } from "solid-js";
import { getCars } from "~/features/spaces/parking_spaces";
import { createResource } from "solid-js";


export default function Admin() {
    const [cars] = createResource(async () => getCars());


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
            </div>
        </main>
    );
}