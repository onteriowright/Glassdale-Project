import { UseCriminals } from "../CriminalsComponents/CriminalDataProvider.js";
import { AlibiDialogComponent } from "./AlibiDialogComponent.js";

const eventHub = document.querySelector("#container");
const alibiTarget = document.querySelector("#alibiContainer");

const AlibiDialogListComponent = () => {
  eventHub.addEventListener("associateBtnWasClicked", event => {
    const criminals = UseCriminals();

    const foundCriminal = criminals.find(
      singleCriminal => singleCriminal.id === parseInt(event.detail.criminalId)
    );
    const alibisHTML = foundCriminal.known_associates
      .map(singleAssociate => {
        return `
              <div class="alibis-info">
                  <strong>${singleAssociate.name}:</strong> ${singleAssociate.alibi}
              </div>
          `;
      })
      .join("");

    document.querySelector("#alibi-text").innerHTML = alibisHTML;
    document.querySelector("#alibis").showModal();
  });

  eventHub.addEventListener("click", e => {
    if (e.target.id === "closeBtn") {
      const dialogElement = e.target.parentNode;
      dialogElement.close();
    }
  });

  const renderData = () => {
    alibiTarget.innerHTML = `
      <section class="main-alibi">
        ${AlibiDialogComponent()}
      </section>
      `;
  };
  renderData();
};
export default AlibiDialogListComponent;
