import { For } from "solid-js";


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
            <div>
              <p class="info">Déjà client :</p>
              <div class="formulaire">
                <label style="color:black" for="identifiant">Id. : </label>
                <input type="text" id="identifiant" name="identifiant" placeholder="à saisir"></input>
              </div>

              <div class="formulaire">
                <label style="color:black" for="Mot de passe">MdP : </label>
                <input type="password" id="Mdp" name="Mot de passe" placeholder="à saisir"></input>
              </div>
            </div>
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
        </div>

      </div>
    </main>
  );
}

