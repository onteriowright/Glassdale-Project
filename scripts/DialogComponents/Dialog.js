import { UseCriminals } from "../CriminalsComponents/CriminalDataProvider.js";
import { DialogComponent } from "./DialogComponent.js";

const eventHub = document.querySelector("#mainContainer");
const alibiTarget = document.querySelector("#alibiContainer");

const DialogListComponent = () => {
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
        ${DialogComponent()}
      `;
  };
  renderData();
};
export default DialogListComponent;
