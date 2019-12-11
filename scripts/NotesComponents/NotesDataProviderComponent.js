let notesCollection = [];

//  Get save notes Data and export it to be used by other components
export const savedNotesData = notes => {
  return fetch("http://localhost:8088/notes", {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(notes)
  }).then(getNotesData);
};

// Get notes Data and export it to be used by other components
export const getNotesData = () => {
  return fetch("http://localhost:8088/notes")
    .then(response => response.json())
    .then(parsedData => {
      notesCollection = parsedData.slice();
    });
};

// Export Data to be used by other components
export const UseNotesData = () => notesCollection;
