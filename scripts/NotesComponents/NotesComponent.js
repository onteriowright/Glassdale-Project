// I display saved notes
const NotesComponent = note => {
  return `
    <section class="notes-template">
    <div>${note.suspect}</div>
    <div>${note.information}</div>
    <div>${new Date(note.date).toLocaleDateString("en-us")}</div>
    </section>  
  `;
};

export default NotesComponent;