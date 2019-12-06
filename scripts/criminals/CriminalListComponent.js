import { UseCriminals } from "./CriminalDataProvider.js";
import CriminalComponent from "./CriminalComponent.js";

console.log("I am The Criminal List, I Render the Data to the DOM");

const eventHub = document.querySelector("#mainContainer");
const convicitionsTargetHTML = document.querySelector("#criminalContainer");

const CriminalListComponent = () => {
  const crimianlList = UseCriminals();

  eventHub.addEventListener("crimeSelected", event => {
    const crimeName = event.detail.crime;

    const MatchingCriminals = crimianlList.filter(currentCriminal => {
      if (currentCriminal.conviction === crimeName) {
        return currentCriminal;
      }
    });
    renderData(MatchingCriminals);
  });

  const renderData = criminals => {
    convicitionsTargetHTML.innerHTML = `
    <section class="criminal-content">
      ${criminals.map(criminal => CriminalComponent(criminal)).join("")}
    </section>  
      `;
  };
};
export default CriminalListComponent;
