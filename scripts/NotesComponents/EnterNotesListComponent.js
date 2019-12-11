// Bring in save notes Data which is for posting what the user entered
import { saveNotesData } from "./NotesDataProviderComponent.js";
// I display the Notes Component
import EnterNotesComponents from "./EnterNotesComponent.js";
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
        date: new Date(Date.now()).toLocaleString("en-us")
      };
      // Change API state and application state
      saveNotesData(newNote);
    }
  });
  // Add event listener to listen for click for show note
  eventHub.addEventListener("click", clickEvent => {
    // Specify what was clicked
    if (clickEvent.target.id === "show-note") {
      // Heard click on specified ID then created custom event listener "showNotesBtnWasClicked"
      const customEventListener = new CustomEvent("showNotesBtnWasClicked");
      eventHub.dispatchEvent(customEventListener);
    }
  });

  // Display Data on the DOM
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
