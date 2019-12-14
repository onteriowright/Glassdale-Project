import {
  useNotes,
  getNotes,
  deleteNote
} from "./NotesDataProviderComponent.js";
import ShowSavedNotesComponent from "./ShowSavedNotesComponent.js";

const eventHub = document.querySelector("#mainContainer");
const contentTargetElementInnerHTML = document.querySelector(
  "#criminalContainer"
);

const ShowSavedNotesListComponent = () => {
  const reRenderNotes = () => {
    getNotes().then(() => {
      const newNotes = useNotes();
      renderData(newNotes);
    });
  };

  eventHub.addEventListener("showNotesBtnWasClicked", () => {
    reRenderNotes();
  });
};

eventHub.addEventListener("click", clickEvent => {
  if (clickEvent.target.id.startsWith("deleteNote--")) {
    const [prefix, id] = clickEvent.target.id.split("--");
    deleteNote(id).then(() => {
      const newNotes = useNotes();
      renderData(newNotes);
    });
  }
});

const renderData = notesCollection => {
  contentTargetElementInnerHTML.innerHTML = `
    <h2 class="saved-notes-heading">Notes</h2>
    <section class="display-for-notes">
      ${notesCollection.map(note => ShowSavedNotesComponent(note)).join("")}
    </section>
  `;
};

export default ShowSavedNotesListComponent;
