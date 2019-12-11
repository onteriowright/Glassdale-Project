// Bring in saved notes Data
import { saveNotesData } from "./NotesDataProviderComponent.js";
// Bring in show notes list component
import ShowSavedNotesListComponent from "./ShowSavedNotesListComponent.js";

// Created eventHub
const eventHub = document.querySelector("#mainContainer");
// Where i want notes to be displayed
const contentTargetElementInnerHTML = document.querySelector(
  "#notesFormContainer"
);

const EnterNotesListComponent = () => {
  // Add event listener to listen for click for save note
  eventHub.addEventListener("click", clickEvent => {
    // Specify what was clicked
    if (clickEvent.target.id === "save-note") {
      // Heard click on specified ID and created new notes object
      const newNote = {
        suspect: document.querySelector("#suspect-name").value,
        note: document.querySelector("#note").value,
        date: Date.now()
      };
      // Got saved notes Data and then display it
      saveNotesData(newNote).then(ShowSavedNotesListComponent);
    }
  });
  // Add event listener to listen for click for show note
  eventHub.addEventListener("click", clickEvent => {
    // Specify what was clicked
    if (clickEvent.target.id === "show-note") {
      // Heard click on specified ID then created custom event listener "showNotesBtnWasClicked"
      const message = new CustomEvent("showNotesBtnWasClicked");
      eventHub.dispatchEvent(message);
    }
  });

  // Display Data on the DOM
  const renderData = () => {
    contentTargetElementInnerHTML.innerHTML = `
      <h2>Add Note:</h2>
      <div class="add-notes">
        <label><h3>Suspect Name</h3></label>
        <input type="text" id="suspect-name">
        <label><h3>Note</h3></label>
        <input type="text" id="note">
        <button id="save-note" class="btn">Save Note</button>
        <button id="show-note" class="btn">Show Notes</button>
      </div>
      `;
  };
  renderData();
};

export default EnterNotesListComponent;
