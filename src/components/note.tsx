import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button } from "rawsome-components";

export type Note = {
  id: string;
  title: string;
  description: string;
};

export type NoteProps = {
  note: Note;
  deleteFunction?: (id: string) => void;
};
export default function Note({ note, deleteFunction }: NoteProps) {
  const { title, description, id } = note;
  return (
    <div className="relative mx-4 my-4 h-40 w-60 rounded-lg bg-white p-4 font-monts shadow-2xl">
      <h1 className="text-primary-text text-lg font-semibold">{title}</h1>
      <p>{description}</p>
      {deleteFunction && (
        <Button
          intent={"secondary"}
          className="absolute bottom-1 right-1 h-9 w-10 cursor-pointer rounded-lg border-none text-gray-600 outline-none"
          onClick={() => 
            deleteFunction?.(id)
          }
        >
          <DeleteIcon />
        </Button>
      )}
    </div>
  );
}
