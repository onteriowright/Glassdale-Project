import { useNotesData, getNotesData } from "./NotesDataProviderComponent.js";
import ShowSavedNotesComponent from "./ShowSavedNotesComponent.js";

const eventHub = document.querySelector("#mainContainer");
const contentTargetElementInnerHTML = document.querySelector(
  "#criminalContainer"
);

const ShowSavedNotesListComponent = () => {
  eventHub.addEventListener("showNotesBtnWasClicked", () => {
    getNotesData().then(() => {
      const newNotes = useNotesData();
      renderData(newNotes);
    });
  });
};

const renderData = notesCollection => {
  contentTargetElementInnerHTML.innerHTML = `
    <h2 class="saved-notes-heading">Notes:</h2>
    <section class="display-for-notes">
      ${notesCollection.map(note => ShowSavedNotesComponent(note)).join("")}
    </section>
  `;
};

export default ShowSavedNotesListComponent;
