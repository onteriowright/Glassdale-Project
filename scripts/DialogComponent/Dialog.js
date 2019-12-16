import { UseCriminals } from "../CriminalsComponents/CriminalDataProvider.js";

const eventHub = document.querySelector("#mainContainer");
const alibiTarget = document.querySelector("#alibiContainer");

const DialogComponent = () => {
  const allCloseBtns = document.querySelectorAll("#closeBtn");

  allCloseBtns.forEach(btn => {
    btn.addEventListener("click", e => {
      const dialogElement = e.target.parentNode;
      dialogElement.close();
    });
  });

  const allShowAssociatesBtns = document.querySelectorAll(
    "button[id^='associates--']"
  );

  allShowAssociatesBtns.forEach(btn => {
    btn.addEventListener("click", e => {
      const dialogElement = document.querySelector(`#${e.target.id} + dialog`);
      dialogElement.showModal();
    });
  });

  //   eventHub.addEventListener("associateBtnWasClicked", event => {
  //     const criminals = UseCriminals();

  //     const foundCriminal = criminals.find(
  //       singleCriminal => singleCriminal.id === parseInt(event.detail.criminalId)
  //     );
  //     const alibisHTML = foundCriminal.known_associates
  //       .map(singleAssociate => {
  //         return `
  //           <div class="associates">
  //             <strong>${singleAssociate.name}: </strong>${singleAssociate.alibi}
  //           </div>
  //         `;
  //       })
  //       .join("");

  //     document.querySelector(".alibi-text").innerHTML = alibisHTML;
  //     document.querySelector(".alibis").showModal();
  //   });

  //   const renderData = () => {
  //     alibiTarget.innerHTML = `
  //       <dialog class="alibis">
  //         <div class="alibi-text"></div>
  //         <button id="closeDialog" class="dialog-close-btn">Close Dialog</button>
  //       </dialog>
  //     `;
  //   };
  //   renderData();
};
export default DialogComponent;
