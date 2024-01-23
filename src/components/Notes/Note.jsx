import { FaTrashCan } from "react-icons/fa6";


const Note = ({ id, text, date, handleDeleteNote }) => {
  return (
    <div className="note">
      <span>{text}</span>
      <div className="note-footer">
        <small>{date}</small>
        <button onClick={() => handleDeleteNote(id)}><FaTrashCan /></button>
      </div>
    </div>
  );
};

export default Note;
