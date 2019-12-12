let notesCollection = [];

export const saveNotesData = notes => {
  return fetch("http://localhost:8088/notes", {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(notes)
  }).then(getNotesData);
};

export const getNotesData = () => {
  return fetch("http://localhost:8088/notes")
    .then(response => response.json())
    .then(parsedData => {
      notesCollection = parsedData.slice();
    });
};

export const useNotesData = () => notesCollection;
