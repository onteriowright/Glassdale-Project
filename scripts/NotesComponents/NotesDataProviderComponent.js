let notesCollection = [];

export const saveNotes = notes => {
  return fetch("http://localhost:8088/notes", {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(notes)
  }).then(getNotes);
};

export const editNotes = noteObject => {
  return fetch(`http://localhost:8088/notes/${noteObject.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(noteObject)
  }).then(getNotes);
};

export const deleteNote = noteId => {
  return fetch(`http://localhost:8088/notes/${noteId}`, {
    method: "DELETE"
  }).then(getNotes);
};

export const getNotes = () => {
  return fetch("http://localhost:8088/notes")
    .then(response => response.json())
    .then(parsedData => {
      notesCollection = parsedData.slice();
    });
};

export const useNotes = () => notesCollection.slice();
