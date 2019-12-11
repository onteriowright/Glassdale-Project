// Bring in the function to use NotesData and the function to get NotesData
import { useNotesData, getNotesData } from "./NotesDataProviderComponent.js";
// Bring in the showSavedNotes Component
import ShowSavedNotesComponent from "./ShowSavedNotesComponent.js";

// Create EventHub
const eventHub = document.querySelector("#mainContainer");
// Where i want the Data to be displayed
const contentTargetElementInnerHTML = document.querySelector(
  "#saveNotesContainer"
);

const ShowSavedNotesListComponent = () => {
  // Create an eventListener to listen for "showNotesBtnWasClicked"
  eventHub.addEventListener("showNotesBtnWasClicked", () => {
    // Heard "showNotesBtnWasClicked" so go get the new Data to update app state
    getNotesData().then(() => {
      // Now use the new Data
      const newNotes = useNotesData();
      // Render the new Data`
      renderData(newNotes);
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
