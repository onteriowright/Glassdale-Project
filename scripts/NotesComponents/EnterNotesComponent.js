const EnterNotesComponents = () => {
  return `
  <h2>Add Note:</h2>
  <div class="add-notes">
    <label>
      <h3>Suspect Name</h3>
    </label>
    <input type="text" id="suspect-name">
    <label>
      <h3>Note</h3>
    </label>
    <textarea rows="4" cols="30" type="text" id="note"></textarea>
    <div class="btn-placement">
      <button id="save-note" class="btn">Save Note</button>
      <button id="show-note" class="btn">Show Notes</button>
    </div>
  </div>
  `;
};

export default EnterNotesComponents;
