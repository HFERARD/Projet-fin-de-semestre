import { A } from "@solidjs/router";
import { Accessibility, Plug, SquareParking } from "lucide-solid"

export default function Map() {
  var free = [true, true, true, true, true,true, true, true, true, true,
    true, true, true, true, true, false, true, true, true, true,
    true, true, true, true, true, true, true, true, true, false]
  return (
    <main>
      <h1>Carte du parking</h1>
      <p>Vue en direct des places de parking</p>
      <div id="map">
        <div class={`space normal ${free[0] ? "free" : "occupied"}`}><SquareParking size={20}/><br/>01</div>
        <div class={`space normal ${free[1] ? "free" : "occupied"}`}><SquareParking size={20}/>02</div>
        <div class={`space normal ${free[2] ? "free" : "occupied"}`}><SquareParking size={20}/>03</div>
        <div class={`space normal ${free[3] ? "free" : "occupied"}`}><SquareParking size={20}/>04</div>
        <div class={`space normal ${free[4] ? "free" : "occupied"}`}><SquareParking size={20}/>05</div>
        <div class={`space normal ${free[5] ? "free" : "occupied"}`}><SquareParking size={20}/>06</div>
        <div class={`space normal ${free[6] ? "free" : "occupied"}`}><SquareParking size={20}/>07</div>
        <div class={`space normal ${free[7] ? "free" : "occupied"}`}><SquareParking size={20}/>08</div>
        <div class={`space normal ${free[8] ? "free" : "occupied"}`}><SquareParking size={20}/>09</div>
        <div class={`space normal ${free[9] ? "free" : "occupied"}`}><SquareParking size={20}/>10</div>
        <div class={`space normal ${free[10] ? "free" : "occupied"}`}><SquareParking size={20}/>11</div>
        <div class={`space normal ${free[11] ? "free" : "occupied"}`}><SquareParking size={20}/>12</div>
        <div class={`space elec ${free[12] ? "free" : "occupied"}`}><Plug size={20}/>13</div>
        <div class={`space elec ${free[13] ? "free" : "occupied"}`}><Plug size={20}/>14</div>
        <div class={`space elec ${free[14] ? "free" : "occupied"}`}><Plug size={20}/>15</div>
        <div class={`space elec ${free[15] ? "free" : "occupied"}`}><Plug size={20}/>16</div>
        <div class={`space elec ${free[16] ? "free" : "occupied"}`}><Plug size={20}/>17</div>
        <div class={`space normal ${free[17] ? "free" : "occupied"}`}><SquareParking size={20}/>18</div>
        <div class={`space normal ${free[18] ? "free" : "occupied"}`}><SquareParking size={20}/>19</div>
        <div class={`space normal ${free[19] ? "free" : "occupied"}`}><SquareParking size={20}/>20</div>
        <div class={`space normal ${free[20] ? "free" : "occupied"}`}><SquareParking size={20}/>21</div>
        <div class={`space normal ${free[21] ? "free" : "occupied"}`}><SquareParking size={20}/>22</div>
        <div class={`space normal ${free[22] ? "free" : "occupied"}`}><SquareParking size={20}/>23</div>
        <div class={`space normal ${free[23] ? "free" : "occupied"}`}><SquareParking size={20}/>24</div>
        <div class={`space normal ${free[24] ? "free" : "occupied"}`}><SquareParking size={20}/>25</div>
        <div class={`space normal ${free[25] ? "free" : "occupied"}`}><SquareParking size={20}/>26</div>
        <div class={`space pmr ${free[26] ? "free" : "occupied"}`}><Accessibility size={20}/>27</div>
        <div class={`space pmr ${free[27] ? "free" : "occupied"}`}><Accessibility size={20}/>28</div>
        <div class={`space pmr ${free[28] ? "free" : "occupied"}`}><Accessibility size={20}/>29</div>
        <div class={`space pmr ${free[29] ? "free" : "occupied"}`}><Accessibility size={20}/>30</div>
      </div>
      <h2>Total places libres : 28</h2>
      <div class="legend green"><SquareParking size={25}/>21 places normales</div>
      <div class="legend blue"><Plug size={25}/>4 places pour véhicules électriques</div>
      <div class="legend pink"><Accessibility size={25}/>3 places PMR</div>
    </main>
  );
}