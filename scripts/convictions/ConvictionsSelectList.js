import { UseConvictions } from "./ConvictionsDataProvider.js";

const ConvictionSelect = () => {
  const contentHTML = document.querySelector("#convictionsContainer");
  const convictions = UseConvictions();

  const renderData = convictionsCollection => {
    contentHTML.innerHTML += `
   <select class="dropdown" id="crimeSelect">
   <option value="0">Please select a crime...</option>
    ${convictionsCollection.map(
      conviction => `<option class="convictionsDisplay">${conviction}</option>`
    )};
   </select>
    `;
  };
  renderData(convictions.sort());
};

export default ConvictionSelect;
