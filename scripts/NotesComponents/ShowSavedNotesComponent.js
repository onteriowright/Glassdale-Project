const ShowSavedNotesComponent = note => {
  return `
    <section class="notes-template">
      <div class="notes-info">Suspect: ${note.suspect}</div>
      <div class="notes-info">Note: ${note.note}</div>
      <div class="notes-info">Date: ${note.date}</div>
    </section>  
  `;
};

export default ShowSavedNotesComponent;
