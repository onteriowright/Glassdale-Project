import { UseCriminals } from "../CriminalsComponents/CriminalDataProvider.js";

const eventHub = document.querySelector("#mainContainer");
const alibiTarget = document.querySelector("#alibiContainer");

const DialogComponent = () => {
  eventHub.addEventListener("associateBtnWasClicked", event => {
    const criminals = UseCriminals();

    const foundCriminal = criminals.find(
      singleCriminal =>
        singleCriminal.id === parseInt(event.detail.criminalId, 10)
    );
    const alibisHTML = foundCriminal.known_associates
      .map(singleAssociate => {
        return `
          <div>
            ${singleAssociate.name}: ${singleAssociate.alibi}
          </div>
        `;
      })
      .join("");

    document.querySelector(".alibi-text").innerHTML = alibisHTML;
    document.querySelector(".alibis").showModal();
  });

  const renderData = () => {
    alibiTarget.innerHTML = `
      <dialog class="alibis">
        <div class="alibi-text"></div>
        <button id="closeDialog">Close Dialog</button>
      </dialog>  
    `;
  };
  renderData();
};
export default DialogComponent;
