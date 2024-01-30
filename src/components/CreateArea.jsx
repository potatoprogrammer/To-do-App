import React, { useState } from "react";

function CreateArea(props) {
  const [inputText, setInputText] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setInputText({ ...inputText, [name]: value });
  }

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault(); // This will stop the page refresh
        }}
      >
        <input
          onChange={handleChange}
          type="text"
          name="title"
          placeholder="Note Title"
          value={inputText.title}
        />
        <textarea
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          value={inputText.content}
          rows="3"
        />
        <button
          onClick={() => {
            if (inputText.title != "" && inputText.content != "") {
              props.addNote(inputText);
              setInputText({ title: "", content: "" });
            }
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
