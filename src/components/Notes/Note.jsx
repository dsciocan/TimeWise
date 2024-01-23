const Note = ({ id, text, date, handleDeleteNote }) => {
  return (
    <div className="note">
      <span>{text}</span>
      <div className="note-footer">
        <small>{date}</small>
        <button onClick={() => handleDeleteNote(id)}>Del</button>
      </div>
    </div>
  );
};

export default Note;
