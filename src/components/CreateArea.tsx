import React, { useState } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

import { api } from "~/utils/api";

const TestCreateArea = () => {
  const [showInput, setShowInput] = useState(false);

  const initialValue = {
    title: "",
    description: "",
  };
  const [note, setNote] = useState(initialValue);
  const { refetch } = api.notes.getLatest.useQuery();
  const { mutate } = api.notes.create.useMutation({
    onSuccess: (response) => {
      console.log("succesful mutation with", response);
      void refetch();
    },
  });

  function handleChange(
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) {
    // destructs the event.target
    const { name, value } = event.currentTarget;
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
    event.preventDefault();
    mutate(note);
    setNote(initialValue)
  }

  return (
    <form className="float-left relative mx-4 my-4 w-[480px] rounded-lg bg-white p-4 shadow-2xl flex flex-col font-mono">
      <input
        name="title"
        className="outline-none text-lg"
        placeholder="Title"
        value={note.title}
        onChange={handleChange}
      />
      <textarea
        name="description"
        className="outline-none text-lg resize-none"
        placeholder="Take a note..."
        onClick={renderInput}
        onChange={handleChange}
        value={note.description}
        rows={!showInput ? 1 : 3}
      />
      <Zoom
        in={showInput}
        className="absolute -bottom-3 bg-[#75988c] right-4 h-10 w-10 cursor-pointer rounded-full border-none text-gray-900 outline-none"
      >
        <Fab onClick={handleClick}>
          <AddCircleIcon />
        </Fab>
      </Zoom>
    </form>
  );
};

export default TestCreateArea;
