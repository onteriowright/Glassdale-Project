// I display saved notes
const ShowSavedNotesComponent = note => {
  return `
    <section class="notes-template">
      <div>${note.suspect}</div>
      <div>${note.note}</div>
      <div>${note.date}</div>
    </section>  
  `;
};

export default ShowSavedNotesComponent;
