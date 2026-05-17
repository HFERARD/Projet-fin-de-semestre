import { A } from "@solidjs/router";

export default function Home() {
  return (
    <main>
      <h1>Bienvenue sur le site du Parking des Mines</h1>
      <p>Veuillez vous identifier ou créer votre compte client</p>
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

export function login() {
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
    </main>
  );
}
