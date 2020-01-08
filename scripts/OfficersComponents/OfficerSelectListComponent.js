import { UseOfficers } from "./OfficerDataProvider.js";

const OfficerSelectComponent = () => {
  const eventHub = document.querySelector("#container");
  const officerHTML = document.querySelector("#officersContainer");
  const useOfficers = UseOfficers();

  eventHub.addEventListener("change", event => {
    if (event.target.id === "officerSelect") {
      const selectedOfficer = event.target.value;
      const officer = new CustomEvent("officerSelected", {
        detail: {
          selectedOfficer: selectedOfficer
        }
      });
      eventHub.dispatchEvent(officer);
    }
  });

  const renderData = officerCollection => {
    officerHTML.innerHTML += `
   <select class="dropdown" id="officerSelect">
    <option value="0">Filter by officer...</option>
    ${officerCollection.map(
      officer => `<option value="${officer}">${officer}</option>`
    )}
   </select>
  `;
  };
  renderData(useOfficers);
};

export default OfficerSelectComponent;
