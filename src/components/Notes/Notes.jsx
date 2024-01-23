import { useState, useEffect, useId } from "react";
import NotesSearch from "./NotesSearch";
import NotesList from "./NotesList";
// styles
import "./Notes.css";

function Notes() {
  const [notes, setNotes] = useState([
    {
      id: useId(),
      text: "This is my first note!",
      date: "15/04/2021",
    },
    {
      id: useId(),
      text: "This is my second note!",
      date: "21/04/2021",
    },
    {
      id: useId(),
      text: "This is my third note!",
      date: "28/04/2021",
    },
    {
      id: useId(),
      text: "This is my new note!",
      date: "30/04/2021",
    },
  ]);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("react-notes-app-data"));

    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("react-notes-app-data", JSON.stringify(notes));
  }, [notes]);

  const addNote = (text, id) => {
    const date = new Date();
    const newNote = {
      id,
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <div>
      <h1>Notes Page</h1>
      <NotesSearch handleSearchNote={setSearchText} />
      <NotesList
        notes={notes.filter((note) => note.text.toLowerCase().includes(searchText))}
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}
      />
    </div>
  );
}

export default Notes;
