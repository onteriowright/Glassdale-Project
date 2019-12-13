const ShowSavedNotesComponent = note => {
  return `
    <section class="notes-template">
      <div class="notes-info"><h3>Suspect:</h3> ${note.suspect}</div>
      <div class="notes-info"><h3>Note:</h3> ${note.note}</div>
      <div class="notes-info"><h3>Date:</h3> ${note.date}</div>
    </section>  
  `;
};

export default ShowSavedNotesComponent;
