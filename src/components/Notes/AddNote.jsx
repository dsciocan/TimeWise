import { useState, useId } from "react";

const AddNote = ({ handleAddNote }) => {
  // Initial Id
  const id = useId();

  // Create a unique ID from the initial Id
  const [index, setIndex] = useState(0);

  const [noteText, setNoteText] = useState("");
  const characterLimit = 200;




};

export default AddNote;