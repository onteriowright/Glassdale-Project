import { UseConvictions } from "./ConvictionsDataProvider.js";

const eventHub = document.querySelector("#mainContainer");
const contentTargetHTML = document.querySelector("#convictionsContainer");

const ConvictionSelectListComponent = () => {
  const useConvictionsData = UseConvictions();

  eventHub.addEventListener("change", changeEvent => {
    if (changeEvent.target.id === "crimeSelect") {
      const selectedConviction = changeEvent.target.value;

      const customEventListener = new CustomEvent("selectedConviction", {
        detail: {
          conviction: selectedConviction
        }
      });
      eventHub.dispatchEvent(customEventListener);
    }
  });

  const renderData = convictionsCollection => {
    contentTargetHTML.innerHTML = `
   <select class="dropdown" id="crimeSelect">
    <option value="0">Filter by crime...</option>
     ${convictionsCollection.map(
       conviction => `<option value="${conviction}">${conviction}</option>`
     )}
   </select>
    `;
  };
  renderData(useConvictionsData.sort());
};

export default ConvictionSelectListComponent;
