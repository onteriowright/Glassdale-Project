let notesCollection = [];

//  Post saved notes Data and export it to be used by other components
export const saveNotesData = notes => {
  return fetch("http://localhost:8088/notes", {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(notes)
    // Update App State
  }).then(getNotesData);
};

// Get saved notes Data and export it to be used by other components
export const getNotesData = () => {
  return fetch("http://localhost:8088/notes")
    .then(response => response.json())
    .then(parsedData => {
      notesCollection = parsedData.slice();
    });
};

// Export Data to be used by other components
export const useNotesData = () => notesCollection;
