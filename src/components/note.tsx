import React from "react"
import DeleteIcon from '@mui/icons-material/Delete';

export type Note = {
  id: string
  title: string
  description: string
}

export type NoteProps = {
  note: Note
  deleteFunction: (id: string) => void
}
export default function Note({ note, deleteFunction }: NoteProps) {
  const { title, description, id } = note
  return (
    <div className="bg-white rounded-lg shadow-md p-4 w-60 mx-4 my-4 float-left relative">
      <h1 className="text-lg">{title}</h1>
      <p>{description}</p>
      <button className="absolute bottom-1 right-1 text-gray-600 bg-transparent border-none w-14 h-9 cursor-pointer outline-none rounded-lg" onClick={() => {deleteFunction(id)}}>
        <DeleteIcon />
      </button>
    </div>
  )
}