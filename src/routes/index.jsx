import { A } from "@solidjs/router";

export default function Home() {
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
