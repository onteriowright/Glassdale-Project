import { UseCriminals, GetCriminals } from "./CriminalDataProvider.js";
import CriminalComponent from "./CriminalComponent.js";

const CriminalListComponent = () => {
  const eventHub = document.querySelector("#container");
  const criminalTargetHTML = document.querySelector("#criminalContainer");

  const criminalList = UseCriminals();

  eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "refresh") {
      renderData(criminalList);
    }
  });

  eventHub.addEventListener("filterBtnClicked", clickEvent => {
    const crimeName = clickEvent.detail.crimeName;
    const officerName = clickEvent.detail.officerName;

    if (crimeName === "0") {
      GetCriminals().then(() => {
        const useCriminals = UseCriminals();
        renderData(useCriminals);
      });
    }

    const MatchingCriminals = criminalList
      .filter(currentCriminal => {
        return currentCriminal.conviction === crimeName;
      })
      .filter(currentCriminal => {
        return currentCriminal.arrestingOfficer === officerName;
      });
    renderData(MatchingCriminals);
  });

  // eventHub.addEventListener("officerSelected", event => {
  //   const selectedOfficer = event.detail.selectedOfficer;
  //   if (selectedOfficer === "0") {
  //     GetCriminals().then(() => {
  //       const useCriminals = UseCriminals();
  //       renderData(useCriminals);
  //     });
  //   }

  //   const matchingOfficers = criminalList.filter(officer => {
  //     return officer.arrestingOfficer === selectedOfficer;
  //   });
  //   renderData(matchingOfficers);
  // });

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
