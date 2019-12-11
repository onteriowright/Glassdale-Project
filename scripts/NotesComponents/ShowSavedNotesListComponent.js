// Bring in the Data
import { UseNotesData, getNotesData } from "./NotesDataProviderComponent.js";
// Bring in the Notes Component
import ShowSavedNotesComponent from "./ShowSavedNotesComponent.js";

// Create EventHub
const eventHub = document.querySelector("#mainContainer");
// Where i want the Data to be displayed
const contentTargetElementInnerHTML = document.querySelector("#notesContainer");

const ShowSavedNotesListComponent = () => {
  // Create an eventListener to listen for "showNotesBtnWasClicked"
  eventHub.addEventListener("showNotesBtnWasClicked", () => {
    // Heard "showNotesBtnWasClicked" so go get the Data
    getNotesData().then(() => {
      // Now use the Data
      const useNotes = UseNotesData();
      // Render the Data`
      renderData(useNotes);
    });
  });
};

// This function renders the Data to the DOM
const renderData = notesCollection => {
  contentTargetElementInnerHTML.innerHTML = `
    <h2>Notes:</h2>
    <section class="display-for-notes">${notesCollection
      .map(note => ShowSavedNotesComponent(note))
      .join("")}</section>
  `;
};

export default ShowSavedNotesListComponent;
