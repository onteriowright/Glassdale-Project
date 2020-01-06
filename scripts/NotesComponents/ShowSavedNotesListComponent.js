import {
  useNotes,
  getNotes,
  deleteNote
} from "./NotesDataProviderComponent.js";
import ShowSavedNotesComponent from "./ShowSavedNotesComponent.js";

const ShowSavedNotesListComponent = () => {
  const eventHub = document.querySelector("#mainContainer");
  const contentTargetElementInnerHTML = document.querySelector(
    "#criminalContainer"
  );

  eventHub.addEventListener("noteHasBeenEdited", clickEvent => {
    const upDateNotes = useNotes();
    renderData(upDateNotes);
  });

  eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("editNote--")) {
      const [prefix, noteId] = clickEvent.target.id.split("--");
      const editNoteEvent = new CustomEvent("editBtnClicked", {
        detail: {
          noteId: noteId
        }
      });
      eventHub.dispatchEvent(editNoteEvent);
    }
  });

  eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("deleteNote--")) {
      const [prefix, id] = clickEvent.target.id.split("--");
      deleteNote(id).then(() => {
        const newNotes = useNotes();
        renderData(newNotes);
      });
    }
  });

  eventHub.addEventListener("noteCreated", clickEvent => {
    reRenderNotes();
  });

  eventHub.addEventListener("showNotesBtnWasClicked", () => {
    reRenderNotes();
  });

  const reRenderNotes = () => {
    getNotes().then(() => {
      const newNotes = useNotes();
      renderData(newNotes);
    });
  };

  const renderData = notesCollection => {
    contentTargetElementInnerHTML.innerHTML = `
    <h2 class="saved-notes-heading">Notes</h2>
    <section class="display-for-notes">
      ${notesCollection.map(note => ShowSavedNotesComponent(note)).join("")}
    </section>
  `;
  };
};

export default ShowSavedNotesListComponent;
