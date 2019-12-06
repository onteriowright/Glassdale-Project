import { UseCriminals } from "./CriminalDataProvider.js";
import CriminalComponent from "./CriminalComponent.js";

console.log("I am The Criminal List, I Render the Data to the DOM");

const CriminalListComponent = () => {
  const convicitionsHTML = document.querySelector("#criminalContainer");
  const useCriminals = UseCriminals();

  convicitionsHTML.innerHTML += `
    <section class="criminal-content">
      ${useCriminals
        .map(criminal => CriminalComponent(criminal))
        .sort()
        .join("")}
    </section>
  `;
};

export default CriminalListComponent;
