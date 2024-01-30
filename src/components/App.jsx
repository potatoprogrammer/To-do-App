import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [note, setNote] = useState([]);

  function addNote(inputText) {
    setNote((prevItems) => {
      return [
        ...prevItems,
        { title: inputText.title, text: inputText.content },
      ];
    });
  }

  function handleDelete(item) {
    const newArray = note.filter((element) => element !== item);
    setNote(newArray);
  }

  return (
    <div>
      <Header />
      <CreateArea addNote={addNote} />
      {note.map((todoItem, index) => (
        <Note
          key={index}
          id={index}
          item={todoItem}
          title={todoItem.title}
          content={todoItem.text}
          delete={handleDelete}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
