import { useState, useId } from "react";

const AddNote = ({ handleAddNote }) => {
  // Initial Id
  const id = useId();

  // Create a unique Id from the initial Id
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
      // A unique Id in each save event
      setIndex(index + 1);
    }
  };




};

export default AddNote;