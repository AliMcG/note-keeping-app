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
  const { refetch } = api.post.getLatest.useQuery();
  const { mutate } = api.post.create.useMutation({
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
  }

  return (
    <form className="float-lef relative mx-4 my-4 w-60 rounded-lg bg-white p-4 shadow-md">
      <input
        name="title"
        placeholder="Title"
        value={note.title}
        onChange={handleChange}
      />
      <textarea
        name="description"
        placeholder="Take a note..."
        onClick={renderInput}
        onChange={handleChange}
        value={note.description}
        rows={!showInput ? 1 : 3}
      />
      <Zoom
        in={showInput}
        className="absolute bottom-4 right-4 h-8 w-8 cursor-pointer rounded-full border-none text-gray-700 outline-none"
      >
        <Fab onClick={handleClick}>
          <AddCircleIcon />
        </Fab>
      </Zoom>
    </form>
  );
};

export default TestCreateArea;
