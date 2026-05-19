import { createSignal, Show } from "solid-js";
import { Accessibility, Plug, SquareParking } from "lucide-solid"

export default function Map() {
  const places = [
    { id: "01", free: true, type: "normal" },
    { id: "02", free: true, type: "normal" },
    { id: "03", free: true, type: "normal" },
    { id: "04", free: true, type: "normal" },
    { id: "05", free: true, type: "normal" },
    { id: "06", free: true, type: "normal" },
    { id: "07", free: true, type: "normal" },
    { id: "08", free: true, type: "normal" },
    { id: "09", free: true, type: "normal" },
    { id: "10", free: true, type: "normal" },
    { id: "11", free: true, type: "normal" },
    { id: "12", free: true, type: "elec" },
    { id: "13", free: true, type: "elec" },
    { id: "14", free: true, type: "elec" },
    { id: "15", free: true, type: "elec" },
    { id: "16", free: false, type: "elec", car:"AB-123-CD", client: "127"},
    { id: "17", free: true, type: "normal" },
    { id: "18", free: true, type: "normal" },
    { id: "19", free: true, type: "normal" },
    { id: "20", free: true, type: "normal" },
    { id: "21", free: true, type: "normal" },
    { id: "22", free: true, type: "normal" },
    { id: "23", free: true, type: "normal" },
    { id: "24", free: true, type: "normal" },
    { id: "25", free: true, type: "normal" },
    { id: "26", free: true, type: "normal" },
    { id: "27", free: true, type: "pmr" },
    { id: "28", free: true, type: "pmr" },
    { id: "29", free: true, type: "pmr" },
    { id: "30", free: false, type: "pmr", car:"EF-123-GH", client: "57" },
  ];
  // Pour changer d'icône :
  const getIcon = (type) => {
  switch (type) {
    case "elec":
      return <Plug size={20} />;

    case "pmr":
      return <Accessibility size={20} />;

    default:
      return <SquareParking size={20} />;
  }
};
  const [selectedPlace, setSelectedPlace] = createSignal();
  return (
    <main>
      <h1>Carte du parking</h1>
      <p>Vue en direct des places de parking</p>
      <div id="map">
        {places.map((place) => (<div class={`space ${place.type} ${place.free ? "free" : "occupied"}`} onClick={() => {if (!place.free) {setSelectedPlace(place)}}}>{getIcon(place.type)}<br/>{place.id}</div>))}
      {/* Popup */}
      <Show when={selectedPlace()}>
        <div class="popup-overlay">
          <div class="popup">
            <h2 class="font-mono">Place {selectedPlace()?.id}</h2>
            <div class="popup_line"><p>Voiture </p><p class="font-mono text-white">{selectedPlace()?.car}</p></div>
            <div class="popup_line"><p>N° client </p><p class="font-mono text-white">{selectedPlace()?.client}</p></div>
            <button onClick={() => setSelectedPlace(null)}>
              Fermer
            </button>
          </div>
        </div>
      </Show>
      </div>
      <h2>Total places libres : 28</h2>
      <div class="legend green"><SquareParking size={25}/>21 places normales</div>
      <div class="legend blue"><Plug size={25}/>4 places pour véhicules électriques</div>
      <div class="legend pink"><Accessibility size={25}/>3 places PMR</div>
    </main>
  );
}