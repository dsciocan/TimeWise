import { useState, useId } from "react";

const AddNote = ({ handleAddNote }) => {
  // Initial Id
  const id = useId();

  // Create a unique ID from the initial Id
  const [index, setIndex] = useState(0);

  const [noteText, setNoteText] = useState("");
  const characterLimit = 200;

  const handleChange = (event) => {
    if (characterLimit - event.target.value.length >= 0) {
      setNoteText(event.target.value);
    }
  };

  const handleSaveClick = () => {
    if (noteText.trim().length > 0) {
      handleAddNote(noteText, id + index);
      setNoteText("");
      // A unique ID in each save event
      setIndex(index + 1);
    }
  };

  return (
    <div className="note new">
      <textarea
        id={id + index}
        rows="8"
        cols="10"
        placeholder="Type to add a note..."
        value={noteText}
        onChange={handleChange}></textarea>
      <div className="note-footer">
        <small>{characterLimit - noteText.length} Remaining</small>
        <button className="save" onClick={handleSaveClick}>
          Save
        </button>
      </div>
    </div>
  );
};

export default AddNote;
