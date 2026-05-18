

export default function Client() {
    return (
        <main>
            <h1>Mon compte client</h1>
            <div id="basicdata">
                <div class="chip">
                    <p class="info"> Mes réservations actives </p>
                    <div id="lst_vehicule_garé_client">
                        <div class="voiture_ligne">
                            <p class="ligne firstline firstcol" title="Véhicule">Vehicule</p>
                            <p class="ligne firstline" title="numero_place">N° de place</p>
                            <p class="ligne firstline" title="cout_actuel">Cout Actuel</p>
                            <p class="ligne firstline" title="heure_arrivee">Date et heure d'arrivée</p>
                            <p class="ligne firstline" title="immatriculation">Immatriculation</p>

                        </div>
                        <hr />
                        <For each={[{ "Véhicule": "Peugeot 306", "immatriculation": "AB-123-CD", "heure_arrivee": "2026/05/17 18:20:18", "numero_place": 40, "cout_actuel": "6.50 €" },
                        { "Véhicule": "Lotus Seven", "immatriculation": "EF-123-GH", "heure_arrivee": "2026/05/17 22:00:15", "numero_place": 2, "cout_actuel": "3.90 €" }
                        ]}>
                            {(voiture) =>
                                <div class="voiture_ligne">
                                    <p class="ligne firstcol">{voiture["Véhicule"]}</p>
                                    <p class="ligne">{voiture["numero_place"]}</p>
                                    <p class="ligne">{voiture["cout_actuel"]}</p>
                                    <p class="ligne">{voiture["heure_arrivee"]}</p>
                                    <p class="ligne">{voiture["immatriculation"]}</p>
                                </div>}
                        </For>
                    </div>
                    <div class="encad_btn">
                        <button class="btn_ac"> Générer un code de sortie </button>
                    </div>
                </div>
            </div>

            <div id="basicdata">
                <div class="chip">
                    <p class="info">Réserver une place</p>
                    <div >
                        <div class="formulaire">
                            <label style="color:black" for="Date_arrivee">Arrivée : </label>
                            <input type="datetime-local" id="Date_arrivee" name="Date_arrivée"></input>
                        </div>
                        <div class="formulaire">
                            <label style="color:black" for="Date_depart">Départ : </label>
                            <input type="datetime-local" id="Date_depart" name="Date_depart"></input>
                        </div>
                    </div>
                    <div class="encad_btn">
                        <button class="btn_ac"> Vérifier la disponibilité </button>
                    </div>
                </div>

                <div class="chip">
                    <p class="info">Mes informations & véhicules</p>
                    <p style="color:white">Email : Joseph_a_automatiser@gmail.com</p>
                    <p style="color:white">Dépenses depuis le 01/01 : XX €</p>
                    <br></br>
                    <p style="color:white"> Véhicule enregistrés :</p>
                    <div id="lst_vehicule_client">
                        <div class="voiture_ligne">
                            <p class="ligne firstline firstcol_little" title="Véhicule">Vehicule</p>
                            <p class="ligne firstline" title="immatriculation">Immatriculation</p>
                        </div>
                        <hr />
                        <For each={[{ "Véhicule": "Peugeot 306", "immatriculation": "AB-123-CD" },
                        { "Véhicule": "Lotus Seven", "immatriculation": "EF-123-GH" },
                        { "Véhicule": "Fiat Panda", "immatriculation": "KP-982-TR" },
                        { "Véhicule": "Renault Alpine", "immatriculation": "JN-143-ZE" }
                        ]}>
                            {(voiture) =>
                                <div class="voiture_ligne">
                                    <p class="ligne firstcol_little">{voiture["Véhicule"]}</p>
                                    <p class="ligne">{voiture["immatriculation"]}</p>
                                </div>}
                        </For>
                    </div>
                    <div class="encad_btn">
                        <button class="btn_ac"> Ajouter un véhicule </button>
                    </div>
                </div>
            </div>
            <div class="basicdata">
                <div class="chip">
                    <p class="info">Mon historique de réservations</p>
                    <div id="lst_facture_client">
                        <div class="voiture_ligne">
                            <p class="ligne firstline firstcol" title="Date">Date</p>
                            <p class="ligne firsline" title="Véhicule">Vehicule</p>
                            <p class="ligne firstline" title="Durée">Durée</p>
                            <p class="ligne firstline" title="Montant">Montant</p>
                            <p class="ligne firstline" title="immatriculation">Immatriculation</p>
                            <p class="ligne firstline" title="Facture">facture</p>
                        </div>
                        <hr />
                        <For each={[{ "Vehicule": "Peugeot 306", "immatriculation": "AB-123-CD", "Date": "2026/05/13", "Montant": "22.50 €", "Durée": "12j 8h32", "Facture": "lien/facture001.pdf" },
                        { "Vehicule": "Lotus Seven", "immatriculation": "EF-123-GH", "Date": "2026/05/11", "numero_place": 2, "Montant": "12.90 €", "Durée": "1j 4h21", "Facture": "lien/facture002.pdf" }
                        ]}>
                            {(voiture) =>
                                <div class="voiture_ligne">
                                    <p class="ligne firstcol">{voiture["Date"]}</p>
                                    <p class="ligne">{voiture["Vehicule"]}</p>
                                    <p class="ligne">{voiture["Durée"]}</p>
                                    <p class="ligne">{voiture["Montant"]}</p>
                                    <p class="ligne">{voiture["immatriculation"]}</p>
                                    <a class="ligne" href={voiture["Facture"]} target="_blank">Voir PDF</a>
                                </div>}
                        </For>
                    </div>
                </div>
            </div>
        </main>

    );
}