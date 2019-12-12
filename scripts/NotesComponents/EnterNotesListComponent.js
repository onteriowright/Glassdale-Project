import { saveNotesData } from "./NotesDataProviderComponent.js";
import EnterNotesComponents from "./EnterNotesComponent.js";

const eventHub = document.querySelector("#mainContainer");
const contentTargetElementInnerHTML = document.querySelector(
  "#notesFormContainer"
);

const EnterNotesListComponent = () => {
  eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "save-note") {
      const newNote = {
        suspect: document.querySelector("#suspect-name").value,
        note: document.querySelector("#note").value,
        date: new Date(Date.now()).toLocaleString("en-us")
      };
      saveNotesData(newNote);
    }
  });
  eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "show-note") {
      const customEventListener = new CustomEvent("showNotesBtnWasClicked");
      eventHub.dispatchEvent(customEventListener);
    }
  });

  const renderData = () => {
    contentTargetElementInnerHTML.innerHTML = `
     <section class="input">
        ${EnterNotesComponents()}
     </section>
      `;
  };
  renderData();
};

export default EnterNotesListComponent;
