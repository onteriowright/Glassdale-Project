import { FilterComponent } from "./FilterComponent.js";

export const FilterBtnListComponent = () => {
  const eventHub = document.querySelector("#container");
  const targetElement = document.querySelector("#filterContainer");

  let crimeName = "";
  let officerName = "";

  eventHub.addEventListener("selectedConviction", clickEvent => {
    crimeName = clickEvent.detail.conviction;
  });

  eventHub.addEventListener("officerSelected", clickEvent => {
    officerName = clickEvent.detail.selectedOfficer;
  });

  eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "filter-btn") {
      const message = new CustomEvent("filterBtnClicked", {
        detail: {
          crimeName: crimeName,
          officerName: officerName
        }
      });
      eventHub.dispatchEvent(message);
    }
  });
  const renderData = () => {
    targetElement.innerHTML = `
      ${FilterComponent()}
    `;
  };
  renderData();
};
