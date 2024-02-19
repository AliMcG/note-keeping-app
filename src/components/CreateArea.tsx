import React, { useState } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";
import { useSession } from "next-auth/react";

const TestCreateArea = () => {
  const [showInput, setShowInput] = useState(false);
  const { data: sessionData } = useSession();
  const initialValue = {
    title: "",
    content: "",
    // userId: user.sub,
  };
  const [note, setNote] = useState(initialValue);

  function handleChange(event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) {
    // destructs the event.target
    const { name, value } = event.currentTarget
    // using prevValue of the state object, the spread operator to spread then add the new value.
    // [name] reads the name from the input tag
    setNote((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  }
  function renderInput() {
    setShowInput(true);
  }

  function handleClick(event: React.SyntheticEvent) {
    console.log("clicked");
    event.preventDefault();
    console.log("Note in POST", note);
 
  }

  return (
    <form className="bg-white rounded-lg shadow-md p-4 w-60 mx-4 my-4 float-lef relative">
      <input
        name="title"
        placeholder="Title"
        value={note.title}
        onChange={handleChange}
      />
      <textarea
        name="content"
        placeholder="Take a note..."
        onClick={renderInput}
        onChange={handleChange}
        value={note.content}
        rows={!showInput ? 1 : 3}
      />
      <Zoom in={showInput} className="absolute right-4 bottom-4 text-gray-700 border-none w-8 h-8 cursor-pointer outline-none rounded-full">
        <Fab onClick={handleClick}>
          <AddCircleIcon />
        </Fab>
      </Zoom>
    </form>
  );
};

export default TestCreateArea
