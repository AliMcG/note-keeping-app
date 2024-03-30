import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

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
    <div className="relative float-left mx-4 my-4 w-60 h-40 rounded-lg bg-white p-4 shadow-2xl font-monts">
      <h1 className="text-lg font-semibold text-slate-950">{title}</h1>
      <p>{description}</p>
      {deleteFunction && <button
        className="absolute bottom-1 right-1 bg-slate-200 h-9 w-14 cursor-pointer rounded-lg border-none bg-transparent text-gray-600 outline-none hover:bg-gray-300"
        onClick={() => {
          deleteFunction?.(id);
        }}
      >
        <DeleteIcon />
      </button>} 
    </div>
  );
}
