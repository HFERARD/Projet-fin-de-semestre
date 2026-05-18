

export default function Admin() {
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
                    <p class="data">25</p>
                    Total places : 42
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
                <For each={[{ "id": 1, "immatriculation": "AB-123-CD", "heure_arrivee": "2026/05/17 18:20:18", "numero_place": 40, "id_utilisateur": 127 },
                { "id": 2, "immatriculation": "EF-123-GH", "heure_arrivee": "2026/05/17 22:00:15", "numero_place": 2, "id_utilisateur": 57 }
                ]}>
                    {(voiture) =>
                        <div class="voiture_ligne">
                            <p class="ligne firstcol">{voiture["id"]}</p>
                            <p class="ligne">{voiture["immatriculation"]}</p>
                            <p class="ligne">{voiture["heure_arrivee"]}</p>
                            <p class="ligne">{voiture["numero_place"]}</p>
                            <p class="ligne">{voiture["id_utilisateur"]}</p>
                        </div>}
                </For>
            </div>
        </main>
    );
}