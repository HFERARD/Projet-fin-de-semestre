import {getClient,getCurrentReservation,getReservation} from "~server/users/users.js"

export default function Client() {
    const params = useParams()
    const id = params.id
    const client = getClient(id)
    const currentReservations = getCurrentReservations(id)
    const pastReservations = getReservation(id)

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
                        <For each={currentReservations}>
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
                    <p style="color:white">{client.email}</p>
                    <p style="color:white">Dépenses depuis le 01/01 : XX €</p>
                    <br></br>
                    <p style="color:white"> Véhicules enregistrés :</p>
                    <div id="lst_vehicule_client">
                        <div class="voiture_ligne">
                            <p class="ligne firstline firstcol_little" title="Véhicule">Vehicule</p>
                            <p class="ligne firstline" title="immatriculation">Immatriculation</p>
                        </div>
                        <hr />
                        <For each={client.vehicules}>
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
                        //exemple
                        <For each={pastReservations}>
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