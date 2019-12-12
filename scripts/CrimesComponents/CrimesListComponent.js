import { UseCrimes } from "./CrimesDataProvider.js";
import CrimesComponent from "./CrimesComponent.js";

const CrimesListComponent = () => {
  const crimesHTML = document.querySelector("#main");
  const useCrimes = UseCrimes();

  crimesHTML.innerHTML += `
    <section class="crime-content">
      ${useCrimes
        .map(crime => CrimesComponent(crime))
        .sort()
        .join("")}
    </section>
  `;
};

export default CrimesListComponent;
