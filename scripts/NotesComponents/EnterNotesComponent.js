const EnterNotesComponents = () => {
  return `
  <details>
    <summary class="summary">Add Notes</summary>
    <input id="note-id" type="hidden">
    <div class="add-notes">
      <label>
        <h3>Suspect Name:</h3>
      </label>
      <input type="text" id="suspect-name">
      <label>
        <h3>Note:</h3>
      </label>
      <textarea rows="4" cols="30" type="text" id="note"></textarea>
      <div class="btn-placement">
        <button id="save-note" class="btn">Save Note</button>
        <button id="show-note" class="btn">Show Notes</button>
      </div>
    </div>
  </details>
  `;
};

export default EnterNotesComponents;
