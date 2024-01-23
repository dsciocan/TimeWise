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




};

export default AddNote;