const ShowSavedNotesComponent = note => {
  return `
    <section class="notes-template">
      <div class="notes-info"><span>Suspect:</span> ${note.suspect}</div>
      <div class="notes-info"><span>Note:</span> ${note.note}</div>
      <div class="notes-info"><span>Date:</span> ${note.date}</div>
      <div class="delete-edit-btns">
        <button id="deleteNote--${note.id}" class="btn-note">Delete Note</button>
        <button id="editNote--${note.id}" class="btn-note">Edit Note</button>
      </div>
    </section>  
  `;
};

export default ShowSavedNotesComponent;
