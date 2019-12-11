// I display saved notes
const ShowSavedNotesComponent = note => {
  return `
    <section class="notes-template">
      <div class="notes-info">${note.suspect}</div>
      <div class="notes-info">${note.note}</div>
      <div class="notes-info">${note.date}</div>
    </section>  
  `;
};

export default ShowSavedNotesComponent;
