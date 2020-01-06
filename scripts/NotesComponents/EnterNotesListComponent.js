import {
  saveNotes,
  useNotes,
  editNotes
} from "./NotesDataProviderComponent.js";
import EnterNotesComponents from "./EnterNotesComponent.js";

const eventHub = document.querySelector("#mainContainer");
const contentTargetElementInnerHTML = document.querySelector(
  "#notesFormContainer"
);

const EnterNotesListComponent = () => {
  eventHub.addEventListener("editBtnClicked", clickEvent => {
    const noteToBeEdited = clickEvent.detail.noteId;

    const useAllNotes = useNotes();

    const foundNote = useAllNotes.find(currentNoteObject => {
      return currentNoteObject.id === parseInt(noteToBeEdited, 10);
    });

    document.querySelector("#note-id").value = foundNote.id;
    document.querySelector("#note").value = foundNote.note;
    document.querySelector("#suspect-name").value = foundNote.suspect;
  });

  eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "save-note") {
      const hiddenValue = document.querySelector("#note-id").value;
      if (hiddenValue !== "") {
        const editedNote = {
          id: document.querySelector("#note-id").value,
          suspect: document.querySelector("#suspect-name").value,
          note: document.querySelector("#note").value,
          date: new Date(Date.now()).toLocaleString("en-us")
        };

        editNotes(editedNote).then(() => {
          const customEventListener = new CustomEvent("notHasBeenEdited");
          eventHub.dispatchEvent(customEventListener);
        });
      } else {
        const newNote = {
          suspect: document.querySelector("#suspect-name").value,
          note: document.querySelector("#note").value,
          date: new Date(Date.now()).toLocaleString("en-us")
        };
        saveNotes(newNote).then(() => {
          const customEventListener = new CustomEvent("noteCreated");
          eventHub.dispatchEvent(customEventListener);
        });
      }
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
