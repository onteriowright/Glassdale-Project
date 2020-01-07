import { UseConvictions } from "./ConvictionsDataProvider.js";
import { ConvictionsComponent } from "./ConvictionsComponent.js";

const eventHub = document.querySelector("#mainContainer");
const contentTargetHTML = document.querySelector("#convictionsContainer");

const ConvictionSelectListComponent = () => {
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
    <section>
    ${ConvictionsComponent(convictionsCollection)}
    </section>
    `;
  };
  const useConvictionsData = UseConvictions();
  renderData(useConvictionsData);
};

export default ConvictionSelectListComponent;
