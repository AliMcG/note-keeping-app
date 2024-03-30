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
    setNote(initialValue);
  }

  return (
    <form className="relative float-left mx-4 my-4 flex w-3/4 flex-col rounded-lg bg-white p-4 font-monts shadow-2xl">
      <input
        name="title"
        className="text-lg outline-none"
        placeholder="Title"
        value={note.title}
        onChange={handleChange}
      />
      <textarea
        name="description"
        className="resize-none text-lg outline-none"
        placeholder="Take a note..."
        onClick={renderInput}
        onChange={handleChange}
        value={note.description}
        rows={!showInput ? 1 : 3}
      />
      <Zoom
        in={showInput}
        className="absolute -bottom-3 right-4 z-10 h-10 w-10 cursor-pointer rounded-full border-none bg-[#75988c] text-gray-900 outline-none"
      >
        <Fab onClick={handleClick}>
          <AddCircleIcon />
        </Fab>
      </Zoom>
    </form>
  );
};

export default TestCreateArea;
