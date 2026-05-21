import { A } from "@solidjs/router";

export default function Home() {
  return (
    <main>
      <h1>Bienvenue sur le site du Parking des Mines</h1>
      <p>Veuillez vous identifier ou créer votre compte client.</p>
      <div id="basicdata">
        <div class="chip_ac">
          <p class="info">Notre politique tarifaire :</p>
          <div id="liste_tarifs">
            <div class="voiture_ligne">
              <p class="ligne firstline firstcol" title="Durée">Durée</p>
              <p class="ligne firstline" title="Contrat">Contrat</p>
              <p class="ligne firstline" title="Tarif_N">Tarif normal</p>
              <p class="ligne firstline" title="Tarif_VE">Tarif véhicules électriques</p>
              <p class="ligne firstline" title="Tarif_Riv">Tarif riverains</p>
            </div>
            <hr />
            <For each={[
                        {
                          "id": 1,
                          "Durée": "15 min",
                          "Contrat": "Sans abonnement",
                          "Tarif_N": "0.80 €",
                          "Tarif_VE": "0.60 €",
                          "Tarif_Riv": "0.40 €"
                        },
                        {
                          "id": 2,
                          "Durée": "1h",
                          "Contrat": "Sans abonnement",
                          "Tarif_N": "3.20 €",
                          "Tarif_VE": "2.40 €",
                          "Tarif_Riv": "1.60 €"
                        },
                        {
                          "id": 3,
                          "Durée": "3h",
                          "Contrat": "Sans abonnement",
                          "Tarif_N": "9.00 €",
                          "Tarif_VE": "6.80 €",
                          "Tarif_Riv": "4.50 €"
                        },
                        {
                          "id": 4,
                          "Durée": "1j",
                          "Contrat": "Sans abonnement",
                          "Tarif_N": "12.50 €",
                          "Tarif_VE": "9.00 €",
                          "Tarif_Riv": "6.20 €"
                        },
                        {
                          "id": 5,
                          "Durée": "1j",
                          "Contrat": "Avec abonnement",
                          "Tarif_N": "9.00 €",
                          "Tarif_VE": "6.80 €",
                          "Tarif_Riv": "4.50 €"
                        },
                        {
                          "id": 6,
                          "Durée": "1 semaine",
                          "Contrat": "Sans abonnement",
                          "Tarif_N": "60.00 €",
                          "Tarif_VE": "45.00 €",
                          "Tarif_Riv": "30.00 €"
                        },
                        {
                          "id": 7,
                          "Durée": "1 semaine",
                          "Contrat": "Avec abonnement",
                          "Tarif_N": "42.00 €",
                          "Tarif_VE": "32.00 €",
                          "Tarif_Riv": "21.00 €"
                        },
                        {
                          "id": 8,
                          "Durée": "2 semaines",
                          "Contrat": "Avec abonnement",
                          "Tarif_N": "75.00 €",
                          "Tarif_VE": "56.00 €",
                          "Tarif_Riv": "38.00 €"
                        },
                        {
                          "id": 9,
                          "Durée": "1 mois",
                          "Contrat": "Avec abonnement",
                          "Tarif_N": "110.00 €",
                          "Tarif_VE": "82.00 €",
                          "Tarif_Riv": "55.00 €"
                        },
                        {
                          "id": 10,
                          "Durée": "3 mois",
                          "Contrat": "Avec abonnement",
                          "Tarif_N": "300.00 €",
                          "Tarif_VE": "225.00 €",
                          "Tarif_Riv": "150.00 €"
                        },
                        {
                          "id": 11,
                          "Durée": "6 mois",
                          "Contrat": "Avec abonnement",
                          "Tarif_N": "550.00 €",
                          "Tarif_VE": "412.00 €",
                          "Tarif_Riv": "275.00 €"
                        },
                        {
                          "id": 12,
                          "Durée": "1 an",
                          "Contrat": "Avec abonnement",
                          "Tarif_N": "1000.00 €",
                          "Tarif_VE": "750.00 €",
                          "Tarif_Riv": "500.00 €"
                        }
                      ]}>
              {(tarif) =>
                <div class="voiture_ligne">
                  <p class="ligne firstcol">{tarif["Durée"]}</p>
                  <p class="ligne">{tarif["Contrat"]}</p>
                  <p class="ligne">{tarif["Tarif_N"]}</p>
                  <p class="ligne">{tarif["Tarif_VE"]}</p>
                  <p class="ligne">{tarif["Tarif_Riv"]}</p>
                </div>}
            </For>
          </div>
        </div>
        <div>

          <div class="chip_ac">
            <form onSubmit = {connexion}>
              <p class="info">Déjà client :</p>
              <div class="formulaire">
                <label style="color:black" for="identifiant">Id. : </label>
                <input type="text" id="identifiant" name="identifiant" placeholder="à saisir"></input>
              </div>

              <div class="formulaire">
                <label style="color:black" for="Mot de passe">MdP : </label>
                <input type="password" id="Mdp" name="Mot de passe" placeholder="à saisir"></input>
              </div>
            </form>
            <div class="encad_btn">
              <button class="btn_ac"> Se connecter </button>
            </div>
          </div>
          <div class="chip_ac">
            <p class="info">Première connexion :</p>
            <div>
              <div class="formulaire">
                <label style="color:black" for="surname">Nom : </label>
                <input type="text" id="surname" name="surname" placeholder="à saisir"></input>
              </div>
              <div class="formulaire">
                <label style="color:black" for="first_name">Prénom : </label>
                <input type="text" id="first_name" name="first_name" placeholder="à saisir"></input>
              </div>
              <div class="formulaire">
                <label style="color:black" for="mail">Mail : </label>
                <input type="text" id="mail" name="mail" placeholder="à saisir"></input>
              </div>

              <div class="formulaire">
                <label style="color:black" for="Mot de passe">MdP : </label>
                <input type="New_password" id="New_Mdp" name="Mot de passe" placeholder="à saisir"></input>
              </div>
              <div class="formulaire">
                <label style="color:black" for="Mot de passe c">MdP :</label>
                <input type="New_password_c" id="New_Mdp_c" name="Mot de passe c" placeholder=" confirmer votre Mdp"></input>
              </div>
            </div>
            <div class="encad_btn">
              <button class="btn_ac"> créer un compte </button>
            </div>
          </div>
          <Show when = {isFormOpen()}>
            <form onSbmit = {creerCompte}>*
              //Dans l'idéal, remplacer ça par un forEach
              <div class="formulaire">
                <label style="color:black" for="identifiant">Prénom : </label>
                <input type="text" id="name" name="name" placeholder="à saisir" onInput={(e) => setFormData({...formData, ["name"] : e.target.value})}></input>
              </div>

              <div class="formulaire">
                <label style="color:black" for="identifiant">Nom : </label>
                <input type="text" id="surname" name="surname" placeholder="à saisir" onInput={(e) => setFormData({...formData, ["surname"] : e.target.value})}></input>
              </div>

              <div class="formulaire">
                <label style="color:black" for="identifiant">Date de naissance : </label>
                <input type="text" id="date_of_birth" name="date_of_birth" placeholder="à saisir" onInput={(e) => setFormData({...formData, ["date_of_birth"] : e.target.value})}></input>
              </div>

              <div class="formulaire">
                <label style="color:black" for="identifiant">Mel. : </label>
                <input type="text" id="email" name="email" placeholder="à saisir" onInput={(e) => setFormData({...formData, ["email"] : e.target.value})}></input>
              </div> //ce serait stylé de vérifier que l'on entre un email valide

              <div class="formulaire">
                <label style="color:black" for="Mot de passe">MdP : </label>
                <input type="password" id="password" name="Mot de passe" placeholder="à saisir" onInput={(e) => setFormData({...formData, ["password"] : e.target.value})}></input>
              </div>

              //Ce serait stylé de demander de confirmer le mot de passe
              
            </form>
          </Show>
        </div>

      </div>
    </main>
  );
}

export function Admin() {
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

export function Client() {
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