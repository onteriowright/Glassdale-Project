// Bring in saved notes Data
import { savedNotesData } from "./NotesDataProviderComponent.js";
// Bring in notes list component
import NotesListComponent from "./NotesListComponent.js";

// Created eventHub
const eventHub = document.querySelector("#mainContainer");
// Where i want notes to be displayed
const contentTargetElementInnerHTML = document.querySelector(
  "#notesFormContainer"
);

const NotesFormComponent = () => {
  // Add event listener to listen for click for save note
  eventHub.addEventListener("click", clickEvent => {
    // Specify what was clicked
    if (clickEvent.target.id === "save-note") {
      // Heard click on specified ID and created new notes object
      const newNote = {
        suspect: document.querySelector("#note-suspect").value,
        information: document.querySelector("#note-information").value,
        date: new Date(Date.now()).toLocaleString("en-us")
      };
      // Got saved notes Data and then display it
      savedNotesData(newNote).then(NotesListComponent);
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
      <h2>Add Note</h2>
      <div class="add-notes">
        <label>Suspect</label>
        <input type="text" id="note-suspect">
        <label>Information</label>
        <input type="text" id="note-information">
        <button id="save-note">Save Note</button>
        <button id="show-note">Show Note</button>
      </div>
      `;
  };
  renderData();
};

export default NotesFormComponent;
