import { A } from "@solidjs/router";

export function Home() {
  return (
    <main>
      <h1>Bienvenue sur le site du Parking des Mines</h1>
      <p>Veuillez vous identifier ou créer votre compte client.</p>
      <div id="basicdata">
        <div class="chip_ac">
          <p class="info">Première connexion :</p>
          <div class="encad_btn">
          <button class="btn_ac"> créer un compte </button>
          </div>
        </div>
        <div class="chip_ac">
          <p class="info">Déjà client :</p>
          <div class="formulaire">
            <div>
              <label  for="identifiant">Id. : </label>
              <input  type="text" id="identifiant" name="identifiant" placeholder="à saisir"></input>
            </div>
            <div>
              <label for="Mot de passe">MdP : </label>
              <input type="password" id="Mdp" name="Mot de passe" placeholder="à saisir"></input>
            </div>
          </div>
          <div class="encad_btn">
          <button class="btn_ac"> Se connecter </button>
          </div>
        </div>
        
      </div>
    </main>
  );
}

export  function Admin() {
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
      <hr/>
      <For each={[{"id": 1, "immatriculation": "AB-123-CD", "heure_arrivee": "2026/05/17 18:20:18", "numero_place": 40, "id_utilisateur": 127},
        {"id": 2, "immatriculation": "EF-123-GH", "heure_arrivee": "2026/05/17 22:00:15", "numero_place": 2, "id_utilisateur": 57}
      ]}>
        {(voiture)=>
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

export default function Client() {
  return (
    <main>
      <h1>Mon compte client</h1>
      <div class="basicdata">
        <div class="chip">
            <p class="info"> Mes réservations actives </p>
            <p> Durée écoulée </p>
            <p> Cout actuel </p>
            <div class="encad_btn">
              <button class="btn_ac"> Générer un code de sortie </button>
            </div>
        </div>
      </div>
      
      <div id="basicdata">
        <div class="chip">
          <p class="info">Réserver une place</p>
          <div class="formulaire">
            <div>
              <label style="color:black"  for="Date_arrivee">Arrivée : </label>
              <input  type="datetime-local" id="Date_arrivee" name="Date_arrivée"></input>
            </div>
            <div>
              <label style="color:black" for="Date_depart">Départ : </label>
              <input type="datetime-local" id="Date_depart" name="Date_depart"></input>
            </div>
          </div>
          <div class="encad_btn"> 
            <button class="btn_ac"> Vérifier la disponibilité </button>
          </div>
        </div>
        <div class="chip">
          <p class="info">Mon historique de réservations</p>
          <p> tableau avec date, place, durée, montant, et lien facture</p>
        </div>
        <div class="chip">
          <p class="info">Mes informations & véhicules</p>
          <p>Email :</p>
          <p> Véhicule enregistrés :</p>
          <div class="encad_btn">
            <button class="btn_ac"> Ajouter un véhicule </button>
          </div>
        </div>
      </div>
    </main>

  );
}