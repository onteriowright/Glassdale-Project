import { UseConvictions } from "./ConvictionsDataProvider.js";

const eventHub = document.querySelector("#mainContainer");
const contentTargetHTML = document.querySelector("#convictionsContainer");

const ConvictionSelectComponent = () => {
  const useConvictionsData = UseConvictions();

  eventHub.addEventListener("change", changeEvent => {
    if (changeEvent.target.classList.contains("dropdown")) {
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
    <option value="0">Please select a crime...</option>
     ${convictionsCollection.map(
       conviction => `<option>${conviction}</option>`
     )}
   </select>
    `;
  };
  renderData(useConvictionsData.sort());
};

export default ConvictionSelectComponent;
