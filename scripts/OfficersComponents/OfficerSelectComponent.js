import { UseOfficers } from "./OfficerDataProvider.js";

const OfficerSelectComponent = () => {
  const officerHTML = document.querySelector("#officersContainer");
  const useOfficers = UseOfficers();

  const renderData = officerCollection => {
    officerHTML.innerHTML += `
   <select class="dropdown" id="officerSelect">
    <option value="0">Please select an Officer...</option>
    ${officerCollection.map(
      officer => `<option class="officersDisplay">${officer}</option>`
    )}
   </select>
  `;
  };
  renderData(useOfficers.sort());
};

export default OfficerSelectComponent;
