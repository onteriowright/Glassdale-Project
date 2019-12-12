import { UseCriminals } from "./CriminalDataProvider.js";
import CriminalComponent from "./CriminalComponent.js";

const eventHub = document.querySelector("#mainContainer");
const criminalTargetHTML = document.querySelector("#criminalContainer");

const CriminalListComponent = () => {
  const criminalList = UseCriminals();

  eventHub.addEventListener("selectedConviction", event => {
    const crimeName = event.detail.conviction;

    const MatchingCriminals = criminalList.filter(currentCriminal => {
      if (currentCriminal.conviction === crimeName) {
        return currentCriminal;
      }
    });
    renderData(MatchingCriminals);
  });

  eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("associates--")) {
      const [prefix, criminalId] = clickEvent.target.id.split("--");
      const message = new CustomEvent("associateBtnWasClicked", {
        detail: {
          criminalId: criminalId
        }
      });
      eventHub.dispatchEvent(message);
    }
  });

  const renderData = criminals => {
    criminalTargetHTML.innerHTML = `
    <section class="criminal-content">
      ${criminals
        .map(criminal => CriminalComponent(criminal))
        .sort()
        .join("")}
    </section>  
      `;
  };
  renderData(criminalList);
};
export default CriminalListComponent;
